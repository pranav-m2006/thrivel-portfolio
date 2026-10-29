import { useState, useEffect, useRef } from 'react';

interface ArchFrameProps {
  imageSrc?: string;
  altText?: string;
  caption?: string;
  badgeText?: string;
  maxHeight?: string;
  enableParallax?: boolean;
}

export default function ArchFrame({
  imageSrc = '/images/pranav.jpg',
  altText = 'Pranav M — Frontend Developer and AI/ML Practitioner',
  caption = 'Pranav M — Student & Developer',
  badgeText = 'SNS College of Engineering',
  maxHeight = '480px',
  enableParallax = true
}: ArchFrameProps) {
  const [imgError, setImgError] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableParallax) return;

    // Gentle parallax of 10-15px max, compliant with prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      if (!frameRef.current) return;
      const rect = frameRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Normalize between -10px and +12px
        const progress = (rect.top - viewportHeight / 2) / (viewportHeight / 2);
        setOffsetY(Math.max(-12, Math.min(12, progress * -10)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax]);

  return (
    <div className="arch-composite-wrapper" ref={frameRef}>
      {/* Terracotta Architectural Offset Plinth */}
      <div className="arch-terracotta-backdrop" aria-hidden="true" />

      {/* Main Arch Frame */}
      <div 
        className="arch-frame-container"
        style={{ 
          maxHeight,
          transform: `translateY(${offsetY}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <div className="arch-inner-portal">
          {!imgError ? (
            <img
              src={imageSrc}
              alt={altText}
              className="arch-portrait-image"
              onError={() => {
                // Try fallback to /assets/portrait.jpg before erroring
                if (imageSrc !== '/assets/portrait.jpg') {
                  const fallback = new Image();
                  fallback.src = '/assets/portrait.jpg';
                  fallback.onload = () => {
                    const el = document.querySelector('.arch-portrait-image') as HTMLImageElement;
                    if (el) el.src = '/assets/portrait.jpg';
                  };
                  fallback.onerror = () => setImgError(true);
                } else {
                  setImgError(true);
                }
              }}
            />
          ) : (
            <div className="arch-fallback-silhouette">
              <div className="arch-monogram">PM</div>
              <p className="arch-fallback-name">Pranav M</p>
              <span className="arch-fallback-sub">Frontend Developer &amp; AI/ML</span>
            </div>
          )}
        </div>

        {caption && (
          <div className="arch-caption-bar">
            <span className="arch-caption-title">{caption}</span>
            {badgeText && <span className="arch-caption-badge">{badgeText}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
