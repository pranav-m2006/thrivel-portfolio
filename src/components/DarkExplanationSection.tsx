import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ExplanationItem {
  title: string;
  desc: string;
  icon?: ReactNode;
}

export interface ExplanationColumn {
  title: string;
  pillText: string;
  variant?: 'pillar' | 'standard' | 'verified' | 'blocked' | 'neutral' | 'accent';
  items: ExplanationItem[];
}

export interface DarkExplanationSectionProps {
  badge: string;
  title: string;
  quote: string;
  leftColumn: ExplanationColumn;
  rightColumn: ExplanationColumn;
  id?: string;
}

export default function DarkExplanationSection({
  badge,
  title,
  quote,
  leftColumn,
  rightColumn,
  id,
}: DarkExplanationSectionProps) {
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
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.18,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getCardClass = (variant?: string) => {
    if (variant === 'pillar') return 'craft-card-pillar';
    if (variant === 'standard') return 'craft-card-standard';
    if (variant === 'blocked') return 'craft-card-blocked';
    return 'craft-card-verified';
  };

  const getStatusDotClass = (variant?: string) => {
    if (variant === 'pillar') return 'status-dot-pillar';
    if (variant === 'standard') return 'status-dot-standard';
    if (variant === 'blocked') return 'status-dot-blocked';
    return 'status-dot-verified';
  };

  const getPillClass = (variant?: string) => {
    if (variant === 'pillar') return 'pill-pillar';
    if (variant === 'standard') return 'pill-standard';
    if (variant === 'blocked') return 'pill-blocked';
    return 'pill-verified';
  };

  const getWrapClass = (variant?: string) => {
    if (variant === 'pillar') return 'wrap-pillar';
    if (variant === 'standard') return 'wrap-standard';
    if (variant === 'blocked') return 'wrap-blocked';
    return 'wrap-verified';
  };

  return (
    <section className="craft-principles-section" ref={containerRef} id={id}>
      <div className="container">
        {/* Section Header */}
        <div className="craft-header-reveal">
          <span className="craft-section-badge">{badge}</span>
          <h2 className="craft-section-title">{title}</h2>
          <p className="craft-section-quote">{quote}</p>
        </div>

        {/* Two-Column Artifact Comparison Grid */}
        <div className="craft-comparison-grid">
          {/* Left Column Card */}
          <div className={`craft-artifact-card ${getCardClass(leftColumn.variant)}`}>
            <div className="craft-card-topbar">
              <div className="craft-topbar-title">
                <span className={`status-dot ${getStatusDotClass(leftColumn.variant)}`} />
                <span>{leftColumn.title}</span>
              </div>
              <span className={`craft-status-pill ${getPillClass(leftColumn.variant)}`}>
                {leftColumn.pillText}
              </span>
            </div>

            <ul className="craft-card-list">
              {leftColumn.items.map((item, idx) => (
                <li key={idx} className="craft-list-item">
                  <div className={`craft-icon-wrap ${getWrapClass(leftColumn.variant)}`} aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="craft-item-name">{item.title}</h3>
                    <p className="craft-item-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column Card */}
          <div className={`craft-artifact-card ${getCardClass(rightColumn.variant)}`}>
            <div className="craft-card-topbar">
              <div className="craft-topbar-title">
                <span className={`status-dot ${getStatusDotClass(rightColumn.variant)}`} />
                <span>{rightColumn.title}</span>
              </div>
              <span className={`craft-status-pill ${getPillClass(rightColumn.variant)}`}>
                {rightColumn.pillText}
              </span>
            </div>

            <ul className="craft-card-list">
              {rightColumn.items.map((item, idx) => (
                <li key={idx} className="craft-list-item">
                  <div className={`craft-icon-wrap ${getWrapClass(rightColumn.variant)}`} aria-hidden="true">
                    {item.icon}
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
