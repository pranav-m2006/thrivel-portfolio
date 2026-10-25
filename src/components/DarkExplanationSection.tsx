import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ExplanationItem {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

export interface ExplanationColumn {
  title: string;
  pillText: string;
  variant?: 'blocked' | 'verified' | 'neutral' | 'accent';
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
          <div
            className={`craft-artifact-card ${
              leftColumn.variant === 'blocked' ? 'craft-card-blocked' : 'craft-card-verified'
            }`}
          >
            <div className="craft-card-topbar">
              <div className="craft-topbar-title">
                <span
                  className={`status-dot ${
                    leftColumn.variant === 'blocked' ? 'status-dot-blocked' : 'status-dot-verified'
                  }`}
                />
                <span>{leftColumn.title}</span>
              </div>
              <span
                className={`craft-status-pill ${
                  leftColumn.variant === 'blocked' ? 'pill-blocked' : 'pill-verified'
                }`}
              >
                {leftColumn.pillText}
              </span>
            </div>

            <ul className="craft-card-list">
              {leftColumn.items.map((item, idx) => (
                <li key={idx} className="craft-list-item">
                  <div
                    className={`craft-icon-wrap ${
                      leftColumn.variant === 'blocked' ? 'wrap-blocked' : 'wrap-verified'
                    }`}
                    aria-hidden="true"
                  >
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
          <div
            className={`craft-artifact-card ${
              rightColumn.variant === 'blocked' ? 'craft-card-blocked' : 'craft-card-verified'
            }`}
          >
            <div className="craft-card-topbar">
              <div className="craft-topbar-title">
                <span
                  className={`status-dot ${
                    rightColumn.variant === 'blocked' ? 'status-dot-blocked' : 'status-dot-verified'
                  }`}
                />
                <span>{rightColumn.title}</span>
              </div>
              <span
                className={`craft-status-pill ${
                  rightColumn.variant === 'blocked' ? 'pill-blocked' : 'pill-verified'
                }`}
              >
                {rightColumn.pillText}
              </span>
            </div>

            <ul className="craft-card-list">
              {rightColumn.items.map((item, idx) => (
                <li key={idx} className="craft-list-item">
                  <div
                    className={`craft-icon-wrap ${
                      rightColumn.variant === 'blocked' ? 'wrap-blocked' : 'wrap-verified'
                    }`}
                    aria-hidden="true"
                  >
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
