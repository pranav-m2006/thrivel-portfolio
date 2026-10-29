import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Sparkles } from 'lucide-react';
import { getFrameImage, TOTAL_SEQUENCE_FRAMES, formatFrameUrl, loadImage } from '../utils/assetLoader';

interface GoogleFlowSequenceProps {
  /** If provided, manually maps an external scroll progress (0 to 1) to the sequence */
  scrollProgress?: number;
  /** Custom CSS class */
  className?: string;
  /** Whether to show the bottom interactive scrub controls */
  showControls?: boolean;
}

export default function GoogleFlowSequence({
  scrollProgress,
  className = '',
  showControls = true,
}: GoogleFlowSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentFrame, setCurrentFrame] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /**
   * Draw the specified frame index onto the canvas
   */
  const drawFrame = useCallback((frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = getFrameImage(frameNum);
    if (!img || !img.complete || img.naturalWidth === 0) {
      // If frame is still loading, try to load it immediately
      loadImage(formatFrameUrl(frameNum)).then(() => {
        const fresh = getFrameImage(frameNum);
        if (fresh && fresh.complete) {
          drawFrame(frameNum);
        }
      });
      return;
    }

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // Calculate 'cover' aspect ratio sizing
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Resize canvas according to display resolution & DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR at 1.5 for performance

    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);

    drawFrame(currentFrame);
  }, [currentFrame, drawFrame]);

  // Handle ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      resizeCanvas();
    });
    ro.observe(container);

    return () => ro.disconnect();
  }, [resizeCanvas]);

  // When external scrollProgress changes, update frame accordingly
  useEffect(() => {
    if (scrollProgress === undefined || isPlaying) return;

    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
    const targetFrame = Math.max(
      1,
      Math.min(TOTAL_SEQUENCE_FRAMES, Math.floor(clampedProgress * (TOTAL_SEQUENCE_FRAMES - 1)) + 1)
    );

    if (targetFrame !== currentFrame) {
      setCurrentFrame(targetFrame);
      drawFrame(targetFrame);
    }
  }, [scrollProgress, currentFrame, drawFrame, isPlaying]);

  // Auto-play / pause loop
  useEffect(() => {
    if (!isPlaying || reducedMotion) return;

    let animId: number;
    let lastTime = performance.now();
    const FPS = 30;
    const interval = 1000 / FPS;

    const playLoop = (time: number) => {
      const delta = time - lastTime;
      if (delta >= interval) {
        lastTime = time - (delta % interval);
        setCurrentFrame((prev) => {
          const next = prev >= TOTAL_SEQUENCE_FRAMES ? 1 : prev + 1;
          drawFrame(next);
          return next;
        });
      }
      animId = requestAnimationFrame(playLoop);
    };

    animId = requestAnimationFrame(playLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, reducedMotion, drawFrame]);

  // Draw initial frame once mounted
  useEffect(() => {
    resizeCanvas();
    drawFrame(1);
  }, [drawFrame, resizeCanvas]);

  // Handle manual scrub bar
  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setCurrentFrame(val);
    drawFrame(val);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentFrame(1);
    drawFrame(1);
  };

  return (
    <div
      ref={containerRef}
      className={`google-flow-sequence-wrapper ${className}`}
      aria-label="Google Flow 3D Cinematic Sequence"
    >
      {/* Sequence Canvas */}
      <canvas ref={canvasRef} className="flow-sequence-canvas" />

      {/* Subtle Arch Framing Vignette */}
      <div className="flow-sequence-vignette" aria-hidden="true" />

      {/* Floating Meta Badge */}
      <div className="flow-sequence-meta-badge">
        <Sparkles size={13} className="flow-badge-sparkle" />
        <span>Google Flow · 3D Zoom Sequence</span>
        <span className="flow-badge-frame-pill">
          {String(currentFrame).padStart(3, '0')} / {TOTAL_SEQUENCE_FRAMES}
        </span>
      </div>

      {/* Interactive Controls Overlay (Play/Pause, Slider, Reset) */}
      {showControls && (
        <div className="flow-sequence-controls">
          <div className="flow-controls-row">
            {/* Play/Pause Button */}
            <button
              type="button"
              className="flow-ctrl-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause sequence' : 'Play sequence'}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            {/* Reset Button */}
            <button
              type="button"
              className="flow-ctrl-btn"
              onClick={handleReset}
              aria-label="Reset to beginning"
              title="Reset"
            >
              <RotateCcw size={14} />
            </button>

            {/* Frame Scrubber Range */}
            <div className="flow-scrub-track">
              <input
                type="range"
                min={1}
                max={TOTAL_SEQUENCE_FRAMES}
                value={currentFrame}
                onChange={handleScrub}
                className="flow-scrubber-slider"
                aria-label="Frame scrubber"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

