import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessLifecycle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.process-header-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.process-step-card', {
        scrollTrigger: {
          trigger: '.process-steps-grid',
          start: 'top 85%',
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      phase: 'DISCOVERY',
      title: 'Problem Framing',
      desc: 'Understand the core user constraint, technical requirements, and target metrics before writing a single line of code.',
    },
    {
      num: '02',
      phase: 'ARCHITECTURE',
      title: 'System Design',
      desc: 'Map data structures, state boundaries, component hierarchies, and API contracts to ensure modular scalability.',
    },
    {
      num: '03',
      phase: 'STRUCTURE',
      title: 'Semantic Interface',
      desc: 'Build accessible HTML5 document outlines, keyboard-friendly flows, and zero-bloat modern CSS token foundations.',
    },
    {
      num: '04',
      phase: 'LOGIC',
      title: 'Component Engineering',
      desc: 'Develop responsive React components, declarative hooks, typed schemas, and resilient error boundaries.',
    },
    {
      num: '05',
      phase: 'INTERACTION',
      title: 'Purposeful Motion',
      desc: 'Incorporate hardware-accelerated GSAP timelines and micro-interactions that communicate state without delaying user flow.',
    },
    {
      num: '06',
      phase: 'PRODUCTION',
      title: 'Audit & Deployment',
      desc: 'Audit Core Web Vitals, verify cross-browser responsiveness, check contrast ratios, and deploy to live production.',
    },
  ];

  return (
    <section className="process-lifecycle-section" ref={containerRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="process-header-reveal">
          <span className="craft-section-badge">ENGINEERING LIFECYCLE</span>
          <h2 className="craft-section-title">How I Build.</h2>
          <p className="craft-section-quote">
            “Disciplined process. Predictable execution. Interfaces that feel inevitable.”
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="process-steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-card">
              <div className="process-card-top">
                <span className="process-card-num">{step.num}</span>
                <span className="process-card-phase">{step.phase}</span>
              </div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Flow Footer Track */}
        <div className="process-footer-track">
          <span className="process-track-text">
            Discovery ➔ Architecture ➔ Structure ➔ Engineering ➔ Motion ➔ Production
          </span>
        </div>

      </div>
    </section>
  );
}
