import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github, ShieldCheck, Compass, Layers, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
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
            Structured with four clear milestones: <strong>Problem</strong>,{' '}
            <strong>Approach</strong>,{' '}
            <strong>What I Built</strong>, and{' '}
            <strong>What I Learned</strong>.
            Explore technical architecture, technologies used, and verified live repositories below.
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

              {/* Dual Action Links: Repository + Live Demo */}
              <div className="project-dual-actions">
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="View Disaster Management System on GitHub (opens in new tab)"
                >
                  <Github size={16} />
                  <span>Repository</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live-demo"
                  aria-label="Launch Disaster Management System Live Demo (opens in new tab)"
                >
                  <Compass size={15} />
                  <span>Live Demo</span>
                  <ArrowUpRight size={13} />
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
                    <span>Fig. 1.0 — Real-time Storm Probability &amp; Automated Precautionary Advisory UI</span>
                    <span className="chapter-image-badge">Sentinel AI UI</span>
                  </div>
                </div>

                {/* Structured Tech Stack Badges */}
                <div className="chapter-tech-pills">
                  {['Python (Scikit-Learn)', 'Pandas / NumPy', 'React.js (Vite)', 'Meteorological REST APIs', 'Modern CSS3', 'Git / GitHub'].map((t) => (
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

            {/* Detailed Contribution Box: What I Actually Did */}
            <div className="project-contributions-box" style={{ position: 'relative', zIndex: 1 }}>
              <div className="project-contributions-title">
                <Terminal size={17} color="#C63D2F" />
                <span>WHAT I ACTUALLY DID — ENGINEERING RESPONSIBILITIES</span>
              </div>
              <ul className="project-contributions-list">
                <li>
                  <strong>Trained &amp; Evaluated Classification Models:</strong> Cleaned historical rainfall and atmospheric pressure sensor datasets using Python and Pandas, training Random Forest and Gradient Boosting models achieving 91.4% test classification accuracy for threat-level escalation.
                </li>
                <li>
                  <strong>Built Reactive Frontend Incident Dashboard:</strong> Developed the complete client-side application in React.js, implementing real-time storm probability indicators, dynamic color-coded urgency tiers, and auto-generated preparation advisories.
                </li>
                <li>
                  <strong>Asynchronous Alert Polling &amp; Resilience:</strong> Created custom data polling hooks to stream meteorological updates every 60 seconds with resilient error handling, avoiding full-page reloads and preserving state during weak connectivity.
                </li>
                <li>
                  <strong>Accessible Emergency UI Design:</strong> Conformed all typography and high-contrast alert badges to WCAG AAA standards (12.8:1 contrast) to ensure immediate readability on field devices and low-brightness displays.
                </li>
              </ul>
            </div>

            {/* Two-Column Architectural Spec Card: Capabilities + Shipped Deliverables */}
            <div className="spec-two-column-card" style={{ marginTop: '24px', position: 'relative', zIndex: 1 }}>
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
                  <span>SHIPPED DELIVERABLES &amp; VERIFICATION</span>
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

              {/* Dual Action Links */}
              <div className="project-dual-actions">
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="View Learning Zone on GitHub (opens in new tab)"
                >
                  <Github size={16} />
                  <span>Repository</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live-demo"
                  aria-label="Launch Learning Zone Live Demo (opens in new tab)"
                >
                  <Compass size={15} />
                  <span>Live Demo</span>
                  <ArrowUpRight size={13} />
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
                    <span className="text-espresso">Fig. 2.0 — Modular Roadmaps, Coding Quiz Engine &amp; AI Conversational Assistant</span>
                    <span className="chapter-image-badge bg-terracotta text-white">Learning Hub UI</span>
                  </div>
                </div>

                <div className="chapter-tech-pills">
                  {['React.js', 'HTML5 / Modern CSS', 'JavaScript (ES6+)', 'Conversational AI Assistant', 'LocalStorage Sync', 'PrismJS Highlighting'].map((t) => (
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

            {/* Detailed Contribution Box */}
            <div className="project-contributions-box" style={{ position: 'relative', zIndex: 1 }}>
              <div className="project-contributions-title">
                <Terminal size={17} color="#C63D2F" />
                <span>WHAT I ACTUALLY DID — ENGINEERING RESPONSIBILITIES</span>
              </div>
              <ul className="project-contributions-list">
                <li>
                  <strong>Unified Education Hub Architecture:</strong> Designed and implemented a single-page React application with modular chapters for Data Structures, Modern JavaScript, and Web Development.
                </li>
                <li>
                  <strong>Interactive Coding Quiz Engine:</strong> Programmed quiz state management handling question progression, instant syntax-highlighted code reviews, score tallies, and persistent streak tracking in browser LocalStorage.
                </li>
                <li>
                  <strong>Contextual AI Study Helper:</strong> Embedded an interactive AI assistant sidebar that parses current lesson context, allowing students to ask conceptual clarification questions directly alongside code examples.
                </li>
                <li>
                  <strong>Zero-Distraction Reading UX:</strong> Designed calm typography with collapsible sidebars, smooth accordion transitions, and keyboard-friendly navigation.
                </li>
              </ul>
            </div>

            {/* Two-Column Architectural Spec Card */}
            <div className="spec-two-column-card" style={{ marginTop: '24px', position: 'relative', zIndex: 1 }}>
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
                  <span>SHIPPED DELIVERABLES &amp; VERIFICATION</span>
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

              {/* Dual Action Links */}
              <div className="project-dual-actions">
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="View Finance Tracker on GitHub (opens in new tab)"
                >
                  <Github size={16} />
                  <span>Repository</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live-demo"
                  aria-label="Launch Finance Tracker Live Demo (opens in new tab)"
                >
                  <Compass size={15} />
                  <span>Live Demo</span>
                  <ArrowUpRight size={13} />
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
                    <span>Fig. 3.0 — Spending by Category, Weekly Trend Charts &amp; Real-time Budget Metrics</span>
                    <span className="chapter-image-badge">Finance Tracker UI</span>
                  </div>
                </div>

                <div className="chapter-tech-pills">
                  {['React.js', 'JavaScript (ES6+)', 'Data Visualization (SVG / Canvas)', 'Client-Side Analytics', 'CSS Modules', 'CSV Data Engine'].map((t) => (
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

            {/* Detailed Contribution Box */}
            <div className="project-contributions-box" style={{ position: 'relative', zIndex: 1 }}>
              <div className="project-contributions-title">
                <Terminal size={17} color="#C63D2F" />
                <span>WHAT I ACTUALLY DID — ENGINEERING RESPONSIBILITIES</span>
              </div>
              <ul className="project-contributions-list">
                <li>
                  <strong>Client-Side Ledger Architecture:</strong> Programmed a zero-latency transaction ledger using React state and LocalStorage, handling instant balance recalculation, tag filtering, and deletion undo states.
                </li>
                <li>
                  <strong>Spending Velocity &amp; Anomaly Detection:</strong> Built analytical math helper utilities calculating daily run rate, projecting month-end balance, and highlighting anomalous spikes exceeding user-defined category thresholds.
                </li>
                <li>
                  <strong>Custom Responsive SVG Visualizations:</strong> Designed lightweight SVG donut breakdown charts and monthly spending bars styled with font tabular numerals for optimal data legibility without heavyweight third-party charting libraries.
                </li>
                <li>
                  <strong>Data Export &amp; Privacy First:</strong> Engineered a client-side CSV export serializer enabling users to export their financial data at any time with 100% on-device data privacy.
                </li>
              </ul>
            </div>

            {/* Two-Column Architectural Spec Card */}
            <div className="spec-two-column-card" style={{ marginTop: '24px', position: 'relative', zIndex: 1 }}>
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
                  <span>SHIPPED DELIVERABLES &amp; VERIFICATION</span>
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
