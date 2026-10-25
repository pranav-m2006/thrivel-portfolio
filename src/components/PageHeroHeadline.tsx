import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export interface PageHeroHeadlineProps {
  eyebrow: string;
  blackText: string;
  accentText?: string;
  arrowHref?: string;
  leadParagraph: React.ReactNode;
  tags?: string[];
  id?: string;
}

export default function PageHeroHeadline({
  eyebrow,
  blackText,
  accentText,
  arrowHref = '#content',
  leadParagraph,
  tags = [],
  id = 'hero-headline',
}: PageHeroHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.page-hero-eyebrow-stamp', {
        opacity: 0,
        y: 12,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from('.page-hero-interactive-heading', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.page-hero-lead-text', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.25,
        ease: 'power2.out',
      });

      if (tags.length > 0) {
        gsap.from('.page-hero-tag-item', {
          opacity: 0,
          y: 14,
          stagger: 0.05,
          duration: 0.5,
          delay: 0.4,
          ease: 'power2.out',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [tags.length]);

  return (
    <section className="page-hero bg-ivory" ref={containerRef} id={id}>
      <div className="container">
        
        {/* Editorial Eyebrow Stamp */}
        <div className="page-hero-eyebrow-stamp">
          <span className="editorial-stamp">{eyebrow}</span>
        </div>

        {/* Big Bold Black-to-Red Interactive Heading */}
        <div className="page-hero-heading-track">
          <a
            href={arrowHref}
            className="page-hero-interactive-heading"
            title={`Scroll to explore: ${blackText} ${accentText || ''}`}
          >
            <span className="page-hero-word-black">{blackText}</span>
            {accentText && (
              <>
                {' '}
                <span className="page-hero-word-accent">{accentText}</span>
              </>
            )}
            <span className="page-hero-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Editorial Lead Paragraph */}
        <div className="page-hero-lead-box">
          <div className="page-hero-lead-text editorial-lead">
            {leadParagraph}
          </div>
        </div>

        {/* Supporting Meta Tags / Badges */}
        {tags.length > 0 && (
          <div className="page-hero-tags-row">
            {tags.map((tag, idx) => (
              <span key={idx} className="meta-tag page-hero-tag-item">
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
