import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
  stagger?: number;
  duration?: number;
}

export default function SplitReveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  triggerOnScroll = false,
  stagger = 0.08,
  duration = 0.85
}: SplitRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Reduced motion check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      gsap.set(el.querySelectorAll('.split-line-inner'), { y: '0%', opacity: 1 });
      return;
    }

    const targets = el.querySelectorAll('.split-line-inner');
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      if (triggerOnScroll) {
        gsap.fromTo(
          targets,
          { y: '115%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration,
            stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay,
          }
        );
      } else {
        gsap.fromTo(
          targets,
          { y: '115%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration,
            stagger,
            ease: 'power3.out',
            delay,
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [delay, triggerOnScroll, stagger, duration]);

  // If children is a string with newlines or sentences, wrap each in masked line divs
  const renderContent = () => {
    if (typeof children === 'string') {
      const lines = children.split('\n').filter(Boolean);
      return lines.map((line, idx) => (
        <span key={idx} className="split-line-mask" style={{ display: 'block', overflow: 'hidden' }}>
          <span className="split-line-inner" style={{ display: 'block', transform: 'translateY(115%)' }}>
            {line}
          </span>
        </span>
      ));
    }
    return (
      <span className="split-line-mask" style={{ display: 'block', overflow: 'hidden' }}>
        <span className="split-line-inner" style={{ display: 'block', transform: 'translateY(115%)' }}>
          {children}
        </span>
      </span>
    );
  };

  return (
    <Component ref={containerRef as any} className={`split-reveal-container ${className}`}>
      {renderContent()}
    </Component>
  );
}
