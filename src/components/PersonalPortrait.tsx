import { useState } from 'react';

interface PersonalPortraitProps {
  caption?: string;
  size?: 'normal' | 'large';
}

export default function PersonalPortrait({ caption = 'Pranav M — Frontend Developer & AI/ML Practitioner', size = 'normal' }: PersonalPortraitProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="portrait-editorial-frame" style={{ maxWidth: size === 'large' ? '480px' : '380px' }}>
      <div className="portrait-inner-visual">
        {!imgError ? (
          <img
            src="/assets/portrait.jpg"
            alt="Pranav M — Professional Portrait"
            className="portrait-img"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Architectural Editorial Studio Silhouette / Monogram Frame */
          <div className="portrait-placeholder-box">
            <div className="portrait-monogram">PM</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-espresso)', marginBottom: '4px' }}>
              Pranav M
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-warm-grey)', fontFamily: 'var(--font-mono)' }}>
              Coimbatore, Tamil Nadu
            </p>
            <div style={{ marginTop: '14px', padding: '6px 12px', background: 'rgba(251, 247, 240, 0.7)', borderRadius: '4px', border: '1px solid var(--color-sand-border)', fontSize: '0.72rem', color: 'var(--color-terracotta)' }}>
              Upload portrait to public/assets/portrait.jpg
            </div>
          </div>
        )}
      </div>

      {caption && (
        <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid var(--color-sand-border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-espresso)', fontWeight: 600 }}>{caption}</span>
          <span className="meta-tag" style={{ fontSize: '0.675rem' }}>Verified Profile</span>
        </div>
      )}
    </div>
  );
}
