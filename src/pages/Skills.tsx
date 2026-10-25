import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Code, Layout, Cpu, Database, GitBranch, Layers, Sparkles, CheckCircle2, ShieldCheck, Terminal, Compass, Zap } from 'lucide-react';
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
  const [isSentenceRed, setIsSentenceRed] = useState(false);

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
          name: 'HTML5',
          tag: 'Semantic Accessibility',
          desc: 'Document landmarks, accessible ARIA roles, SEO meta hierarchy, cross-device responsiveness, and screen-reader compliant structural markup.',
          application: 'Strict semantic hierarchy with accessible tap targets',
        },
        {
          name: 'CSS3 / Modern CSS',
          tag: 'Layout & Fluid Typography',
          desc: 'CSS Grid, Flexbox, custom CSS tokens, zero-dependency responsive rules, smooth micro-interactions, and high-contrast color harmonies.',
          application: 'Custom design systems with tailored HSL palettes and zero CSS bloat',
        },
        {
          name: 'GSAP Motion',
          tag: 'Kinetic Motion & ScrollTrigger',
          desc: 'ScrollTrigger choreographed timelines, hardware-accelerated transforms, kinetic typography reveals, and fluid viewport transitions.',
          application: 'Drives all interactive scroll sequences, reveals, and card motions',
        },
      ],
    },
    {
      id: 'backend',
      numeral: '03',
      category: 'Backend & Systems',
      title: 'Connecting Ideas to Scalable Applications',
      headline: 'Connecting user experiences to reliable computation.',
      leadDesc: 'Architecting dependable server environments, RESTful communication layers, and rapid multi-platform prototypes that handle real-world data.',
      quote: 'Connecting user experiences to reliable computation and resilient data pipelines.',
      coreCapabilities: [
        'Node.js & Express Middleware',
        'RESTful API Endpoint Design',
        'JSON Data Serialization',
        'Cross-Platform Prototyping',
        'Asynchronous Request Pipelines',
        'Error Boundary Handling',
      ],
      deliverables: [
        'Clean API Response Contracts',
        'Predictive Model Endpoints',
        'FlutterFlow Multiplatform UI',
        'Modular Route Controllers',
        'Resilient Network Fallbacks',
        'Lightweight Backend Servers',
      ],
      skills: [
        {
          name: 'Node.js & Express',
          tag: 'Backend Runtime',
          desc: 'Event-driven server runtime powering modular API routing, middleware pipelines, data serialization, and build tooling integration.',
          application: 'Powers backend services and data ingestion routes',
        },
        {
          name: 'RESTful APIs',
          tag: 'System Integration',
          desc: 'Structured JSON communication, endpoint status conventions, query parameter handling, and resilient error recovery between client and server.',
          application: 'Connects UI dashboards to real-time predictive services',
        },
        {
          name: 'FlutterFlow',
          tag: 'Rapid Multi-Platform',
          desc: 'Low-code cross-platform prototyping for mobile and web, facilitating rapid user testing, UI iteration, and verification during hackathon sprints.',
          application: 'Rapid prototyping validated during national hackathons',
        },
      ],
    },
    {
      id: 'applied-ai',
      numeral: '04',
      category: 'Applied Intelligence',
      title: 'Predictive & Assistive Intelligence',
      headline: 'Introducing practical AI where it genuinely serves a purpose.',
      leadDesc: 'Harnessing machine learning methodologies to solve real-world predictive and assistive problems without superficial gimmicks or invented claims.',
      quote: 'Practical predictive intelligence that solves real-world human problems.',
      coreCapabilities: [
        'Supervised Machine Learning',
        'Meteorological Signal Processing',
        'Context-Aware AI Tutoring',
        'NLP Tokenization & Embeddings',
        'Feature Scaling & Normalization',
        'Real-World Anomaly Detection',
      ],
      deliverables: [
        'Disaster Advisory Prediction Engine',
        'Interactive Learning Zone Assistant',
        'Automated Weather Bulletin Feed',
        'Model Accuracy Evaluation',
        'Certified NLP Workshop Credentials',
        'Production ML UI Integration',
      ],
      skills: [
        {
          name: 'Applied Machine Learning',
          tag: 'Predictive Modeling',
          desc: 'Supervised learning paradigms, feature extraction, data pre-processing, regression modeling, and performance evaluation metrics.',
          application: 'Applied in academic coursework, workshops, and production projects',
        },
        {
          name: 'Disaster Risk Forecasting',
          tag: 'Meteorological Signals',
          desc: 'Trained weather anomaly prediction model that translates raw sensor probabilities into plain-language precautionary bulletins.',
          application: 'Core engine of the Disaster Management & Advisory System',
        },
        {
          name: 'Interactive AI Tutor Module',
          tag: 'Context-Aware Assistant',
          desc: 'On-demand conversational study assistant providing structured walkthroughs for complex coding problems without distracting from study flow.',
          application: 'Embedded directly into the Learning Zone education portal',
        },
        {
          name: 'NLP Workshop Foundations',
          tag: 'Natural Language Processing',
          desc: 'Hands-on training in text preprocessing, tokenization, semantic embeddings, and language model fundamentals.',
          application: 'Certified through specialized technical departmental workshops',
        },
      ],
    },
    {
      id: 'workflow',
      numeral: '05',
      category: 'Workflow & Agility',
      title: 'Team Agility & Engineering Integrity',
      headline: 'Version control, code review discipline, and team execution.',
      leadDesc: 'Rigorous version control, collaborative code reviews, and structured problem decomposition tested under intense deadlines in national competitions.',
      quote: 'Rigorous version control, co-invented patents, and national hackathon execution.',
      coreCapabilities: [
        'Git Branching & Collaborative PRs',
        'National Hackathon Sprints',
        'Intellectual Property & Patents',
        'Semantic Commit Versioning',
        'Code Review & Team Agility',
        'Systematic Problem Decomposition',
      ],
      deliverables: [
        'Smart India Hackathon Finalist Status',
        '2 Registered Product Patents',
        'Daily GitHub Track Record',
        'Verified Co-Inventor Documentation',
        'Rigorous Code Review Pass',
        'Tested Team Deliverables',
      ],
      skills: [
        {
          name: 'Git & GitHub',
          tag: 'Version Control Craft',
          desc: 'Branching strategies, pull requests, merge conflict resolution, semantic commit history, and collaborative code reviews.',
          application: 'Active daily GitHub repository management (github.com/pranav-m2006)',
        },
        {
          name: 'Smart India Hackathon 2025',
          tag: 'National Finalist',
          desc: 'Demonstrated rapid debugging, agile teamwork, and resilient architecture under high-pressure competitive sprint conditions.',
          application: 'Selected as national finalist at Smart India Hackathon 2025',
        },
        {
          name: 'Systematic Problem Solving',
          tag: 'Algorithmic Discipline',
          desc: 'Decomposing ambiguous, complex challenges into testable milestones, clean commits, and verified modular deployments.',
          application: '150+ LeetCode problems solved across a 100-day consecutive streak',
        },
        {
          name: '2 Product Patents',
          tag: 'Intellectual Property',
          desc: 'Officially registered co-inventor on two certified technological product innovations.',
          application: 'Government certified and filed product patents',
        },
      ],
    },
  ];


  // GSAP Entrance Animation on initial load
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-interactive-heading', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.skills-sentence-card', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.skills-showcase-controls-bar', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.35,
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
        eyebrow="04 / TECHNICAL ARCHITECTURE & CRAFT"
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

      {/* =====================================================================
          2. GSAP INTERACTIVE NEXT-NEXT SKILLS VIEW SHOWCASE
          - Active category highlighted in Vivid Crimson Red
          - Giant Watermark Numeral
          - Italic Editorial Quote
          - Core Capabilities (▸) & Verified Deliverables (✓) Architectural Spec
          - Details shown one after another with smooth GSAP sequence
          ===================================================================== */}
      <section id="skills-showcase" className="skills-showcase-section bg-ivory">
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-brown)' }}>
              Stage {currentStage.numeral} / 05 · {currentStage.category}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#C63D2F', fontWeight: 600 }}>
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
                    <CheckCircle2 size={13} color="#C63D2F" />
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
          4. ENGINEERING PROCESS LIFECYCLE (How I Build - 6 Phases)
          ===================================================================== */}
      <ProcessLifecycle />

      {/* =====================================================================
          3. COMPLETE TECHNICAL INDEX (Full Breadth & Reference)
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
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
                <h3 style={{ fontSize: '1.25rem', color: '#1A1310' }}>Applied AI & Machine Learning</h3>
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
                <span className="meta-tag">Git & GitHub</span>
                <span className="meta-tag">SIH 2025</span>
                <span className="meta-tag">2 Patents</span>
                <span className="meta-tag">Agile Teams</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          4. APPLIED COMPETENCY & SYNTHESIS BRIDGE (Fills the awkward gap!)
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
                <p className="bridge-metric-desc">Continuous 100-day algorithmic streak in Java & C++.</p>
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
          5. CLOSING CTA (Muted Clay — Seamless Transition Directly into Experience)
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
