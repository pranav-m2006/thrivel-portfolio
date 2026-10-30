/**
 * Asset Loader Utility for Pranav M Portfolio
 * Tracks real asset readiness (critical fonts, essential textures, first 40 sequence frames)
 * Enforces a minimum display time of 3.5–4.0 seconds, waits if essential frames take longer,
 * and streams all 299 Google Flow frames progressively in the background.
 *
 * Performance features:
 * - Direct O(1) indexed frame cache
 * - Deduplicated in-flight requests
 * - Scroll-aware background loading (pauses when user scrolls to prioritize active frames)
 * - Outward spiral preloading (prioritizes frames near the user's current scroll position)
 * - Memory retention guard to prevent GPU bitmap exhaustion
 * - Graceful fallback so the canvas never flashes or goes blank
 */

import { SEQUENCE_FRAMES, TOTAL_SEQUENCE_FRAMES, getFrameUrlByIndex } from './sequenceManifest';

export { SEQUENCE_FRAMES, TOTAL_SEQUENCE_FRAMES };

// Global in-memory cache for loaded images so canvas and preloader share references
export const imageCache = new Map<string, HTMLImageElement>();

// Fast O(1) indexed array cache for all 299 sequence frames (1-based index)
export const framesCache: (HTMLImageElement | null)[] = new Array(TOTAL_SEQUENCE_FRAMES + 1).fill(null);

// In-flight loading promises to prevent redundant network requests and duplicate image decodes
const inFlightRequests = new Map<string, Promise<boolean>>();

// Cache bounds
const MAX_DECODED_FRAMES = 140; // Max frames held concurrently in active memory
let lastActiveFrame = 1;
let isUserScrolling = false;
let scrollDebounceTimer: ReturnType<typeof setTimeout> | null = null;
let backgroundChunkTimer: ReturnType<typeof setTimeout> | null = null;
let isBackgroundPreloadStarted = false;

export const ESSENTIAL_SEQUENCE_FRAMES_COUNT = 40; // Preload first 40 frames before reveal
export const MINIMUM_PRELOADER_DURATION_MS = 3500; // Visible for at least 3.5 seconds

export const formatFrameUrl = (frameIndex: number): string => {
  // frameIndex is 1-indexed (1 to 299)
  return getFrameUrlByIndex(frameIndex - 1);
};

// Essential landing-page textures and UI assets
export const ESSENTIAL_IMAGES = [
  '/images/paper-grain.png',
  '/images/hero-arches.jpg',
];

interface PreloadProgressCallback {
  (percentage: number, statusMessage: string): void;
}

/**
 * Checks whether an exact numerical frame is already loaded, decoded, and ready to render
 */
export const isExactFrame = (frameIndex: number): boolean => {
  if (frameIndex < 1 || frameIndex > TOTAL_SEQUENCE_FRAMES) return false;
  const img = framesCache[frameIndex];
  return Boolean(img && img.complete && img.naturalWidth > 0);
};

/**
 * Prunes frames that are far away from the user's current scroll position
 * to avoid excessive uncompressed bitmap memory on GPU/RAM.
 * Frame 1 is permanently pinned so the initial state is always ready.
 */
const pruneFarFrames = () => {
  let loadedCount = 0;
  for (let i = 1; i <= TOTAL_SEQUENCE_FRAMES; i++) {
    if (framesCache[i]) loadedCount++;
  }

  if (loadedCount <= MAX_DECODED_FRAMES) return;

  // Evict frames furthest from lastActiveFrame (except frame 1)
  const distances: { index: number; dist: number }[] = [];
  for (let i = 2; i <= TOTAL_SEQUENCE_FRAMES; i++) {
    if (framesCache[i]) {
      distances.push({ index: i, dist: Math.abs(i - lastActiveFrame) });
    }
  }

  // Sort by distance descending (furthest first)
  distances.sort((a, b) => b.dist - a.dist);

  const toRemove = loadedCount - MAX_DECODED_FRAMES;
  for (let k = 0; k < Math.min(toRemove, distances.length); k++) {
    const idx = distances[k].index;
    // Only evict if distance is greater than 60 frames away from active focus
    if (distances[k].dist > 60) {
      framesCache[idx] = null;
    }
  }
};

/**
 * Loads a single image and caches it in memory, decoding it asynchronously for smooth canvas rendering.
 * Resolves safely even if the image fails (does not block loading indefinitely).
 * Prevents redundant fetches and duplicate decoding via in-flight request tracking.
 */
