import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

export default function RouteTransition() {
  const location = useLocation();
  const curtainRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip animation on initial page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const curtain = curtainRef.current;
    if (!curtain) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Sand curtain sweeps in from top, then exits downward (0.6s total)
      tl.set(curtain, { display: 'block', y: '-100%' })
        .to(curtain, {
          y: '0%',
          duration: 0.28,
          ease: 'power3.in',
        })
        .to(curtain, {
          y: '100%',
          duration: 0.32,
          ease: 'power3.out',
        })
        .set(curtain, { display: 'none' });
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div
      ref={curtainRef}
      className="sand-curtain-transition"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#D9C2A3', // Sunlit Sand
        zIndex: 99999,
        display: 'none',
        pointerEvents: 'none',
      }}
    />
  );
}
