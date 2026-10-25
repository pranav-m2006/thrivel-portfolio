import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github, ShieldCheck, Compass, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScroll } from '../hooks/useLenisScroll';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useLenisScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Staggered chapter entrances
      gsap.utils.toArray<HTMLElement>('.project-chapter-card').forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="page-wrapper projects-page-container">
      
      {/* =====================================================================
          1. PROJECTS HERO: Big Bold Black-to-Red Interactive Transition Heading
          ===================================================================== */}
      <PageHeroHeadline
        eyebrow="03 / SELECTED WORKS & PRODUCTION SYSTEMS"
        blackText="Ideas that earned"
        accentText="a real screen."
        arrowHref="#chapter-01"
        leadParagraph={
          <>
            A curated record of three production software systems built to solve concrete challenges.
            Structured with four clear milestones: <strong style={{ color: '#1A1310' }}>Problem</strong>,{' '}
            <strong style={{ color: '#C63D2F' }}>Approach</strong>,{' '}
            <strong style={{ color: '#1A1310' }}>What I Built</strong>, and{' '}
            <strong style={{ color: '#C63D2F' }}>What I Learned</strong>.
            Zero invented metrics.
          </>
        }
        tags={[
          '3 Deployed Systems',
          'Meteorological AI Models',
          'Component Architecture',
          'Interactive Dashboards',
          'Verified GitHub Repositories',
        ]}
      />

      {/* =====================================================================
          2. CHAPTER 01 — DISASTER MANAGEMENT SYSTEM
          ===================================================================== */}
      <section id="chapter-01" className="project-chapter-section bg-cream">
        <div className="container">
          <div className="project-chapter-card relative">
            
            {/* Watermark Numeral */}
            <div className="watermark-numeral" aria-hidden="true">01</div>

            {/* Chapter Header */}
            <div className="chapter-header-row" style={{ position: 'relative', zIndex: 1 }}>
              <div className="chapter-stamp-block">
                <span className="outlined-numeral">01</span>
                <div>
                  <span className="editorial-stamp">AI / ML System</span>
                  <h2 className="chapter-main-title">Disaster Management System</h2>
                  <p className="chapter-tagline">Technology with a real-world purpose.</p>
                </div>
              </div>

              <div className="chapter-actions">
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="View Disaster Management System on GitHub (opens in new tab)"
                >
                  <Github size={16} />
                  <span>Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Visual & Core Narrative Grid */}
            <div className="chapter-grid" style={{ position: 'relative', zIndex: 1 }}>
              
              {/* Visual Side: AI Weather Dashboard Screen */}
              <div className="chapter-visual-wrapper">
                <div className="chapter-image-box">
                  <img
                    src="/images/disaster-screen.jpg"
                    alt="Disaster Management System — Live Disaster Risk Map & Automated Precautionary Bulletin Dashboard"
                    className="chapter-editorial-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/disaster.jpg';
                    }}
                  />
                  <div className="chapter-image-caption">
                    <span>Fig. 1.0 — Real-time Storm Probability & Automated Precautionary Advisory UI</span>
                    <span className="chapter-image-badge">Sentinel AI UI</span>
                  </div>
                </div>

                <div className="chapter-tech-pills">
                  {['Python', 'Applied Machine Learning', 'Predictive Analysis', 'Meteorological Signals', 'React.js', 'Git'].map((t) => (
                    <span key={t} className="meta-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* 4-Step Narrative Steps */}
              <div className="chapter-narrative-steps">
                
                {/* Step 1: Problem */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>01 / The Problem</strong>
                  </div>
                  <p className="step-narrative-body">
                    Severe weather disruptions and flash anomalies frequently strike without localized,
                    actionable guidance. General forecasts provide broad statistics, but vulnerable communities
                    lack timely, understandable precautionary protocols to mitigate physical impact.
                  </p>
                </div>

                {/* Step 2: Approach */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>02 / The Approach</strong>
                  </div>
                  <p className="step-narrative-body">
                    Developed a supervised machine learning prediction model trained on meteorological sensor parameters,
                    paired with an automated advisory generation system to deliver clear warnings.
                  </p>
                </div>

                {/* Step 3: What I Built */}
                <div className="step-narrative-card highlight-step">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>03 / What I Built</strong>
                  </div>
                  <p className="step-narrative-body">
                    An intuitive, accessible incident dashboard integrating real-time disaster likelihood scoring,
                    automated safety checklists, and responsive emergency alert feeds.
                  </p>
                </div>

                {/* Step 4: What I Learned */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>04 / What I Learned</strong>
                  </div>
                  <p className="step-narrative-body">
                    Deepened practical knowledge in handling continuous time-series meteorological inputs,
                    optimizing data fetching lifecycles, and ensuring critical UI states remain legible under emergency constraints.
                  </p>
                </div>

              </div>

            </div>

            {/* Video-Inspired Two-Column Architectural Spec Card: Capabilities + Shipped Deliverables */}
            <div className="spec-two-column-card" style={{ marginTop: '36px', position: 'relative', zIndex: 1 }}>
              <div className="spec-capabilities-col">
                <div className="spec-section-header">
                  <span className="spec-glyph-red">▸</span>
                  <span>CORE ENGINEERING CAPABILITIES</span>
                </div>
                <div className="spec-capabilities-grid">
                  {[
                    'Meteorological Signal Ingestion',
                    'Automated Precautionary Bulletins',
                    'Real-Time Storm Risk Prediction',
                    'Interactive Map UI Coordinates',
                    'Emergency Contrast Legibility',
                    'Supervised Weather Classification',
                  ].map((cap, cIdx) => (
                    <div key={cIdx} className="spec-bullet-item">
                      <span className="spec-glyph-red">▸</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="spec-divider-rule" />

              <div className="spec-deliverables-col">
                <div className="spec-section-header">
                  <span className="spec-check-glyph">✓</span>
                  <span>SHIPPED DELIVERABLES & VERIFICATION</span>
                </div>
                <div className="spec-deliverables-grid">
                  {[
                    'Predictive ML Risk Scoring Engine',
                    'Sentinel Live Alert Feed UI',
                    'Responsive Emergency Dashboard',
                    'RESTful Weather Data Ingestion',
                    'Mobile Viewport Adaptability',
                    'Clean GitHub Documentation',
                  ].map((deliv, dIdx) => (
                    <div key={dIdx} className="spec-check-item">
                      <span className="spec-check-glyph">✓</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Luxury Marquee Ticker */}
      <LuxuryMarquee theme="crimson" items={['METEOROLOGICAL PREDICTION', 'REAL-TIME ADVISORY', 'APPLIED MACHINE LEARNING', 'ZERO COMPROMISE DESIGN']} />

      {/* =====================================================================
          3. CHAPTER 02 — LEARNING ZONE
          ===================================================================== */}
      <section id="chapter-02" className="project-chapter-section bg-ivory">
        <div className="container">
          <div className="project-chapter-card high-contrast-card relative">
            
            {/* Watermark Numeral */}
            <div className="watermark-numeral" aria-hidden="true">02</div>

            {/* Chapter Header */}
            <div className="chapter-header-row" style={{ position: 'relative', zIndex: 1 }}>
              <div className="chapter-stamp-block">
                <span className="outlined-numeral">02</span>
                <div>
                  <span className="editorial-stamp">Certification Platform</span>
                  <h2 className="chapter-main-title text-espresso">Learning Zone</h2>
                  <p className="chapter-tagline text-terracotta">Make learning easier to navigate.</p>
                </div>
              </div>

              <div className="chapter-actions">
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="View Learning Zone on GitHub (opens in new tab)"
                >
                  <Github size={16} />
                  <span>Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Visual & Core Narrative Grid */}
            <div className="chapter-grid" style={{ position: 'relative', zIndex: 1 }}>
              
              {/* Visual Side: Learning Zone Application Interface */}
              <div className="chapter-visual-wrapper">
                <div className="chapter-image-box">
                  <img
                    src="/images/learning-screen.jpg"
                    alt="Learning Zone — Interactive Course Roadmap, Coding Quiz, and Real-time AI Study Tutor"
                    className="chapter-editorial-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/learning_zone.jpg';
                    }}
                  />
                  <div className="chapter-image-caption">
                    <span className="text-espresso">Fig. 2.0 — Modular Roadmaps, Coding Quiz Engine & AI Conversational Assistant</span>
                    <span className="chapter-image-badge bg-terracotta text-white">Learning Hub UI</span>
                  </div>
                </div>

                <div className="chapter-tech-pills">
                  {['React.js', 'HTML5', 'Modern CSS', 'JavaScript (ES6+)', 'AI Study Assistant', 'Responsive UI'].map((t) => (
                    <span key={t} className="meta-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* 4-Step Narrative Steps */}
              <div className="chapter-narrative-steps">
                
                {/* Step 1: Problem */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong className="text-espresso">01 / The Problem</strong>
                  </div>
                  <p className="step-narrative-body text-espresso">
                    Self-directed computer science students struggle with scattered study resources, inconsistent
                    practice environments, and lack of real-time conceptual clarification when encountering difficult code blocks.
                  </p>
                </div>

                {/* Step 2: Approach */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong className="text-espresso">02 / The Approach</strong>
                  </div>
                  <p className="step-narrative-body text-espresso">
                    Architected an educational frontend that consolidates modular course roadmaps, interactive coding
                    quizzes, and a conversational AI tutor directly inside a unified single-page application.
                  </p>
                </div>

                {/* Step 3: What I Built */}
                <div className="step-narrative-card highlight-step">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong className="text-espresso">03 / What I Built</strong>
                  </div>
                  <p className="step-narrative-body text-espresso">
                    A responsive study portal featuring curriculum progress tracking, self-assessment scoring,
                    and on-demand contextual assistance without interrupting the learner’s focus.
                  </p>
                </div>

                {/* Step 4: What I Learned */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong className="text-espresso">04 / What I Learned</strong>
                  </div>
                  <p className="step-narrative-body text-espresso">
                    Learned how to integrate AI conversational helpers into an educational frontend without breaking
                    the user’s reading flow, while maintaining crisp visual hierarchy and responsive sidebar controls.
                  </p>
                </div>

              </div>

            </div>

            {/* Video-Inspired Two-Column Architectural Spec Card: Capabilities + Shipped Deliverables */}
            <div className="spec-two-column-card" style={{ marginTop: '36px', position: 'relative', zIndex: 1 }}>
              <div className="spec-capabilities-col">
                <div className="spec-section-header">
                  <span className="spec-glyph-red">▸</span>
                  <span>CORE ENGINEERING CAPABILITIES</span>
                </div>
                <div className="spec-capabilities-grid">
                  {[
                    'Modular Education Roadmaps',
                    'Interactive Coding Quizzes',
                    'Embedded Conversational AI Tutor',
                    'Responsive Side-Panel Controls',
                    'Dynamic Course Progress Engine',
                    'Context-Aware Study Assistant',
                  ].map((cap, cIdx) => (
                    <div key={cIdx} className="spec-bullet-item">
                      <span className="spec-glyph-red">▸</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="spec-divider-rule" />

              <div className="spec-deliverables-col">
                <div className="spec-section-header">
                  <span className="spec-check-glyph">✓</span>
                  <span>SHIPPED DELIVERABLES & VERIFICATION</span>
                </div>
                <div className="spec-deliverables-grid">
                  {[
                    'Full-Stack React Learning Portal',
                    'Interactive State Machine',
                    'AI Study Walkthrough Module',
                    'Zero-Distraction Reading Layout',
                    'Accessible Quiz Form Controls',
                    'Modular Component Architecture',
                  ].map((deliv, dIdx) => (
                    <div key={dIdx} className="spec-check-item">
                      <span className="spec-check-glyph">✓</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Luxury Marquee Ticker */}
      <LuxuryMarquee theme="dark" items={['EDUCATION PLATFORMS', 'AI TUTOR INTEGRATION', 'MODULAR ROADMAPS', 'CLEAN COMPONENT ARCHITECTURE']} />

      {/* =====================================================================
          4. CHAPTER 03 — FINANCE TRACKER
          ===================================================================== */}
      <section id="chapter-03" className="project-chapter-section bg-cream">
        <div className="container">
          <div className="project-chapter-card relative">
            
            {/* Watermark Numeral */}
            <div className="watermark-numeral" aria-hidden="true">03</div>

            {/* Chapter Header */}
            <div className="chapter-header-row" style={{ position: 'relative', zIndex: 1 }}>
              <div className="chapter-stamp-block">
                <span className="outlined-numeral">03</span>
                <div>
                  <span className="editorial-stamp">Financial Analytics</span>
                  <h2 className="chapter-main-title">Finance Tracker</h2>
                  <p className="chapter-tagline">Clarity over complex figures.</p>
                </div>
              </div>

              <div className="chapter-actions">
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="View Finance Tracker on GitHub (opens in new tab)"
                >
                  <Github size={16} />
                  <span>Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Visual & Core Narrative Grid */}
            <div className="chapter-grid" style={{ position: 'relative', zIndex: 1 }}>
              
              {/* Visual Side: Finance Tracker Analytics Dashboard */}
              <div className="chapter-visual-wrapper">
                <div className="chapter-image-box">
                  <img
                    src="/images/finance-screen.jpg"
                    alt="Finance Tracker — Real-Time Spending Analytics, Budget Trends, and Expense Categorization Dashboard"
                    className="chapter-editorial-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/finance_tracker.jpg';
                    }}
                  />
                  <div className="chapter-image-caption">
                    <span>Fig. 3.0 — Spending by Category, Weekly Trend Charts & Real-time Budget Metrics</span>
                    <span className="chapter-image-badge">Finance Tracker UI</span>
                  </div>
                </div>

                <div className="chapter-tech-pills">
                  {['React.js', 'JavaScript (ES6+)', 'AI Spending Analysis', 'Data Visualization', 'CSS Modules'].map((t) => (
                    <span key={t} className="meta-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* 4-Step Narrative Steps */}
              <div className="chapter-narrative-steps">
                
                {/* Step 1: Problem */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>01 / The Problem</strong>
                  </div>
                  <p className="step-narrative-body">
                    Personal budgeting spreadsheets require high manual friction, while most consumer mobile apps
                    overwhelm users with noisy ads and zero meaningful pattern recognition to curb impulsive spending.
                  </p>
                </div>

                {/* Step 2: Approach */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>02 / The Approach</strong>
                  </div>
                  <p className="step-narrative-body">
                    Engineered a monthly expense tracking application incorporating AI-based analysis of spending habits
                    to uncover recurring spending velocity and anomalies without complicated accounting jargon.
                  </p>
                </div>

                {/* Step 3: What I Built */}
                <div className="step-narrative-card highlight-step">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>03 / What I Built</strong>
                  </div>
                  <p className="step-narrative-body">
                    A clean ledger interface with streamlined transaction entry, monthly breakdown visualizations,
                    and automated category summaries that provide clear spending insights at a glance.
                  </p>
                </div>

                {/* Step 4: What I Learned */}
                <div className="step-narrative-card">
                  <div className="step-narrative-label">
                    <span className="step-dot" />
                    <strong>04 / What I Learned</strong>
                  </div>
                  <p className="step-narrative-body">
                    Mastered client-side data calculations, responsive chart rendering, and clean numerical data typography
                    utilizing tabular-numeric alignment for financial clarity.
                  </p>
                </div>

              </div>

            </div>

            {/* Video-Inspired Two-Column Architectural Spec Card: Capabilities + Shipped Deliverables */}
            <div className="spec-two-column-card" style={{ marginTop: '36px', position: 'relative', zIndex: 1 }}>
              <div className="spec-capabilities-col">
                <div className="spec-section-header">
                  <span className="spec-glyph-red">▸</span>
                  <span>CORE ENGINEERING CAPABILITIES</span>
                </div>
                <div className="spec-capabilities-grid">
                  {[
                    'Tabular-Numeric Expense Ledger',
                    'AI Spending Velocity Analysis',
                    'Real-Time Category Breakdown',
                    'Monthly Trend Visualizations',
                    'Dynamic Budget Allocation',
                    'Client-Side Data Calculation',
                  ].map((cap, cIdx) => (
                    <div key={cIdx} className="spec-bullet-item">
                      <span className="spec-glyph-red">▸</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="spec-divider-rule" />

              <div className="spec-deliverables-col">
                <div className="spec-section-header">
                  <span className="spec-check-glyph">✓</span>
                  <span>SHIPPED DELIVERABLES & VERIFICATION</span>
                </div>
                <div className="spec-deliverables-grid">
                  {[
                    'Responsive Financial Dashboard',
                    'Interactive Spending Charts',
                    'Transaction Filter & Search',
                    'Automated Category Summaries',
                    'High-Contrast Numerical Data UI',
                    'Modular CSS Architecture',
                  ].map((deliv, dIdx) => (
                    <div key={dIdx} className="spec-check-item">
                      <span className="spec-check-glyph">✓</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          5. DEEP CONTRAST PANEL (Engineering Integrity)
          ===================================================================== */}
      <section className="projects-deep-section">
        <div className="container">
          <div className="deep-panel-terracotta">
            <span className="deep-panel-stamp">Editorial Anchor · Engineering Integrity</span>
            <h3 className="deep-panel-heading">
              “Zero Invented Numbers. No Fake Revenue Claims. Real Student Systems.”
            </h3>
            <p className="deep-panel-body" style={{ maxWidth: '820px', marginBottom: '24px' }}>
              Every project highlighted on this site is an authentic application I personally designed, coded,
              and refined. As a student-engineer at SNS College of Engineering, my goal is to build calm,
              dependable front-end interfaces and apply machine learning where it delivers tangible value.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a 
                href="https://github.com/pranav-m2006" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ backgroundColor: '#FBF7F0', color: '#5A2A20' }}
              >
                <Github size={16} />
                <span>Explore Source Code on GitHub</span>
                <ArrowUpRight size={14} />
              </a>
              <Link to="/skills" className="btn-secondary" style={{ backgroundColor: 'rgba(251, 247, 240, 0.15)', color: '#FFFFFF', borderColor: 'rgba(251, 247, 240, 0.3)' }}>
                <span>Inspect Technical Skills</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. ROUTE CONTINUATION BANNER
          ===================================================================== */}
      <section className="next-route-section bg-cream">
        <div className="container next-route-container">
          <div className="next-route-text">
            <span className="editorial-stamp">Next Chapter</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-espresso)', marginTop: '8px' }}>
              The tools in my hands.
            </h3>
          </div>

          <Link to="/skills" className="btn-primary next-route-btn">
            <span>Next: Skills</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

    </div>
  );
}
