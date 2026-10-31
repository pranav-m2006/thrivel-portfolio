import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Code, Layout, Cpu, Database, GitBranch, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';
import ProcessLifecycle from '../components/ProcessLifecycle';

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  tag: string;
  desc: string;
  application: string;
}

interface SkillStage {
  id: string;
  numeral: string;
  category: string;
  title: string;
  headline: string;
  leadDesc: string;
  quote: string;
  coreCapabilities: string[];
  deliverables: string[];
  skills: SkillItem[];
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const skillStages: SkillStage[] = [
    {
      id: 'languages',
      numeral: '01',
      category: 'Core Languages',
      title: 'The Foundations of Computing',
      headline: 'Computational discipline through strongly-typed logic.',
      leadDesc: 'Building computational rigor through strongly-typed architectures, manual memory dynamics, and algorithmic problem-solving across Java, C++, JavaScript, and C.',
      quote: 'Computational discipline through strongly-typed logic and asymptotic efficiency.',
      coreCapabilities: [
        'Object-Oriented Architecture (Java)',
        'Competitive Algorithmic Speed (C++)',
        'Asynchronous Event Loop (ES6+)',
        'Low-Level Systems Awareness (C)',
        'Asymptotic Complexity Analysis',
        'Algorithmic Problem Decomposition',
      ],
      deliverables: [
        '150+ LeetCode Solutions',
        '100-Day Consecutive Streak',
        'Memory-Safe C Pointers',
        'Type-Strict Class Models',
        'Modular Script Utilities',
        'Algorithmic Benchmark Pass',
      ],
      skills: [
        {
          name: 'Java',
          tag: 'OOP & DSA Core',
          desc: 'Extensively applied across algorithm problem solving, object-oriented design patterns, inheritance hierarchies, and rigorous technical evaluations.',
          application: '150+ LeetCode problems solved with 100-day active streak',
        },
        {
          name: 'JavaScript (ES6+)',
          tag: 'Modern Asynchronous Engine',
          desc: 'Asynchronous event loops, DOM performance optimization, closures, promises, modular architecture, and modern client-side frontend execution.',
          application: 'Powers all dynamic web applications and React component ecosystems',
        },
        {
          name: 'C',
          tag: 'Low-Level Computing',
          desc: 'Pointer arithmetic, manual memory allocation, data struct alignment, and low-level computer science concepts essential for system efficiency.',
          application: 'Foundational systems engineering and memory optimization',
        },
        {
          name: 'C++',
          tag: 'Competitive Algorithmic Speed',
          desc: 'Standard Template Library (STL), memory management, asymptotic complexity tuning, and algorithmic speed utilized across competitive coding.',
          application: 'Algorithmic efficiency and coding streak competitions',
        },
      ],
    },
    {
      id: 'frontend',
      numeral: '02',
      category: 'Frontend Engineering',
      title: 'Building the Sensory Interface',
      headline: 'Crafting the part of the web that people actually touch.',
      leadDesc: 'Transforming visual architecture into semantic, accessible, high-performance web experiences with modern React.js, pure CSS craft, and kinetic GSAP animations.',
      quote: 'Interfaces that feel intuitive, calm, and responsive under pressure.',
      coreCapabilities: [
        'Declarative React Architecture',
        'Accessible HTML5 & ARIA Landmarks',
        'Modern Vanilla CSS Tokens & Grid',
        'Kinetic GSAP Timelines',
        'Hardware-Accelerated Transitions',
        'Responsive Fluid Typography',
      ],
      deliverables: [
        'Sub-Second LCP Performance',
        'Mobile-First Responsive Layouts',
        'WCAG AA Contrast Compliance',
        'Zero CSS Bloat & Pure Tokens',
        'Custom Interaction Hooks',
        'Interactive State Machines',
      ],
      skills: [
        {
          name: 'React.js',
          tag: 'Component Architecture',
          desc: 'Declarative component rendering, custom hooks, reactive state workflows, virtual DOM reconciliation, and scalable modular design systems.',
          application: 'Core UI framework across Learning Zone, Disaster Advisory, and Portfolio',
        },
        {
          name: 'HTML5 & Semantic A11y',
          tag: 'Accessible Document Foundation',
          desc: 'Strict document structure, ARIA landmarks, keyboard navigation compliance, and high-readability semantic layouts that honor all users.',
          application: 'Applied across 100% of production web applications and interfaces',
        },
        {
          name: 'Modern CSS3 & Tokens',
          tag: 'Responsive Visual Craft',
          desc: 'CSS Grid, Flexbox, custom property tokens, fluid typography with clamp(), and clean responsive breakpoints without external CSS framework bloat.',
          application: 'Pure vanilla token architecture powering ultra-fast, bespoke designs',
        },
        {
          name: 'GSAP Animation Platform',
          tag: 'Kinetic Motion Design',
          desc: 'ScrollTrigger orchestrations, frame canvas sequences, staggered reveals, and silky smooth easing curves that respect reduced motion settings.',
          application: 'Scroll-linked hero animations, page transitions, and interactive viewports',
        },
      ],
    },
    {
      id: 'backend',
      numeral: '03',
      category: 'Backend & Data',
      title: 'Reliable Data Pipelines',
      headline: 'Building the durable spine behind dynamic interfaces.',
      leadDesc: 'Connecting responsive frontend applications to reliable backend APIs, structured relational schemas, and asynchronous data fetching layers.',
      quote: 'Clean API boundaries and predictable, structured state synchronization.',
      coreCapabilities: [
        'RESTful API Integration',
        'Relational Schema Design (SQL)',
        'Node.js Server Fundamentals',
        'Asynchronous Error Handling',
        'JSON Schema Validation',
        'Client-Side Caching Protocols',
      ],
      deliverables: [
        'Predictable API Contract Adherence',
        'Relational Data Normalization',
        'Fault-Tolerant Fetch Wrappers',
        'Sanitized Client Input Streams',
        'Consistent Response Serialization',
        'Robust Network Retry Handlers',
      ],
      skills: [
        {
          name: 'Node.js',
          tag: 'Server-Side Runtime',
          desc: 'Building lightweight runtime servers, handling asynchronous I/O streams, managing package dependencies, and serving modular endpoints.',
          application: 'Backend tooling, build configurations, and local API mock services',
        },
        {
          name: 'SQL & Relational DBs',
          tag: 'Structured Data Storage',
          desc: 'Relational data modeling, primary/foreign key normalization, schema indexing, and structured SQL queries across databases.',
          application: 'Academic coursework and disaster telemetry historical databases',
        },
        {
          name: 'RESTful API Architecture',
          tag: 'Data Exchange Protocols',
          desc: 'Designing and consuming predictable HTTP methods (GET, POST, PUT, DELETE), JSON serialization, and structured status code handling.',
          application: 'Third-party meteorological APIs and backend communication channels',
        },
      ],
    },
    {
      id: 'applied-ai',
      numeral: '04',
      category: 'Applied AI & ML',
      title: 'Machine Learning Where It Serves Purpose',
      headline: 'Practical intelligence applied to real-world mitigation.',
      leadDesc: 'Applying machine learning models and conversational AI pipelines to practical problems: weather-driven disaster risk mitigation and intelligent pedagogical tutoring.',
      quote: 'No hollow hype — just applied prediction that provides tangible human utility.',
      coreCapabilities: [
        'Predictive Classification Models',
        'Geospatial Telemetry Processing',
        'Conversational Tutoring Logic',
        'Real-Time Inference Integration',
        'Weather Data Feature Engineering',
        'Model Evaluation & Confusion Matrices',
      ],
      deliverables: [
        'SIH 2025 National Finalist Prototype',
        'Multi-Metric Risk Scoring Pipeline',
        'Modular Quiz Generation Logic',
        'Adaptive Learner Feedback Trees',
        'Real-Time Alert Threshold Rules',
        'Documented Research Methodologies',
      ],
      skills: [
        {
          name: 'Machine Learning & Python',
          tag: 'Predictive Modeling',
          desc: 'Supervised predictive classification, feature engineering, and data preprocessing for meteorological risk forecasting.',
          application: 'Automated Weather-Driven Disaster Management System (SIH 2025)',
        },
        {
          name: 'Conversational AI Systems',
          tag: 'Pedagogical Interfaces',
          desc: 'Context-aware interactive tutoring loops, prompt-engineered question guidance, and adaptive student response evaluations.',
          application: 'The Learning Zone AI-powered tutoring and concept clarification modules',
        },
        {
          name: 'Data Analysis & Visuals',
          tag: 'Empirical Interpretation',
          desc: 'Translating complex model predictions into clear visual indicators, severity gauges, and actionable human safety warnings.',
          application: 'Disaster advisory UI and weather trend mapping charts',
        },
      ],
    },
    {
      id: 'workflow',
      numeral: '05',
      category: 'Engineering Workflow',
      title: 'Professional Delivery & Collaboration',
      headline: 'Tools and disciplines that turn concepts into shipped code.',
      leadDesc: 'Disciplined version control, team collaboration habits, agile sprint participation, and intellectual property documentation honed across internships and national hackathons.',
      quote: 'Collaborative clarity, dependable versioning, and continuous delivery.',
      coreCapabilities: [
        'Git Branching & PR Cadence',
        'Agile Sprint Participation',
        'Cross-Browser Diagnostic Auditing',
        'Vite Production Bundling',
        'Intellectual Property Filing',
        'Technical Architecture Defense',
      ],
      deliverables: [
        'Clean GitHub Commit Histories',
        '2 Formally Registered Patents',
        'SIH 2025 National Stage Delivery',
        'Production Internship Shipments',
        'Zero-Warning TypeScript Builds',
        'Documented Component Runbooks',
      ],
      skills: [
        {
          name: 'Git & GitHub',
          tag: 'Version Control Rigor',
          desc: 'Branch workflows, pull requests, resolving merge conflicts, semantic commit messages, and collaborative open-source contributions.',
          application: 'All personal, team hackathon, and internship code repositories',
        },
        {
          name: 'Vite & Modern Tooling',
          tag: 'Build & Bundling Engine',
          desc: 'Sub-second Hot Module Replacement (HMR), tree-shaking production chunk optimization, and lightning-fast developer feedback loops.',
          application: 'Development and production build pipeline for all current web applications',
        },
        {
          name: 'Patents & Technical Defense',
          tag: 'Intellectual Property Craft',
          desc: 'Drafting formal patent claims, documenting hardware-software integration diagrams, and defending architectural solutions before technical juries.',
          application: '2 registered technological product patents and SIH 2025 national finals',
        },
      ],
    },
  ];

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.skills-hero-reveal', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.from('.skills-showcase-controls-bar', {
        scrollTrigger: {
          trigger: '#skills-showcase',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });

      // ScrollTrigger reveals for Technical Index cards
      gsap.utils.toArray<HTMLElement>('.skills-index-grid .editorial-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        });
      });

      // ScrollTrigger reveals for Bridge metrics
      gsap.from('.bridge-metric-card', {
        scrollTrigger: {
          trigger: '.bridge-metrics-grid',
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // GSAP Transition when switching between next/prev skills
  const handleStageSelect = (nextIndex: number) => {
    if (nextIndex === activeStageIndex || !showcaseRef.current) return;

    const currentScreen = showcaseRef.current;

    // Smooth transition: fade out old content, update index, reveal new details one after another
    gsap.to(currentScreen, {
      opacity: 0.3,
      y: -8,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setActiveStageIndex(nextIndex);

        // Next view enters in red-accented grandeur
        gsap.fromTo(
          currentScreen,
          { opacity: 0.2, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
        );

        // Details shown one after another with smooth stagger
        gsap.fromTo(
          '.showcase-detail-card',
          { opacity: 0, y: 22, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.09,
            duration: 0.4,
            ease: 'power2.out',
            delay: 0.05,
          }
        );
      },
    });
  };

  const handleNextSkill = () => {
    const nextIdx = (activeStageIndex + 1) % skillStages.length;
    handleStageSelect(nextIdx);
  };

  const handlePrevSkill = () => {
    const prevIdx = (activeStageIndex - 1 + skillStages.length) % skillStages.length;
    handleStageSelect(prevIdx);
  };

  // Keyboard navigation for next/prev skills
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight') {
        handleNextSkill();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSkill();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStageIndex]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages': return <Code size={14} />;
      case 'frontend': return <Layout size={14} />;
      case 'backend': return <Database size={14} />;
      case 'applied-ai': return <Cpu size={14} />;
      case 'workflow': return <GitBranch size={14} />;
      default: return <Sparkles size={14} />;
    }
  };

  const currentStage = skillStages[activeStageIndex];

  return (
    <div ref={containerRef} className="page-wrapper">

      {/* =====================================================================
          1. HERO: Big Bold Black-to-Red Interactive Transition Heading
          ===================================================================== */}
      <PageHeroHeadline
        eyebrow="04 / TECHNICAL ARCHITECTURE &amp; CRAFT"
        blackText="A disciplined toolkit."
        accentText="Built for craft."
        arrowHref="#skills-showcase"
        leadParagraph={
          <>
            A focused grouping of{' '}
            <strong>core languages</strong>,{' '}
            <strong>frontend engineering systems</strong>, and{' '}
            <strong>applied machine learning pipelines</strong>{' '}
            — verified through academic coursework, national hackathons, and real software internship systems.
          </>
        }
        tags={[
          'B.E. Computer Science & Tech (SNSCE)',
          '150+ LeetCode (100-Day Streak)',
          '2 Registered Patents',
          'SIH 2025 National Finalist',
          'React.js & Vanilla CSS Craft',
        ]}
      />

      {/* Continuous Moving Horizontal Bar */}
      <LuxuryMarquee
        theme="dark"
        items={[
          'COMPUTATIONAL RIGOR',
          'OBJECT-ORIENTED ARCHITECTURE',
          'FRONTEND FIDELITY',
          'DATA STRUCTURES & ALGORITHMS',
          'ASYNCHRONOUS EVENT LOOP',
          'MACHINE LEARNING PIPELINES',
          '150+ LEETCODE SOLVED',
        ]}
      />

      {/* =====================================================================
          2. GSAP INTERACTIVE NEXT-NEXT SKILLS VIEW SHOWCASE (Black Theme)
          - Active category highlighted in Vivid Crimson Red
          - Giant Watermark Numeral
          - Italic Editorial Quote
          - Core Capabilities (▸) & Verified Deliverables (✓) Architectural Spec
          - Details shown one after another with smooth GSAP sequence
          ===================================================================== */}
      <section id="skills-showcase" className="skills-showcase-section">
        <div className="container">

          {/* Navigation Controls: Categories + Next/Prev Buttons */}
          <div className="skills-showcase-controls-bar">

            {/* Stage Tabs (Active highlighted in RED) */}
            <div className="skills-stage-tabs-row" role="tablist" aria-label="Skill Categories">
              {skillStages.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                return (
                  <button
                    key={stage.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`skill-tab-pill ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleStageSelect(idx)}
                  >
                    <span className="tab-numeral">{stage.numeral}</span>
                    {getCategoryIcon(stage.id)}
                    <span>{stage.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Next / Prev GSAP Motion Controls */}
            <div className="skills-showcase-nav-btns">
              <button
                type="button"
                onClick={handlePrevSkill}
                className="skills-nav-arrow-btn"
                aria-label="Previous skill stage (or Left Arrow)"
                title="Previous Skill (← Arrow Key)"
              >
                <ArrowLeft size={16} />
                <span>Prev</span>
              </button>

              <button
                type="button"
                onClick={handleNextSkill}
                className="skills-nav-arrow-btn skills-next-btn-red"
                aria-label="Next skill stage (or Right Arrow)"
                title="Next Skill (→ Arrow Key)"
              >
                <span>Next Skill</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Kinetic Progress Bar Track */}
          <div className="skills-stage-progress-bar-track" aria-hidden="true">
            <div
              className="skills-stage-progress-bar-fill"
              style={{ width: `${((activeStageIndex + 1) / skillStages.length) * 100}%` }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', marginBottom: '18px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#D9C2A3' }}>
              Stage {currentStage.numeral} / 05 · {currentStage.category}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#E25B45', fontWeight: 600 }}>
              Use ← / → keys to navigate
            </span>
          </div>

          {/* Main Stage Screen: Good Rich Colour Background & Big Fonts */}
          <div
            ref={showcaseRef}
            className="skills-showcase-stage-screen relative"
            tabIndex={0}
            aria-live="polite"
          >
            {/* Watermark Numeral in Background */}
            <div className="watermark-numeral" aria-hidden="true">
              {currentStage.numeral}
            </div>

            {/* Stage Header with Vivid Red Numeral and Category */}
            <div className="showcase-stage-header" style={{ position: 'relative', zIndex: 1 }}>
              <div>
                <span className="showcase-stage-category">{currentStage.category} · Stage {currentStage.numeral} of 05</span>
                <h2 className="showcase-stage-headline">{currentStage.headline}</h2>
              </div>
              <div className="showcase-stage-numeral">{currentStage.numeral}</div>
            </div>

            {/* Italic Editorial Quote */}
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                color: '#D9C2A3',
                margin: '12px 0 20px',
                lineHeight: 1.4,
                position: 'relative',
                zIndex: 1,
              }}
            >
              “{currentStage.quote}”
            </p>

            {/* Big Font Size Description */}
            <p className="showcase-big-description" style={{ position: 'relative', zIndex: 1 }}>
              {currentStage.leadDesc}
            </p>

            {/* Skill Details Grid (Details shown one after another via GSAP) */}
            <div className="showcase-details-grid" style={{ position: 'relative', zIndex: 1 }}>
              {currentStage.skills.map((item) => (
                <div key={item.name} className="showcase-detail-card">
                  <div>
                    <div className="showcase-detail-top">
                      <h3 className="showcase-detail-name">{item.name}</h3>
                      <span className="showcase-detail-tag">{item.tag}</span>
                    </div>
                    <p className="showcase-detail-body">{item.desc}</p>
                  </div>

                  <div className="showcase-detail-app">
                    <CheckCircle2 size={13} color="#E25B45" />
                    <span>{item.application}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Video-Inspired Two-Column Architectural Spec Card: Core Capabilities + Verified Deliverables */}
            <div className="spec-two-column-card theme-dark" style={{ marginTop: '36px', position: 'relative', zIndex: 1 }}>
              <div className="spec-capabilities-col">
                <div className="spec-section-header">
                  <span className="spec-glyph-red">▸</span>
                  <span>CORE CAPABILITIES</span>
                </div>
                <div className="spec-capabilities-grid">
                  {currentStage.coreCapabilities.map((cap, cIdx) => (
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
                  <span>WHAT WE DELIVER &amp; VERIFY</span>
                </div>
                <div className="spec-deliverables-grid">
                  {currentStage.deliverables.map((deliv, dIdx) => (
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
          3. LUXURY CONTINUOUS MARQUEE TICKER (Section Separation)
          ===================================================================== */}
      <LuxuryMarquee theme="dark" />

      {/* =====================================================================
          4. ENGINEERING PROCESS LIFECYCLE (How I Build - 6 Phases, High Contrast Black Theme)
          ===================================================================== */}
      <ProcessLifecycle />

      {/* =====================================================================
          5. COMPLETE TECHNICAL INDEX (Full Breadth & Reference)
          ===================================================================== */}
      <section className="page-section bg-cream" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="editorial-stamp">Full Technical Index</span>
            <h2 className="editorial-h2" style={{ marginTop: '8px' }}>Comprehensive Competency Overview</h2>
            <p style={{ color: 'var(--color-warm-grey)', maxWidth: '640px' }}>
              Full indexed catalog of technical competencies, design systems, and developer environments.
            </p>
          </div>

          <div className="skills-index-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

            {/* Card 1 */}
            <div className="editorial-card" style={{ borderTop: '3px solid #C63D2F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Code size={20} color="#C63D2F" />
                <h3 style={{ fontSize: '1.25rem', color: '#1A1310' }}>Core Languages</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)', lineHeight: '1.65', marginBottom: '16px' }}>
                Strong foundation in Java, C++, JavaScript (ES6+), and C for computational logic and memory awareness.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="meta-tag">Java (OOP)</span>
                <span className="meta-tag">C++ (STL)</span>
                <span className="meta-tag">JavaScript</span>
                <span className="meta-tag">C</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="editorial-card" style={{ borderTop: '3px solid #C63D2F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Layout size={20} color="#C63D2F" />
                <h3 style={{ fontSize: '1.25rem', color: '#1A1310' }}>Frontend Architecture</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)', lineHeight: '1.65', marginBottom: '16px' }}>
                Modern React.js component design, semantic HTML5, fluid Vanilla CSS, and kinetic GSAP animations.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="meta-tag">React.js</span>
                <span className="meta-tag">HTML5 / A11y</span>
                <span className="meta-tag">Modern CSS3</span>
                <span className="meta-tag">GSAP</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="editorial-card" style={{ borderTop: '3px solid #C63D2F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Cpu size={20} color="#C63D2F" />
                <h3 style={{ fontSize: '1.25rem', color: '#1A1310' }}>Applied AI &amp; Machine Learning</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)', lineHeight: '1.65', marginBottom: '16px' }}>
                Real-world predictive models for disaster risk forecasts and conversational AI tutoring modules.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="meta-tag">Machine Learning</span>
                <span className="meta-tag">Weather Models</span>
                <span className="meta-tag">AI Tutoring</span>
                <span className="meta-tag">NLP Basics</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="editorial-card" style={{ borderTop: '3px solid #C63D2F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <GitBranch size={20} color="#C63D2F" />
                <h3 style={{ fontSize: '1.25rem', color: '#1A1310' }}>Engineering Workflows</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)', lineHeight: '1.65', marginBottom: '16px' }}>
                Collaborative Git workflows, SIH 2025 finalist experience, registered patents, and clean PR review habits.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="meta-tag">Git &amp; GitHub</span>
                <span className="meta-tag">SIH 2025</span>
                <span className="meta-tag">2 Patents</span>
                <span className="meta-tag">Agile Teams</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          6. APPLIED COMPETENCY & SYNTHESIS BRIDGE (Fills the awkward gap!)
          Directly bridges Skills into the Work Experience CTA
          ===================================================================== */}
      <section className="skills-experience-bridge bg-ivory">
        <div className="container">
          <div className="bridge-card-wrapper">
            <div className="bridge-header">
              <span className="editorial-stamp">Applied Synthesis</span>
              <h3 className="bridge-title">From Technical Concepts to Production Systems</h3>
              <p className="bridge-sub">
                Theoretical knowledge transformed into verifiable engineering execution across competitive programming,
                real internships, and national hackathon platforms.
              </p>
            </div>

            <div className="bridge-metrics-grid">
              <div className="bridge-metric-card">
                <span className="bridge-metric-num">150+</span>
                <h4 className="bridge-metric-label">LeetCode Solved</h4>
                <p className="bridge-metric-desc">Continuous 100-day algorithmic streak in Java &amp; C++.</p>
                <span className="bridge-metric-tag">Algorithmic Discipline</span>
              </div>

              <div className="bridge-metric-card">
                <span className="bridge-metric-num">02</span>
                <h4 className="bridge-metric-label">Product Patents</h4>
                <p className="bridge-metric-desc">Co-inventor on 2 certified and registered technological innovations.</p>
                <span className="bridge-metric-tag">Intellectual Property</span>
              </div>

              <div className="bridge-metric-card">
                <span className="bridge-metric-num">SIH '25</span>
                <h4 className="bridge-metric-label">Smart India Hackathon</h4>
                <p className="bridge-metric-desc">National finalist building under tight deadlines and high stakes.</p>
                <span className="bridge-metric-tag">National Recognition</span>
              </div>

              <div className="bridge-metric-card">
                <span className="bridge-metric-num">02</span>
                <h4 className="bridge-metric-label">Software Internships</h4>
                <p className="bridge-metric-desc">Frontend craft sharpened at CodSoft and InternPe with real teams.</p>
                <span className="bridge-metric-tag">Industry Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. CLOSING CTA (Muted Clay — Seamless Transition Directly into Experience)
          ===================================================================== */}
      <section className="page-section bg-clay" style={{ textAlign: 'center', padding: '70px 0 80px', marginTop: '0', borderTop: '1px solid var(--color-sand-border)' }}>
        <div className="container-narrow">
          <div className="editorial-eyebrow" style={{ justifyContent: 'center', color: 'var(--color-sunlit-sand)' }}>
            Experience
          </div>
          <h2 className="editorial-h2" style={{ color: 'var(--color-warm-ivory)', marginBottom: '14px' }}>
            Explore real-world application.
          </h2>
          <p className="editorial-lead" style={{ margin: '0 auto 32px', color: 'var(--color-warm-ivory)', opacity: 0.9 }}>
            See how these skills were applied during engineering internships at CodSoft and InternPe.
          </p>
          <Link to="/experience" className="btn-primary" style={{ background: '#30251F', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>View Work Experience</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
