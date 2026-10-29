import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DisciplineOrigin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.disc-origin-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        stagger: 0.18,
        duration: 0.85,
        ease: 'power3.out',
      });

      gsap.from('.disc-origin-payoff', {
        scrollTrigger: {
          trigger: '.disc-origin-payoff',
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="discipline-origin-section" ref={containerRef}>
      <div className="container">
        
        <div className="disc-origin-badge-wrap">
          <span className="craft-section-badge">ORIGIN & RIGOR</span>
        </div>

        <div className="disc-origin-lines-stack">
          <p className="disc-origin-line line-black">
            ATHLETICS TAUGHT <span className="disc-badge-pop bg-crimson">DISCIPLINE.</span>
          </p>
          <p className="disc-origin-line line-crimson">
            SOFTWARE TAUGHT <span className="disc-badge-pop bg-black">CURIOSITY.</span>
          </p>
          <p className="disc-origin-line line-black">
            PROBLEM-SOLVING TAUGHT <span className="disc-badge-pop bg-crimson">RESPONSIBILITY.</span>
          </p>
        </div>

        <div className="disc-origin-payoff">
          <div className="disc-flow-indicator">
            <span>Discipline</span>
            <span className="disc-arrow">→</span>
            <span>Curiosity</span>
            <span className="disc-arrow">→</span>
            <span>Responsibility</span>
          </div>
          <h2 className="disc-payoff-headline">EVERYTHING I BUILD.</h2>
          <p className="disc-payoff-sub">
            Whether preparing for competitive programming contests or architecting full-stack React systems,
            the same standard applies: show up consistently, reject complacency, and build with human respect.
          </p>
        </div>

      </div>
    </section>
  );
}
