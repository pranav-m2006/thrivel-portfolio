import React from 'react';

interface LuxuryMarqueeProps {
  items?: string[];
  theme?: 'dark' | 'light' | 'crimson';
}

export default function LuxuryMarquee({
  items = [
    'FRONTEND ENGINEERING',
    'APPLIED MACHINE LEARNING',
    'REACT.JS ARCHITECTURE',
    'ALGORITHMIC RIGOR',
    'GSAP MOTION SYSTEMS',
    'PATENTED INNOVATIONS',
    'SMART INDIA HACKATHON FINALIST',
    'CALM INTERFACES',
  ],
  theme = 'dark',
}: LuxuryMarqueeProps) {
  return (
    <div className={`luxury-marquee-container marquee-theme-${theme}`} aria-hidden="true">
      <div className="luxury-marquee-track">
        <div className="luxury-marquee-content">
          {items.map((item, idx) => (
            <span key={`a-${idx}`} className="luxury-marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
        <div className="luxury-marquee-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`b-${idx}`} className="luxury-marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
