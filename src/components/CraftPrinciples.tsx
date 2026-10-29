import { useLayoutEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CraftPrinciples() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.craft-header-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.craft-artifact-card', {
        scrollTrigger: {
          trigger: '.craft-comparison-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.18,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const refuseList = [
    { title: 'Slow interfaces', desc: 'Bloated bundles, layout shifts, or unoptimized assets exceeding sub-second budgets.' },
    { title: 'Generic templates', desc: 'Copy-pasted component libraries with cookie-cutter styles and zero design intentionality.' },
    { title: 'Superficial AI gimmicks', desc: 'Slapping AI buzzwords onto trivial CRUD apps without real predictive or assistive value.' },
    { title: 'Poor accessibility', desc: 'Div soup lacking semantic landmarks, missing keyboard focus rings, and poor color contrast.' },
    { title: 'Broken or distracting animations', desc: 'Gratuitous spinning effects that slow user workflows instead of communicating state change.' },
    { title: 'Invented metrics & fake agency claims', desc: 'Pretending to have served millions or generated billions with zero verifiable proof.' },
  ];

  const guaranteedList = [
    { title: 'Sub-second performance', desc: 'Engineered for instant visual readiness, optimized bundle chunks, and 60fps interactions.' },
    { title: 'Semantic accessible HTML5', desc: 'Strict document hierarchy, screen-reader friendly landmarks, and keyboard navigable controls.' },
    { title: 'Motion with clear purpose', desc: 'Every GSAP transition explains context, confirms user actions, and honors reduced motion.' },
    { title: 'Clean component architecture', desc: 'Reusable React hooks, typed interfaces, and zero spaghetti state management.' },
    { title: 'Algorithmic discipline', desc: 'Grounded in data structures and problem solving tested through 150+ LeetCode problems.' },
    { title: 'Transparent verified proof', desc: 'Real registered patents, verified hackathon milestones, and real GitHub commits.' },
  ];

  return (
    <section className="craft-principles-section" ref={containerRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="craft-header-reveal">
          <span className="craft-section-badge">CODE OF CRAFT</span>
          <h2 className="craft-section-title">Things I Refuse To Ship.</h2>
          <p className="craft-section-quote">
            “Standards aren’t decorative guidelines. They are non-negotiable engineering boundaries.”
          </p>
        </div>

        {/* Two-Column Artifact Comparison Grid */}
        <div className="craft-comparison-grid">
          
          {/* Card 1: REFUSE TO SHIP (Blocked) */}
          <div className="craft-artifact-card craft-card-blocked">
            <div className="craft-card-topbar">
              <div className="craft-topbar-title">
                <span className="status-dot status-dot-blocked" />
                <span>REFUSE TO SHIP</span>
              </div>
              <span className="craft-status-pill pill-blocked">BLOCKED</span>
            </div>

            <ul className="craft-card-list">
              {refuseList.map((item, idx) => (
                <li key={idx} className="craft-list-item">
                  <div className="craft-icon-wrap wrap-blocked" aria-hidden="true">
                    <X size={15} strokeWidth={2.8} />
                  </div>
                  <div>
                    <h3 className="craft-item-name">{item.title}</h3>
                    <p className="craft-item-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: GUARANTEED SHIPPED (Verified) */}
          <div className="craft-artifact-card craft-card-verified">
            <div className="craft-card-topbar">
              <div className="craft-topbar-title">
                <span className="status-dot status-dot-verified" />
                <span>GUARANTEED SHIPPED</span>
              </div>
              <span className="craft-status-pill pill-verified">VERIFIED</span>
            </div>

            <ul className="craft-card-list">
              {guaranteedList.map((item, idx) => (
                <li key={idx} className="craft-list-item">
                  <div className="craft-icon-wrap wrap-verified" aria-hidden="true">
                    <Check size={15} strokeWidth={2.8} />
                  </div>
                  <div>
                    <h3 className="craft-item-name">{item.title}</h3>
                    <p className="craft-item-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