export const loadImage = (src: string): Promise<boolean> => {
  // Check if already loaded and ready
  if (imageCache.has(src)) {
    const existing = imageCache.get(src)!;
    if (existing.complete && existing.naturalWidth > 0) {
      return Promise.resolve(true);
    }
  }

  // Deduplicate in-flight requests
  if (inFlightRequests.has(src)) {
    return inFlightRequests.get(src)!;
  }

  const promise = new Promise<boolean>((resolve) => {
    const img = new Image();
    img.src = src;

    const finish = (success: boolean) => {
      inFlightRequests.delete(src);
      if (success) {
        imageCache.set(src, img);
        // Map into framesCache if it's a sequence frame
        const match = src.match(/ezgif-frame-(\d+)\.jpg/);
        if (match) {
          const idx = parseInt(match[1], 10);
          if (idx >= 1 && idx <= TOTAL_SEQUENCE_FRAMES) {
            framesCache[idx] = img;
            pruneFarFrames();
          }
        }
      }
      resolve(success);
    };

    img.onload = () => {
      if ('decode' in img) {
        img
          .decode()
          .then(() => finish(true))
          .catch(() => finish(true)); // Image is usable even if decode reports aborted
      } else {
        finish(true);
      }
    };

    img.onerror = () => {
      console.warn(`[AssetLoader] Optional asset failed to load: ${src}`);
      finish(false);
    };
  });

  inFlightRequests.set(src, promise);
  return promise;
};

/**
 * Directly preloads a specific numerical frame (1 to 299)
 */
export const preloadFrame = (frameIndex: number): Promise<boolean> => {
  if (frameIndex >= 1 && frameIndex <= TOTAL_SEQUENCE_FRAMES) {
    const cached = framesCache[frameIndex];
    if (cached && cached.complete && cached.naturalWidth > 0) {
      return Promise.resolve(true);
    }
    return loadImage(formatFrameUrl(frameIndex));
  }
  return Promise.resolve(false);
};

/**
 * Notifies the loader of the current active frame and scroll activity.
 * Temporarily pauses background loading while user is actively scrolling
 * so network and decoding threads are dedicated 100% to on-demand scroll frames.
 */
export const notifyScrollActivity = (targetFrame: number) => {
  lastActiveFrame = targetFrame;
  isUserScrolling = true;

  if (scrollDebounceTimer) {
    clearTimeout(scrollDebounceTimer);
  }

  scrollDebounceTimer = setTimeout(() => {
    isUserScrolling = false;
    scheduleNextBackgroundChunk();
  }, 160);
};

/**
 * Finds next unloaded frames closest to the last active scroll position
 */
const findNextUnloadedFrames = (count: number): number[] => {
  const result: number[] = [];
  const maxRadius = Math.max(lastActiveFrame, TOTAL_SEQUENCE_FRAMES - lastActiveFrame);

  // Search forward first (user natural scroll direction), then backward
  for (let r = 1; r <= maxRadius; r++) {
    const forward = lastActiveFrame + r;
    if (forward <= TOTAL_SEQUENCE_FRAMES && !isExactFrame(forward)) {
      result.push(forward);
      if (result.length >= count) return result;
    }
    const backward = lastActiveFrame - r;
    if (backward >= 1 && !isExactFrame(backward)) {
      result.push(backward);
      if (result.length >= count) return result;
    }
  }

  return result;
};

/**
 * Schedules a background chunk load only when the user is not actively scrolling
 */
const scheduleNextBackgroundChunk = () => {
  if (backgroundChunkTimer) {
    clearTimeout(backgroundChunkTimer);
    backgroundChunkTimer = null;
  }

  if (isUserScrolling) return;

  const nextFrames = findNextUnloadedFrames(4);
  if (nextFrames.length === 0) return; // All frames loaded

  const loadChunk = () => {
    if (isUserScrolling) return;

    const promises = nextFrames.map((f) => preloadFrame(f));
    Promise.all(promises).then(() => {
      if (!isUserScrolling) {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(scheduleNextBackgroundChunk);
        } else {
          backgroundChunkTimer = setTimeout(scheduleNextBackgroundChunk, 70);
        }
      }
    });
  };

  backgroundChunkTimer = setTimeout(loadChunk, 50);
};

/**
 * Preloads all essential assets required for a smooth landing reveal.
 * Enforces a minimum visible time of at least 3.5 seconds, while waiting
 * if essential frames take longer than 4 seconds.
 */
