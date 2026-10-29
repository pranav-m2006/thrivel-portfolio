import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ChevronDown } from 'lucide-react';
import { getFrameImage, TOTAL_SEQUENCE_FRAMES, preloadFrame } from '../utils/assetLoader';

gsap.registerPlugin(ScrollTrigger);

interface GsapHeroSequenceProps {
  onSequenceComplete?: () => void;
}

const STAGES = [
  {
    num: '01',
    title: 'UNDERSTAND',
    desc: 'Understand the problem, identify the requirements, and determine what needs to be solved.',
  },
  {
    num: '02',
    title: 'PLAN',
    desc: 'Break the problem into smaller tasks and create a clear approach.',
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'Turn ideas into functional digital products using code and modern technologies.',
  },
  {
    num: '04',
    title: 'IMPROVE',
    desc: 'Test the solution, fix issues, and refine the final result.',
  },
];

export default function GsapHeroSequence({ onSequenceComplete }: GsapHeroSequenceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const stageContentRef = useRef<HTMLDivElement>(null);
  const frameBadgeRef = useRef<HTMLSpanElement>(null);

  const [activeStage, setActiveStage] = useState(0);
  const activeStageRef = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Performance tracking refs (avoiding React re-renders during high-speed scrubbing)
  const lastDrawnFrameRef = useRef(0);
  const lastTargetFrameRef = useRef(1);
  const rafIdRef = useRef<number | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawDimsRef = useRef({ offsetX: 0, offsetY: 0, drawWidth: 0, drawHeight: 0 });

  // Check reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /**
   * Fast, optimized canvas draw. Uses cached context and precomputed cover dimensions.
   */
  const renderFrameToCanvas = useCallback((frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext('2d', { alpha: false, desynchronized: true });
    }
    const ctx = ctxRef.current;
    if (!ctx) return;

    const img = getFrameImage(frameNum);
    if (!img || !img.complete || img.naturalWidth === 0) {
      // If frame is still decoding, preload immediately and redraw once ready
      preloadFrame(frameNum).then(() => {
        if (lastTargetFrameRef.current === frameNum) {
          renderFrameToCanvas(frameNum);
        }
      });
      return;
    }

    const { offsetX, offsetY, drawWidth, drawHeight } = drawDimsRef.current;
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = frameNum;
  }, []);

  /**
   * Responsive canvas sizing: precomputes cover dimensions once per resize
   * to eliminate all math and string operations from the scroll loop.
   */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = window.innerWidth;
    const h = window.innerHeight;

    const cw = Math.floor(w * dpr);
    const ch = Math.floor(h * dpr);

    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      if (!ctxRef.current) {
        ctxRef.current = canvas.getContext('2d', { alpha: false, desynchronized: true });
      }

      const ctx = ctxRef.current;
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'medium';
      }

      // Precalculate cover dimensions once for 1920x1080 (16:9) aspect ratio
      const imgRatio = 1920 / 1080;
      const canvasRatio = cw / ch;

      let drawWidth = cw;
      let drawHeight = ch;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawWidth = cw;
        drawHeight = cw / imgRatio;
        offsetY = (ch - drawHeight) / 2;
      } else {
        drawHeight = ch;
        drawWidth = ch * imgRatio;
        offsetX = (cw - drawWidth) / 2;
      }

      drawDimsRef.current = { offsetX, offsetY, drawWidth, drawHeight };
    }

    renderFrameToCanvas(lastDrawnFrameRef.current || 1);
  }, [renderFrameToCanvas]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Initial frame draw
  useEffect(() => {
    renderFrameToCanvas(1);
  }, [renderFrameToCanvas]);

  // Animate stage text reveals smoothly only when the active stage actually changes
  useEffect(() => {
    const content = stageContentRef.current;
    if (!content) return;

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out' }
    );
  }, [activeStage]);

  // GSAP ScrollTrigger Sequence Setup
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const ctx = gsap.context(() => {
      // Pinned Scroll-Driven Sequence using 100% of the 299 frames
      // scrub: 0.35 pairs with Lenis to deliver instant, responsive scrubbing with zero rubber-banding delay
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=4200',
        pin: true,
        scrub: 0.35,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Precise mapping of ScrollTrigger progress (0.0 to 1.0) across all 299 frames
          const targetFrame = Math.min(
            TOTAL_SEQUENCE_FRAMES,
            Math.max(1, Math.round(self.progress * (TOTAL_SEQUENCE_FRAMES - 1)) + 1)
          );

          // Update stage index only when stage boundaries change (exactly 4 times across entire scroll)
          const stageIndex = Math.min(3, Math.floor(self.progress * 4));
          if (activeStageRef.current !== stageIndex) {
            activeStageRef.current = stageIndex;
            setActiveStage(stageIndex);
          }

          // Update live frame counter via direct DOM ref (ZERO React component re-renders!)
          if (frameBadgeRef.current) {
            frameBadgeRef.current.textContent = `Frame ${String(targetFrame).padStart(3, '0')} / ${TOTAL_SEQUENCE_FRAMES}`;
          }

          // Lookahead preloading for upcoming frames in the direction of scroll (both forward and backward)
          const dir = self.direction || 1;
          if (dir > 0) {
            for (let i = 1; i <= 4; i++) {
              if (targetFrame + i <= TOTAL_SEQUENCE_FRAMES) preloadFrame(targetFrame + i);
            }
          } else {
            for (let i = 1; i <= 4; i++) {
              if (targetFrame - i >= 1) preloadFrame(targetFrame - i);
            }
          }

          // Batch frame rendering via requestAnimationFrame to guarantee at most 1 draw per display refresh
          if (targetFrame !== lastDrawnFrameRef.current) {
            lastTargetFrameRef.current = targetFrame;
            if (!rafIdRef.current) {
              rafIdRef.current = requestAnimationFrame(() => {
                rafIdRef.current = null;
                renderFrameToCanvas(lastTargetFrameRef.current);
              });
            }
          }

          if (self.progress >= 0.99) {
            onSequenceComplete?.();
          }
        },
      });

      // Subtle entrance for the right-side explanation panel on mount
      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.25, ease: 'power3.out' }
        );
      }
    }, sectionRef);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      ctx.revert();
    };
  }, [reducedMotion, renderFrameToCanvas, onSequenceComplete]);

  const currentStageData = STAGES[activeStage] || STAGES[0];

  return (
    <section
      ref={sectionRef}
      className="gsap-hero-pinned-section"
      aria-label="Interactive 3D Google Flow Cinematic Sequence Hero"
    >
      <div className="gsap-hero-viewport">
        {/* Fullscreen HTML5 Frame Canvas — 100% unobstructed in center */}
        <canvas ref={canvasRef} className="gsap-hero-canvas" />

        {/* Cinematic Warm Vignette & Top Navigation Shield */}
        <div className="gsap-hero-vignette" aria-hidden="true" />
        <div className="gsap-hero-ambient-shade" aria-hidden="true" />

        {/* ===================================================================
            BOTTOM-RIGHT CONTROL RAIL
            Explanation panel positioned in the bottom-right area, directly
            above the Gemini star symbol. Leaves the center and upper areas completely free.
            =================================================================== */}
        <div className="gsap-hero-right-rail">
          {/* Dedicated Explanation Panel */}
          <div ref={panelRef} className="gsap-hero-side-panel">
            <div className="side-panel-header">
              <span className="side-panel-badge">ENGINEERING PROCESS</span>
              <div className="side-panel-stepper">
                {STAGES.map((s, idx) => (
                  <span
                    key={s.num}
                    className={`stepper-dot ${idx === activeStage ? 'is-active' : ''}`}
                    title={`Stage ${s.num}: ${s.title}`}
                  />
                ))}
              </div>
            </div>

            <div ref={stageContentRef} className="side-panel-body">
              <div className="stage-numeral-row">
                <span className="stage-numeral">{currentStageData.num}</span>
                <span className="stage-divider">—</span>
                <h2 className="stage-title">{currentStageData.title}</h2>
              </div>

              <p className="stage-description">{currentStageData.desc}</p>
            </div>
          </div>

          {/* Gemini / Star Symbol & Live Frame Badge (directly beneath the explanation panel) */}
          <div className="gsap-hero-gemini-badge">
            <div className="gemini-star-icon" aria-hidden="true">
              <Sparkles size={15} />
            </div>
            <div className="gemini-badge-meta">
              <span className="gemini-badge-title">Google Flow Sequence</span>
              <span ref={frameBadgeRef} className="gemini-badge-frame">
                Frame 001 / {TOTAL_SEQUENCE_FRAMES}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue (centered horizontally) */}
        <div className="gsap-hero-bottom-scroll-cue">
          <span className="scroll-cue-text">Scroll to progress through sequence</span>
          <ChevronDown size={15} className="scroll-cue-bounce" />
        </div>

      </div>
    </section>
  );
}
