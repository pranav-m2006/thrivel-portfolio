import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { preloadEssentialAssets, startBackgroundSequencePreload } from '../utils/assetLoader';

interface CinematicPreloaderProps {
  onLoadingComplete?: () => void;
  forceShow?: boolean;
}

export default function CinematicPreloader({ onLoadingComplete, forceShow = false }: CinematicPreloaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const geometricSparkRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const word3Ref = useRef<HTMLSpanElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const counterWrapRef = useRef<HTMLDivElement>(null);
  const counterNumRef = useRef<HTMLSpanElement>(null);
  const statusLabelRef = useRef<HTMLSpanElement>(null);
  const geometricLineRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(() => {
    if (forceShow) return true;
    if (typeof window === 'undefined') return true;
    // Check if user already saw the preloader during this browser session
    const seen = sessionStorage.getItem('pranav_portfolio_intro_seen');
    return !seen;
  });

  const [counterValue, setCounterValue] = useState(0);
  const [statusMessage, setStatusMessage] = useState('CALIBRATING ENVIRONMENT');

  useEffect(() => {
    if (!isVisible) {
      onLoadingComplete?.();
      // Ensure remaining background frames start loading even if preloader is skipped
      startBackgroundSequencePreload();
      return;
    }

    // Lock page scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.body.style.overflow = originalOverflow;
      sessionStorage.setItem('pranav_portfolio_intro_seen', 'true');
      setIsVisible(false);
      onLoadingComplete?.();
      startBackgroundSequencePreload();
      return;
    }

    const overlay = overlayRef.current;
    if (!overlay) return;

    let isCompleted = false;
    const progressProxy = { val: 0 };

    const ctx = gsap.context(() => {
      // 1. Initial Orchestrated Entrance Timeline
      const masterTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Overlay fades in warmly
      masterTl.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.45, ease: 'power2.inOut' }
      );

      // Caption metadata row reveals
      masterTl.fromTo(
        captionRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.15'
      );

      // PRANAV M Monumental Upward Reveal (clip-path mask)
      masterTl.fromTo(
        nameRef.current,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, ease: 'power4.out' },
        '-=0.25'
      );

      // Subtle rusty orange geometric line sweep underneath title
      masterTl.fromTo(
        geometricLineRef.current,
        { scaleX: 0, transformOrigin: 'center center', opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.75, ease: 'power2.inOut' },
        '-=0.45'
      );

      // Tagline: Reveal DESIGN. BUILD. IMPROVE. one word at a time
      const words = [word1Ref.current, word2Ref.current, word3Ref.current];
      masterTl.fromTo(
        words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.14,
          ease: 'power3.out',
        },
        '-=0.35'
      );

      // Reveal bottom progress and counter
      masterTl.fromTo(
        [counterWrapRef.current, progressBarRef.current?.parentElement],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45 },
        '-=0.2'
      );

      // 2. Asset Hydration Tracking Function
      const handleAssetProgress = (pct: number, message: string) => {
        setStatusMessage(message);

        // Smooth tween to target percentage so counter doesn't jump abruptly
        gsap.to(progressProxy, {
          val: pct,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
          onUpdate: () => {
            const currentInt = Math.round(progressProxy.val);
            setCounterValue(currentInt);

            // Animate thin horizontal progress bar via scaleX (GPU compositor friendly)
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, {
                scaleX: currentInt / 100,
                transformOrigin: 'left center',
              });
            }

            // Animate rusty orange geometric pip
            if (geometricSparkRef.current) {
              gsap.set(geometricSparkRef.current, {
                left: `${currentInt}%`,
              });
            }

            // When progress reaches 100%, trigger smooth upward exit
            if (currentInt >= 100 && !isCompleted) {
              isCompleted = true;
              triggerExitSequence();
            }
          },
        });
      };

      // 3. Smooth Cinematic Upward Reveal Exit
      const triggerExitSequence = () => {
        setStatusMessage('ENTERING STUDIO');

        const exitTl = gsap.timeline({
          delay: 0.22, // Brief luxury pause to absorb 100% completion
          onComplete: () => {
            // Restore body scroll
            document.body.style.overflow = originalOverflow;
            // Mark session as seen
            sessionStorage.setItem('pranav_portfolio_intro_seen', 'true');
            setIsVisible(false);

            // Notify parent to reveal ScrollTrigger animations
            onLoadingComplete?.();

            // Kick off progressive background streaming of remaining sequence frames
            startBackgroundSequencePreload();
          },
        });

        // Delicate fade of details before upward curtain lift
        exitTl.to([captionRef.current, counterWrapRef.current, geometricLineRef.current], {
          opacity: 0,
          y: -15,
          duration: 0.35,
          ease: 'power2.in',
        });

        // Editorial text shifts slightly upward in anticipation
        exitTl.to(
          nameRef.current,
          {
            yPercent: -25,
            opacity: 0.85,
            duration: 0.4,
            ease: 'power2.in',
          },
          '-=0.2'
        );

        // Upward curtain reveal: the entire overlay slides up smoothly
        exitTl.to(
          overlay,
          {
            yPercent: -100,
            duration: 0.95,
            ease: 'power4.inOut',
          },
          '-=0.15'
        );
      };

      // Start measurable asset tracking
      preloadEssentialAssets((pct, msg) => {
        handleAssetProgress(pct, msg);
      });

    }, overlayRef);

    return () => {
      document.body.style.overflow = originalOverflow;
      ctx.revert();
    };
  }, [isVisible, forceShow, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="cinematic-preloader-overlay"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio experience"
    >
      {/* Background Subtle Paper Grain & Ambient Radial Lighting */}
      <div className="preloader-ambient-glow" aria-hidden="true" />
      <div className="preloader-grain-texture" aria-hidden="true" />

      {/* TOP BAR: Studio Caption & Live Status */}
      <div ref={captionRef} className="preloader-top-bar">
        <div className="preloader-caption-brand">
          <span className="preloader-pulse-dot" aria-hidden="true" />
          <span className="preloader-caption-text">CREATIVE DEVELOPMENT / PORTFOLIO 2026</span>
        </div>
        <div className="preloader-top-meta">
          <span ref={statusLabelRef} className="preloader-status-text">
            {statusMessage}
          </span>
        </div>
      </div>

      {/* CENTER STAGE: Editorial Typographic Presentation */}
      <div className="preloader-center-stage">
        {/* Large Bold Editorial Name */}
        <div className="preloader-title-clip">
          <h1 ref={nameRef} className="preloader-monumental-name">
            PRANAV M
          </h1>
        </div>

        {/* Subtle Rusty Orange Accent Moving Line */}
        <div ref={geometricLineRef} className="preloader-accent-line-wrap" aria-hidden="true">
          <div className="preloader-accent-line" />
          <div className="preloader-geometric-diamond" />
        </div>

        {/* Word-by-Word Reveal Tagline */}
        <div className="preloader-tagline-container">
          <div className="preloader-word-clip">
            <span ref={word1Ref} className="preloader-word word-design">
              DESIGN.
            </span>
          </div>
          <div className="preloader-word-clip">
            <span ref={word2Ref} className="preloader-word word-build">
              BUILD.
            </span>
          </div>
          <div className="preloader-word-clip">
            <span ref={word3Ref} className="preloader-word word-improve">
              IMPROVE.
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: Percentage Counter & Thin Horizontal Progress Line */}
      <div className="preloader-bottom-bar">
        {/* Progress Bar Container */}
        <div className="preloader-progress-track-wrapper">
          <div className="preloader-progress-track">
            {/* Horizontal fill bar driven by scaleX */}
            <div ref={progressBarRef} className="preloader-progress-fill" />
            {/* Subtle moving rusty orange geometric spark */}
            <div ref={geometricSparkRef} className="preloader-progress-spark" />
          </div>
        </div>

        {/* Bottom Details Row */}
        <div ref={counterWrapRef} className="preloader-footer-row">
          <div className="preloader-system-spec">
            <span>WARM COASTAL EDITORIAL MOTION SYSTEM</span>
          </div>

          {/* Real Counter from 0 to 100 */}
          <div className="preloader-counter-display">
            <span ref={counterNumRef} className="preloader-counter-digits">
              {String(counterValue).padStart(2, '0')}
            </span>
            <span className="preloader-counter-percent">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

