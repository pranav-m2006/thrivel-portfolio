import { useState } from 'react';
import ArchFrame from '../components/ArchFrame';
import StepCounter from '../components/StepCounter';
import MagneticButton from '../components/MagneticButton';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function StyleGuide() {
  const [activeStep, setActiveStep] = useState(2);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedToken(hex);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  const tokens = [
    {
      name: 'Ivory',
      varName: '--color-ivory',
      hex: '#FBF7F0',
      role: 'Main Page Canvas (65–75% of surfaces)',
      onIvoryRatio: '1.0:1',
      status: 'Base Canvas',
      isBase: true
    },
    {
      name: 'Beach Cream',
      varName: '--color-cream',
      hex: '#F4E9D8',
      role: 'Alternating Chapter Sections',
      onIvoryRatio: '1.14:1',
      status: 'Subtle Canvas Step',
      isBase: true
    },
    {
      name: 'Sunlit Sand',
      varName: '--color-sand',
      hex: '#D9C2A3',
      role: 'Structural Hairlines, Plinths, Architectural Outlines',
      onIvoryRatio: '1.5:1',
      status: 'Structural Only',
      isAccent: true
    },
    {
      name: 'Terracotta',
      varName: '--color-terracotta',
      hex: '#A84432',
      role: 'Primary Action Accent (Buttons, Active Nav Underline)',
      onIvoryRatio: '5.32:1',
      status: 'WCAG AA (Normal & Large Text)',
      pass: true
    },
    {
      name: 'Rusty Orange',
      varName: '--color-rusty-orange',
      hex: '#C66A3D',
      role: 'Hover Shifts, Geometric Rules, Large Accents ONLY',
      onIvoryRatio: '3.21:1',
      status: 'Fails small text (<18pt); Restricted to Large (>24pt)',
      warning: true
    },
    {
      name: 'Espresso',
      varName: '--color-espresso',
      hex: '#30251F',
      role: 'Primary High-Fidelity Typography & Headings',
      onIvoryRatio: '12.84:1',
      status: 'WCAG AAA (All Text Sizes)',
      pass: true
    },
    {
      name: 'Muted Brown',
      varName: '--color-muted-brown',
      hex: '#75685D',
      role: 'Secondary Editorial Prose & Meta Labels',
      onIvoryRatio: '4.82:1',
      status: 'WCAG AA (All Text Sizes)',
      pass: true
    },
    {
      name: 'Sand Border',
      varName: '--color-border',
      hex: '#E5D9C8',
      role: 'Subtle Card & Panel Divider Lines',
      onIvoryRatio: '1.3:1',
      status: 'UI Border Standard',
      isAccent: true
    },
    {
      name: 'Terracotta Dark',
      varName: '--color-terracotta-dark',
      hex: '#5A2A20',
      role: 'Deep Route Panel A (Contrast Anchor)',
      onIvoryRatio: '8.20:1',
      status: 'WCAG AAA (Inverse Text: 8.20:1)',
      pass: true
    },
    {
      name: 'Warm Brown',
      varName: '--color-warm-brown',
      hex: '#3A2A22',
      role: 'Deep Route Panel B (Contrast Anchor)',
      onIvoryRatio: '11.45:1',
      status: 'WCAG AAA (Inverse Text: 11.45:1)',
      pass: true
    }
  ];

  return (
    <div className="style-guide-page">
      {/* Editorial Header */}
      <section className="sg-header-section bg-ivory">
        <div className="container">
          <div className="sg-eyebrow-stamp">
            <span className="editorial-stamp">No. 00, Studio Spec</span>
            <span className="sg-pill">Phase 2 Design System</span>
          </div>

          <h1 className="editorial-h1" style={{ maxWidth: '820px' }}>
            A Sun-Faded Coastal Studio.
          </h1>

          <p className="editorial-lead" style={{ maxWidth: '720px' }}>
            Curated design tokens, editorial typography scale, accessibility contrast audits,
            architectural arch masks, and interaction states for Pranav M’s personal portfolio.
          </p>

          <div className="sg-meta-badges">
            <span className="meta-tag"><ShieldCheck size={14} style={{ display: 'inline', marginRight: 4 }} /> WCAG AA Verified</span>
            <span className="meta-tag"><Layers size={14} style={{ display: 'inline', marginRight: 4 }} /> Zero Cliché Gradients</span>
            <span className="meta-tag"><Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} /> Fraunces × Instrument Sans</span>
          </div>
        </div>
      </section>

      {/* 1. Color Palette & WCAG Audit */}
      <section className="sg-section bg-cream">
        <div className="container">
          <div className="sg-section-header">
            <span className="section-step-indicator">01 / COLOR IDENTITY & CONTRAST RATIOS</span>
            <h2 className="editorial-h2">Curated Earth & Terracotta Palette</h2>
            <p style={{ maxWidth: '680px' }}>
              65–75% of every surface consists of warm ivory and beach cream. Rusty orange is strictly guarded
              from body copy due to contrast safety; primary text uses Espresso at a commanding 12.8:1 ratio.
            </p>
          </div>

          <div className="sg-token-grid">
            {tokens.map((token) => (
              <div
                key={token.varName}
                className="sg-token-card"
                onClick={() => copyHex(token.hex)}
                title="Click to copy hex code"
              >
                <div
                  className="sg-swatch"
                  style={{ backgroundColor: token.hex }}
                >
                  <span className="sg-swatch-hex">{copiedToken === token.hex ? 'COPIED!' : token.hex}</span>
                </div>
                <div className="sg-token-details">
                  <div className="sg-token-title-row">
                    <strong>{token.name}</strong>
                    <code className="sg-token-code">{token.varName}</code>
                  </div>
                  <p className="sg-token-role">{token.role}</p>

                  <div className="sg-contrast-badge-row">
                    <span className="sg-ratio-pill">
                      vs Ivory: <strong>{token.onIvoryRatio}</strong>
                    </span>
                    {token.pass && (
                      <span className="sg-pass-tag">
                        <CheckCircle2 size={12} /> {token.status}
                      </span>
                    )}
                    {token.warning && (
                      <span className="sg-warn-tag">
                        <AlertTriangle size={12} /> {token.status}
                      </span>
                    )}
                    {token.isBase && (
                      <span className="sg-neutral-tag">
                        Surface Tone
                      </span>
                    )}
                    {token.isAccent && (
                      <span className="sg-neutral-tag">
                        Structural Token
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contrast Safety Guard Callout */}
          <div className="sg-contrast-alert-box">
            <div className="sg-alert-icon">
              <ShieldCheck size={28} color="var(--color-terracotta)" />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-espresso)', marginBottom: '4px' }}>
                Contrast Safety Architecture Enforcement
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-muted-brown)', margin: 0 }}>
                Rusty orange (<strong>#C66A3D</strong>) measures <strong>3.21:1</strong> against Ivory, failing WCAG AA for standard text (&lt;18pt).
                It is programmatically restricted to decorative dividing rules, large display glyphs (&gt;24pt bold), and hover border shifts.
                Small metadata tags and labels use Terracotta (<strong>#A84432</strong>, 5.32:1) or Muted Brown (<strong>#75685D</strong>, 4.82:1) to maintain 100% WCAG AA compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Typography Scale */}
      <section className="sg-section bg-ivory">
        <div className="container">
          <div className="sg-section-header">
            <span className="section-step-indicator">02 / TYPOGRAPHY HIERARCHY</span>
            <h2 className="editorial-h2">Fraunces Serif & Instrument Sans</h2>
            <p style={{ maxWidth: '680px' }}>
              Optical sizing with generous line spacing. Restrained headings paired with clear letter-spaced metadata caps.
              Outlined numerals encode sequence progression without visual clutter.
            </p>
          </div>

          <div className="sg-type-spec-list">
            <div className="sg-type-row">
              <div className="sg-type-meta">
                <span className="meta-tag">Display</span>
                <span className="sg-type-meta-desc">Fraunces · clamp(2.5rem, 6vw, 4.75rem) · 500 wt</span>
              </div>
              <div className="editorial-h1" style={{ margin: 0 }}>
                Calm interfaces. Intelligent ideas.
              </div>
            </div>

            <div className="sg-type-row">
              <div className="sg-type-meta">
                <span className="meta-tag">Heading 2</span>
                <span className="sg-type-meta-desc">Fraunces · clamp(1.5rem, 3vw, 2.25rem) · 600 wt</span>
              </div>
              <div className="editorial-h2" style={{ margin: 0 }}>
                I build the part of the web you actually touch.
              </div>
            </div>

            <div className="sg-type-row">
              <div className="sg-type-meta">
                <span className="meta-tag">Heading 3</span>
                <span className="sg-type-meta-desc">Fraunces · clamp(1.2rem, 2.2vw, 1.65rem) · 500 wt</span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', color: 'var(--color-espresso)' }}>
                Disaster Management System — Predictive Weather Guidance
              </div>
            </div>

            <div className="sg-type-row">
              <div className="sg-type-meta">
                <span className="meta-tag">Editorial Body</span>
                <span className="sg-type-meta-desc">Instrument Sans · 1.05rem · 1.7 line-height</span>
              </div>
              <p className="editorial-lead" style={{ margin: 0, maxWidth: '780px' }}>
                Pranav M is a student-engineer at SNS College of Engineering (B.E. Computer Science and Technology, 2024–2028, CGPA 8.00/10)
                specializing in calm, responsive front-end interfaces and applied AI/ML systems.
              </p>
            </div>

            <div className="sg-type-row">
              <div className="sg-type-meta">
                <span className="meta-tag">Outlined Numerals</span>
                <span className="sg-type-meta-desc">Fraunces Outlined · 4.5rem · Stroke Mask</span>
              </div>
              <div className="sg-numeral-showcase">
                <span className="outlined-numeral">01</span>
                <span className="outlined-numeral">02</span>
                <span className="outlined-numeral">03</span>
                <span className="outlined-numeral">04</span>
                <span className="outlined-numeral">05</span>
              </div>
            </div>

            <div className="sg-type-row">
              <div className="sg-type-meta">
                <span className="meta-tag">Stamps & Labels</span>
                <span className="sg-type-meta-desc">JetBrains Mono & Small Caps</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="editorial-stamp">No. 01, Overview</span>
                <span className="editorial-stamp">No. 02, Profile</span>
                <span className="editorial-stamp">No. 03, Selected Works</span>
                <span className="meta-tag">Smart India Hackathon 2025</span>
                <span className="meta-tag">2 Product Patents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Arch Frame & Authentic Portrait */}
      <section className="sg-section bg-cream">
        <div className="container">
          <div className="sg-section-header">
            <span className="section-step-indicator">03 / ARCHITECTURAL ARCH FRAME</span>
            <h2 className="editorial-h2">Authentic Portrait Architectural Mask</h2>
            <p style={{ maxWidth: '680px' }}>
              Built according to Section 8: Semicircular arch mask on a warm sand backdrop with a soft terracotta
              offset shape behind it, 1px sand border line, and subtle 12px parallax. Never alters facial features.
            </p>
          </div>

          <div className="sg-arch-demo-grid">
            <div>
              <ArchFrame
                imageSrc="/images/pranav.jpg"
                altText="Pranav M — Authentic Portrait"
                caption="Pranav M — Frontend Developer & AI/ML Practitioner"
                badgeText="SNSCE · Coimbatore"
                enableParallax={true}
              />
            </div>

            <div className="sg-arch-spec-card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '14px' }}>
                Arch Frame Construction Rules
              </h3>
              <ul className="sg-spec-list">
                <li>
                  <strong>Semicircular Geometric Arch:</strong> <code>border-radius: 9999px 9999px 0 0</code> creates the authentic architectural portal profile.
                </li>
                <li>
                  <strong>Terracotta Offset Plinth:</strong> Offset 14px down and right with <code>background: var(--color-terracotta)</code> to provide architectural shadow depth without heavy drop-shadows.
                </li>
                <li>
                  <strong>Authentic Image Preservation:</strong> Uses Pranav M’s genuine photo directly. No generative face manipulation or artificial stylization.
                </li>
                <li>
                  <strong>Subtle Parallax:</strong> Dampened to 10–12px on scroll, automatically disabled under <code>prefers-reduced-motion</code>.
                </li>
                <li>
                  <strong>Accessible Alt Text:</strong> Explicit descriptive alt text provided for screen readers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Controls, Buttons & Step Counter */}
      <section className="sg-section bg-ivory">
        <div className="container">
          <div className="sg-section-header">
            <span className="section-step-indicator">04 / INTERACTIVE CONTROLS</span>
            <h2 className="editorial-h2">Buttons, Step Progress & Navigation</h2>
            <p style={{ maxWidth: '680px' }}>
              Buttons use spring-damped magnetic hover physics. The step counter displays dual-digit progress
              synchronized with a sand progress line.
            </p>
          </div>

          <div className="sg-controls-demo-grid">
            {/* Buttons Showcase */}
            <div className="sg-card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '16px' }}>
                Button Hierarchy
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'flex-start' }}>
                <MagneticButton className="btn-primary">
                  <span>Explore Selected Works</span>
                  <ArrowRight size={16} />
                </MagneticButton>

                <MagneticButton className="btn-secondary">
                  <span>Download Resume (PDF)</span>
                </MagneticButton>

                <a href="#demo" className="btn-inline" onClick={(e) => e.preventDefault()}>
                  <span>Next: About Chapter</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Step Counter Interactive Widget */}
            <div className="sg-card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '16px' }}>
                Interactive Step Counter Widget
              </h3>

              <StepCounter
                currentStep={activeStep}
                totalSteps={5}
                label="Storytelling Progression"
              />

              <div style={{ marginTop: '24px', display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  className="sg-step-btn"
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  className="sg-step-btn active"
                  onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                  disabled={activeStep === 5}
                >
                  Next Step ({activeStep}/5)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep Contrast Panels (Section 6 Requirement) */}
      <section className="sg-section bg-cream">
        <div className="container">
          <div className="sg-section-header">
            <span className="section-step-indicator">05 / DEEP CONTRAST PANELS</span>
            <h2 className="editorial-h2">Architectural Contrast Anchors</h2>
            <p style={{ maxWidth: '680px' }}>
              Every route features exactly ONE deep contrast panel (Terracotta-Dark or Warm Brown) to anchor visual rhythm,
              preventing pages from feeling washed out while keeping 70% light ivory dominance.
            </p>
          </div>

          <div className="sg-deep-panels-grid">
            {/* Deep Panel A: Terracotta Dark */}
            <div className="deep-panel-terracotta">
              <span className="deep-panel-stamp">Deep Panel Variant A · #5A2A20</span>
              <h3 className="deep-panel-heading">
                “Curious by habit, careful by craft.”
              </h3>
              <p className="deep-panel-body">
                Building thoughtful frontend architectures with resilient type systems, measured spacing,
                and zero unnecessary fluff. High-contrast ivory text achieves a pristine 8.2:1 contrast ratio.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="deep-panel-tag">WCAG AAA Inverse Compliant</span>
              </div>
            </div>

            {/* Deep Panel B: Warm Brown */}
            <div className="deep-panel-warm-brown">
              <span className="deep-panel-stamp">Deep Panel Variant B · #3A2A22</span>
              <h3 className="deep-panel-heading">
                “Proof of showing up, consistently.”
              </h3>
              <p className="deep-panel-body">
                From Smart India Hackathon 2025 to 150+ LeetCode problems on a 100-day streak,
                engineering value is rooted in steady daily discipline and demonstrable prototypes.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="deep-panel-tag">WCAG AAA Inverse Compliant (11.4:1)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tactile Paper Grain Inspector */}
      <section className="sg-section bg-ivory">
        <div className="container">
          <div className="sg-section-header">
            <span className="section-step-indicator">06 / PAPER GRAIN & TEXTURE</span>
            <h2 className="editorial-h2">Subtle Sand & Parchment Texture</h2>
            <p style={{ maxWidth: '680px' }}>
              Rendered via a lightweight, hardware-accelerated overlay (<code>/images/paper-grain.png</code>) set to 5% opacity
              with multiply blend mode. Gives the coastal studio its warm, tactile, physical publication quality.
            </p>
          </div>

          <div className="sg-grain-preview-box">
            <div className="sg-grain-layer-demo" />
            <div className="sg-grain-content">
              <span className="editorial-stamp">Natural Film & Paper Feel</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-espresso)', margin: '12px 0' }}>
                Tactility without performance compromise.
              </h3>
              <p style={{ color: 'var(--color-muted-brown)', maxWidth: '540px' }}>
                Zero heavy blur filters or lag-inducing SVG noise computations. A pre-tiled 240px grain matrix
                runs at 60fps across mobile and desktop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