export const preloadEssentialAssets = (onProgress?: PreloadProgressCallback): Promise<void> => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    let completedWeight = 0;
    const totalWeight = 100;
    let isAssetsFinished = false;

    // Weights:
    // Fonts: 15%
    // Essential Textures: 15%
    // First 40 sequence frames: 70% (~1.75% each)
    const fontWeight = 15;
    const imageWeight = 15 / Math.max(1, ESSENTIAL_IMAGES.length);
    const frameWeight = 70 / ESSENTIAL_SEQUENCE_FRAMES_COUNT;

    const checkFinished = () => {
      if (completedWeight >= totalWeight - 0.5 && !isAssetsFinished) {
        isAssetsFinished = true;
      }

      const elapsed = Date.now() - startTime;
      if (isAssetsFinished && elapsed >= MINIMUM_PRELOADER_DURATION_MS) {
        onProgress?.(100, 'STUDIO READY');
        resolve();
      }
    };

    const updateWeight = (weightToAdd: number, message: string) => {
      completedWeight += weightToAdd;
      const assetPct = Math.min(95, Math.round((completedWeight / totalWeight) * 95));
      const elapsed = Date.now() - startTime;
      const timePct = Math.min(95, Math.round((elapsed / MINIMUM_PRELOADER_DURATION_MS) * 95));

      // The displayed percentage reflects both real asset loading and elapsed time
      const combinedPct = Math.max(assetPct, Math.min(assetPct + 10, timePct));
      onProgress?.(combinedPct, message);
      checkFinished();
    };

    // Smooth time tick interval while waiting for minimum display time
    const tickInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const timeRatio = Math.min(1, elapsed / MINIMUM_PRELOADER_DURATION_MS);
      const targetPct = Math.round(timeRatio * 95);

      if (!isAssetsFinished && elapsed > 4000) {
        onProgress?.(Math.min(96, targetPct), 'HYDRATING CINEMATIC HERO FRAMES...');
      } else if (!isAssetsFinished) {
        onProgress?.(Math.min(92, targetPct), 'CALIBRATING GSAP HERO SEQUENCE...');
      }

      if (isAssetsFinished && elapsed >= MINIMUM_PRELOADER_DURATION_MS) {
        clearInterval(tickInterval);
        onProgress?.(100, 'ENTERING STUDIO');
        resolve();
      }
    }, 100);

    // 1. Font Readiness
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready
        .then(() => {
          updateWeight(fontWeight, 'Typography active');
        })
        .catch(() => {
          updateWeight(fontWeight, 'Default typography ready');
        });
    } else {
      updateWeight(fontWeight, 'Typography ready');
    }

    // 2. Essential Landing Textures
    ESSENTIAL_IMAGES.forEach((src) => {
      loadImage(src).then(() => {
        updateWeight(imageWeight, 'Surface textures loaded');
      });
    });

    // 3. First Batch of Google Flow Sequence Frames (40 essential frames)
    let framesLoadedCount = 0;
    for (let i = 1; i <= ESSENTIAL_SEQUENCE_FRAMES_COUNT; i++) {
      preloadFrame(i).then(() => {
        framesLoadedCount++;
        updateWeight(
          frameWeight,
          `Hydrating cinematic sequence (${framesLoadedCount}/${ESSENTIAL_SEQUENCE_FRAMES_COUNT})`
        );
      });
    }
  });
};

/**
 * Background progressive loader for the remaining sequence frames.
 * Operates gracefully in low-priority chunks and pauses whenever the user scrolls.
 */
export const startBackgroundSequencePreload = () => {
  if (isBackgroundPreloadStarted || typeof window === 'undefined') return;
  isBackgroundPreloadStarted = true;

  // Give the reveal animation a gentle 250ms breather before starting background stream
  setTimeout(() => {
    scheduleNextBackgroundChunk();
  }, 250);
};

/**
 * Helper to fetch a frame from cache or return nearest fallback in O(1).
 * Never returns null once frame 1 is ready, guaranteeing canvas never flashes.
 */
export const getFrameImage = (frameNumber: number): HTMLImageElement | null => {
  // 1. Exact frame match
  if (frameNumber >= 1 && frameNumber <= TOTAL_SEQUENCE_FRAMES) {
    const exact = framesCache[frameNumber];
    if (exact && exact.complete && exact.naturalWidth > 0) return exact;
  }

  // 2. Map lookup fallback
  const url = formatFrameUrl(frameNumber);
  if (imageCache.has(url)) {
    const img = imageCache.get(url)!;
    if (img.complete && img.naturalWidth > 0) {
      if (frameNumber >= 1 && frameNumber <= TOTAL_SEQUENCE_FRAMES) {
        framesCache[frameNumber] = img;
      }
      return img;
    }
  }

  // 3. Nearest lower frame
  for (let f = frameNumber - 1; f >= 1; f--) {
    const fallback = framesCache[f];
    if (fallback && fallback.complete && fallback.naturalWidth > 0) return fallback;
  }

  // 4. Nearest higher frame
  for (let f = frameNumber + 1; f <= TOTAL_SEQUENCE_FRAMES; f++) {
    const fallback = framesCache[f];
    if (fallback && fallback.complete && fallback.naturalWidth > 0) return fallback;
  }

  // 5. Ultimate pinned frame 1 fallback
  const frame1 = framesCache[1] || imageCache.get(formatFrameUrl(1));
  if (frame1 && frame1.complete && frame1.naturalWidth > 0) return frame1;

  return null;
};
