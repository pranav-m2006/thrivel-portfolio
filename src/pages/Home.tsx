import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Award, FileCode, CheckCircle2, ShieldCheck, Terminal, Compass, Sparkles, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScroll } from '../hooks/useLenisScroll';
import ArchFrame from '../components/ArchFrame';
import StepCounter from '../components/StepCounter';
import SplitReveal from '../components/SplitReveal';
import MagneticButton from '../components/MagneticButton';
import EngineeringGrowthCard from '../components/EngineeringGrowthCard';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Initialize Lenis smooth scroll synced to ScrollTrigger
  useLenisScroll();

  const containerRef = useRef<HTMLDivElement>(null);
  const storySceneRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReduced = mediaQuery.matches;

    const scene = storySceneRef.current;
    if (!scene || isReduced) return;

    const ctx = gsap.context(() => {
      const stepPanels = gsap.utils.toArray<HTMLElement>('.story-step-card');

      // Pinned Multi-Step Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: 'top top',
          end: '+=2400',
          pin: true,
          scrub: 0.6,
          snap: {
            snapTo: [0, 0.5, 1],
            duration: { min: 0.25, max: 0.5 },
            ease: 'power2.inOut',
          },
          onUpdate: (self) => {
            if (self.progress < 0.33) {
              setCurrentStep(1);
            } else if (self.progress < 0.66) {
              setCurrentStep(2);
            } else {
              setCurrentStep(3);
            }
          },
        },
      });

      // Step 1 -> Step 2 transition
      tl.to(stepPanels[0], {
        opacity: 0,
        y: -40,
        ease: 'power3.in',
        duration: 0.4,
      })
      .fromTo(stepPanels[1],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, ease: 'power3.out', duration: 0.5 },
        '-=0.1'
      )
      // Step 2 -> Step 3 transition
      .to(stepPanels[1], {
        opacity: 0,
        y: -40,
        ease: 'power3.in',
        duration: 0.4,
      }, '+=0.3')
      .fromTo(stepPanels[2],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, ease: 'power3.out', duration: 0.5 },
        '-=0.1'
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="page-wrapper home-page-container">
      
      {/* =====================================================================
          1. HERO SECTION (Name, Role, Catchy Line, Authentic Portrait)
          ===================================================================== */}
      <section className="home-hero-section bg-ivory">
        <div className="container">
          <div className="home-hero-grid">
            
            {/* Left Column: Typographic Narrative */}
            <div className="home-hero-narrative">
              <h1 className="editorial-h1" style={{ maxWidth: '640px' }}>
                <SplitReveal>Calm interfaces.</SplitReveal>
                <SplitReveal delay={0.15}>Intelligent ideas.</SplitReveal>
              </h1>

              <div className="home-hero-subline" style={{ maxWidth: '580px' }}>
                <SplitReveal as="p" delay={0.25} className="editorial-lead">
                  I build the part of the web you actually touch.
                </SplitReveal>
              </div>

              <p className="home-hero-bio">
                Pranav M — Frontend Developer and AI/ML practitioner based in Coimbatore, Tamil Nadu.
                Undergraduate in Computer Science & Technology at SNS College of Engineering (2024–2028).
                Crafting calm, responsive interfaces with HTML, CSS, JavaScript, and React.js,
                introducing practical machine learning where it genuinely serves a purpose.
              </p>

              {/* Action Links & Verified Profiles */}
              <div className="home-hero-actions">
                <MagneticButton as="a" href="#story-pin" className="btn-primary">
                  <span>Explore Storytelling</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </MagneticButton>

                <MagneticButton as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <span>Resume (TODO PDF)</span>
                </MagneticButton>
              </div>

              <div className="home-hero-socials">
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <Github size={16} aria-hidden="true" />
                  <span>github.com/pranav-m2006</span>
                </a>

                <a
                  href="https://linkedin.com/in/pranav-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  <span>linkedin.com/in/pranav-m</span>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Arch Portrait Frame */}
            <div className="home-hero-portrait-col">
              <ArchFrame
                imageSrc="/images/pranav.jpg"
                altText="Pranav M — Frontend Developer and AI/ML Practitioner sitting with laptop"
                caption="Pranav M — Student & Developer"
                badgeText="SNSCE · Coimbatore"
                enableParallax={true}
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          2. PINNED SCROLL STORYTELLING SCENE (3 Core Steps)
          Replaced previous 3D model with professional Engineering Growth Dashboard
          ===================================================================== */}
      <section 
        id="story-pin" 
        ref={storySceneRef} 
        className="home-pinned-story bg-cream"
        aria-label="Interactive Portfolio Storytelling Sequence"
      >
        <div className="container pinned-story-container">
          
          <div className="pinned-story-grid">
            
            {/* Left: Dynamic Step Content Container */}
            <div className="pinned-story-stage">
              
              {/* Step 1: What I build */}
              <div className={`story-step-card ${currentStep === 1 ? 'is-active' : ''}`}>
                <div className="story-step-header">
                  <span className="outlined-numeral">01</span>
                  <span className="section-step-indicator">WHAT I BUILD</span>
                </div>

                <h2 className="editorial-h2" style={{ maxWidth: '620px' }}>
                  I build the part of the web you actually touch.
                </h2>

                <p className="editorial-lead" style={{ maxWidth: '580px' }}>
                  I craft calm, responsive interfaces with HTML, CSS, JavaScript, and React.js — pairing
                  clean front-end architecture with practical AI modules where they genuinely serve a purpose.
                </p>

                <div className="story-step-tags">
                  <span className="meta-tag">HTML5 / Modern CSS</span>
                  <span className="meta-tag">JavaScript (ES6+)</span>
                  <span className="meta-tag">React.js</span>
                  <span className="meta-tag">Responsive Fidelity</span>
                </div>
              </div>

              {/* Step 2: Where I am coming from */}
              <div className={`story-step-card ${currentStep === 2 ? 'is-active' : ''}`}>
                <div className="story-step-header">
                  <span className="outlined-numeral">02</span>
                  <span className="section-step-indicator">WHERE I AM COMING FROM</span>
                </div>

                <h2 className="editorial-h2" style={{ maxWidth: '620px' }}>
                  Curious by habit, careful by craft.
                </h2>

                <p className="editorial-lead" style={{ maxWidth: '580px' }}>
                  Studying B.E. Computer Science and Technology at SNS College of Engineering (Sept 2024 to 2028, CGPA 8.00/10).
                  Honed front-end craft through internships at CodSoft (responsive interfaces with HTML, CSS, JavaScript; debugging
                  front-end components) and InternPe (front-end features, JavaScript, Git).
                </p>

                <div className="story-step-tags">
                  <span className="meta-tag">SNS College of Engineering</span>
                  <span className="meta-tag">CGPA 8.00 / 10</span>
                  <span className="meta-tag">CodSoft Intern</span>
                  <span className="meta-tag">InternPe Intern</span>
                </div>
              </div>

              {/* Step 3: What I am working toward */}
              <div className={`story-step-card ${currentStep === 3 ? 'is-active' : ''}`}>
                <div className="story-step-header">
                  <span className="outlined-numeral">03</span>
                  <span className="section-step-indicator">WHAT I AM WORKING TOWARD</span>
                </div>

                <h2 className="editorial-h2" style={{ maxWidth: '620px' }}>
                  Intelligent systems with human restraint.
                </h2>

                <p className="editorial-lead" style={{ maxWidth: '580px' }}>
                  Deepening applied AI/ML fundamentals and building web systems that stay fast, accessible,
                  and human under pressure. Grounded in steady algorithmic practice through 150+ LeetCode problems
                  with an active 100-day streak.
                </p>

                <div className="story-step-tags">
                  <span className="meta-tag">Applied AI/ML</span>
                  <span className="meta-tag">150+ LeetCode (100-Day Streak)</span>
                  <span className="meta-tag">2 Certified Patents</span>
                  <span className="meta-tag">SIH 2025 Finalist</span>
                </div>
              </div>

              {/* Sticky Step Counter Bar */}
              <div className="story-counter-bottom">
                <StepCounter
                  currentStep={currentStep}
                  totalSteps={3}
                  label="Scroll Journey"
                />
              </div>

            </div>

            {/* Right: Engineering Growth & Consistency Dashboard (Replaces previous 3D model) */}
            <div className="pinned-story-visual">
              <EngineeringGrowthCard />
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          3. QUICK FACTS ROW (SIH 2025, 2 Patents, 150+ LeetCode, 3 Projects)
          ===================================================================== */}
      <section className="home-facts-section bg-ivory">
        <div className="container">
          <div className="facts-header">
            <span className="section-step-indicator">VERIFIED PROOF OF SHOWING UP</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', color: 'var(--color-espresso)' }}>
              Concrete Milestones. Zero Invented Numbers.
            </h3>
          </div>

          <div className="facts-grid">
            
            <div className="fact-card">
              <span className="fact-card-num">2025</span>
              <h4 className="fact-card-title">Smart India Hackathon</h4>
              <p className="fact-card-desc">National-level finalist at Smart India Hackathon (SIH) 2025.</p>
              <span className="fact-badge">National Level</span>
            </div>

            <div className="fact-card">
              <span className="fact-card-num">02</span>
              <h4 className="fact-card-title">Certified Patents</h4>
              <p className="fact-card-desc">2 certified product patents officially registered as co-inventor.</p>
              <span className="fact-badge">Intellectual Property</span>
            </div>

            <div className="fact-card">
              <span className="fact-card-num">150+</span>
              <h4 className="fact-card-title">LeetCode Solved</h4>
              <p className="fact-card-desc">Algorithmic discipline with an active 100-day consecutive streak.</p>
              <span className="fact-badge">100-Day Streak</span>
            </div>

            <div className="fact-card">
              <span className="fact-card-num">03</span>
              <h4 className="fact-card-title">Deployed Systems</h4>
              <p className="fact-card-desc">Disaster Management, Learning Zone, and Finance Tracker.</p>
              <span className="fact-badge">AI & Web Solutions</span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          4. DEEP CONTRAST PANEL (Section 6 Requirement: ONE per route)
          ===================================================================== */}
      <section className="home-deep-section">
        <div className="container">
          <div className="deep-panel-warm-brown">
            <span className="deep-panel-stamp">Editorial Anchor · Engineering Philosophy</span>
            <h3 className="deep-panel-heading">
              “A student-engineer who builds calm, polished interfaces and adds AI where it genuinely helps.”
            </h3>
            <p className="deep-panel-body" style={{ maxWidth: '780px', marginBottom: '24px' }}>
              No pretending to be an agency, no invented client revenues, and no superficial template gimmicks.
              From studying computer science fundamentals at SNSCE to building predictive disaster advisory tools,
              my focus is clean engineering, dependable performance, and respectful design.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary" style={{ backgroundColor: 'var(--color-terracotta)' }}>
                <span>Read Full About Story</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/projects" className="btn-secondary" style={{ backgroundColor: '#FBF7F0', color: '#30251F' }}>
                <span>Inspect Selected Works</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. MASSIVE INTERACTIVE CLOSING STATEMENT: "Come, let's connect."
          Turns from Black to Red combo on hover as explicitly requested
          ===================================================================== */}
      <section className="closing-connect-section bg-ivory">
        <div className="container">
          <div className="closing-connect-box">
            <span className="editorial-stamp" style={{ marginBottom: '18px' }}>Direct Inquiry</span>

            {/* Horizontal Headline: "Come, let's connect. →" */}
            <div className="connect-heading-horizontal-track">
              <a 
                href="mailto:pranav.m.cst.2024@snsce.ac.in" 
                className="connect-interactive-heading"
                title="Click to email pranav.m.cst.2024@snsce.ac.in"
              >
                <span className="connect-text-word">Come,</span>{' '}
                <span className="connect-text-word">let's</span>{' '}
                <span className="connect-text-word">connect.</span>
                <span className="connect-arrow-hover" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Horizontal Details Row: Subtitle + Direct Action Buttons */}
            <div className="connect-horizontal-details-row">
              <p className="connect-subline">
                Open for frontend engineering challenges, research collaborations, and thoughtful web projects.
                Based in Coimbatore, Tamil Nadu.
              </p>

              <div className="connect-buttons-row">
                <MagneticButton as="a" href="mailto:pranav.m.cst.2024@snsce.ac.in" className="btn-primary">
                  <Mail size={16} />
                  <span>pranav.m.cst.2024@snsce.ac.in</span>
                </MagneticButton>

                <MagneticButton as="a" href="https://linkedin.com/in/pranav-m" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. ROUTE CONTINUATION BANNER (Section 3 Requirement)
          ===================================================================== */}
      <section className="next-route-section bg-cream">
        <div className="container next-route-container">
          <div className="next-route-text">
            <span className="editorial-stamp">Next Chapter</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-espresso)', marginTop: '8px' }}>
              Curious by habit, careful by craft.
            </h3>
          </div>

          <Link to="/about" className="btn-primary next-route-btn">
            <span>Next: About</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

    </div>
  );
}
