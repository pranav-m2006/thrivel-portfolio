import React from 'react';

export default function PaperGrain() {
  return (
    <div 
      className="paper-grain-overlay" 
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 999,
        opacity: 0.05,
        backgroundImage: 'url(/images/paper-grain.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '240px 240px',
        mixBlendMode: 'multiply'
      }}
    />
  );
}
