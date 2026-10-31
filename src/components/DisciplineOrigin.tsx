import { useLayoutEffect, useRef, Fragment } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface OriginLine {
  text: string;
  pop: string;
  popBg?: 'crimson' | 'black';
  isMiddle?: boolean;
}

export interface DisciplineOriginProps {
  theme?: 'light' | 'dark';
  badge?: string;
  lines?: OriginLine[];
  flow?: string[];
  headline?: string;
  subtext?: string;
}

const DEFAULT_LINES: OriginLine[] = [
  { text: 'ATHLETICS TAUGHT', pop: 'DISCIPLINE.', popBg: 'crimson' },
  { text: 'SOFTWARE TAUGHT', pop: 'CURIOSITY.', popBg: 'black', isMiddle: true },
  { text: 'PROBLEM-SOLVING TAUGHT', pop: 'RESPONSIBILITY.', popBg: 'crimson' },
];

const DEFAULT_FLOW = ['Discipline', 'Curiosity', 'Responsibility'];

export default function DisciplineOrigin({
  theme = 'light',
  badge = 'ORIGIN & RIGOR',
  lines = DEFAULT_LINES,
  flow = DEFAULT_FLOW,
  headline = 'EVERYTHING I BUILD.',
  subtext = 'Whether preparing for competitive programming contests or architecting full-stack React systems, the same standard applies: show up consistently, reject complacency, and build with human respect.',
}: DisciplineOriginProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

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
    <section 
      className={`discipline-origin-section ${isDark ? 'theme-dark' : ''}`} 
      ref={containerRef}
    >
      <div className="container">
        
        <div className="disc-origin-badge-wrap">
          <span className="craft-section-badge">{badge}</span>
        </div>

        <div className="disc-origin-lines-stack">
          {lines.map((line, idx) => {
            const lineClass = line.isMiddle
              ? 'line-crimson'
              : (isDark ? 'line-ivory' : 'line-black');
            const popClass = line.popBg === 'black' ? 'bg-black' : 'bg-crimson';
            return (
              <p key={idx} className={`disc-origin-line ${lineClass}`}>
                {line.text} <span className={`disc-badge-pop ${popClass}`}>{line.pop}</span>
              </p>
            );
          })}
        </div>

        <div className="disc-origin-payoff">
          <div className="disc-flow-indicator">
            {flow.map((step, idx) => (
              <Fragment key={idx}>
                <span>{step}</span>
                {idx < flow.length - 1 && <span className="disc-arrow">→</span>}
              </Fragment>
            ))}
          </div>
          <h2 className="disc-payoff-headline">{headline}</h2>
          <p className="disc-payoff-sub">{subtext}</p>
        </div>

      </div>
    </section>
  );
}
