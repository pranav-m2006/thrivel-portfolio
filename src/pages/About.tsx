import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Code2, BrainCircuit, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArchFrame from '../components/ArchFrame';
import DisciplineOrigin from '../components/DisciplineOrigin';
import CraftPrinciples from '../components/CraftPrinciples';
import LuxuryMarquee from '../components/LuxuryMarquee';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // 1. Smooth entrance animation for About hero photograph & text
      gsap.from('.about-hero-photo-col', {
        x: -35,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.about-hero-text-col', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
      });

      // 2. ScrollTrigger reveals for timeline blocks
      gsap.utils.toArray<HTMLElement>('.timeline-block').forEach((block) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
          },
          x: -25,
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="page-wrapper">
      
      {/* =====================================================================
          1. PROFESSIONAL ABOUT HERO LAYOUT WITH PROFILE PHOTOGRAPH
          Exclusively featured here on the About page.
          ===================================================================== */}
      <section className="about-hero-section bg-ivory" style={{ padding: '60px 0 80px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'center' }}>
            
            {/* Left Column: Authentic Profile Photograph in Architectural Arch Frame */}
            <div className="about-hero-photo-col" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                <div style={{ position: 'absolute', top: '-14px', right: '-10px', zIndex: 10, background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '999px', padding: '6px 14px', boxShadow: '0 4px 16px rgba(48, 37, 31, 0.08)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-espresso)' }}>
                  <span>🔥</span>
                  <span>100-Day Streak · 150+ LeetCode</span>
                </div>
                <div style={{ position: 'absolute', bottom: '50px', left: '-12px', zIndex: 10, background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '999px', padding: '6px 14px', boxShadow: '0 4px 16px rgba(48, 37, 31, 0.08)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-espresso)' }}>
                  <span>🏆</span>
                  <span>SIH '25 Finalist · 2 Patents</span>
                </div>
                <ArchFrame
                  imageSrc="/images/pranav.jpg"
                  altText="Pranav M — Frontend Developer & AI/ML Practitioner sitting with laptop"
                  caption="Pranav M — Student & Developer"
                  badgeText="SNSCE · Coimbatore"
                  enableParallax={true}
                />
              </div>
            </div>

            {/* Right Column: Editorial Biography, Education & Background */}
            <div className="about-hero-text-col">
              <div className="editorial-eyebrow" style={{ color: 'var(--color-terracotta)' }}>
                02 / ABOUT PRANAV M · B.E. COMPUTER SCIENCE &amp; TECHNOLOGY
              </div>

              <h1 className="editorial-h1" style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)', lineHeight: 1.15, marginBottom: '20px' }}>
                Curious by habit, <br />
                <span style={{ color: 'var(--color-terracotta)' }}>careful by craft.</span>
              </h1>

              <p style={{ color: 'var(--color-espresso)', fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '18px', fontWeight: 500 }}>
                I am an undergraduate in Computer Science &amp; Technology at <strong>SNS College of Engineering</strong> in Coimbatore (2024–2028),
                maintaining a <strong>8.00 / 10 CGPA</strong>. I pair clean frontend architecture with practical machine learning where it genuinely serves a purpose.
              </p>

              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.75', marginBottom: '24px', fontSize: '0.98rem' }}>
                My education began at Presentation Convent Matriculation Hr. Sec. School (SSLC 81.6%, HSC 73%), where a love for algorithmic logic evolved into hands-on development with HTML5, CSS3, JavaScript, React.js, Java, and Python.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <span className="meta-tag">SNSCE (2024–2028)</span>
                <span className="meta-tag">CGPA 8.00 / 10</span>
                <span className="meta-tag">CodSoft &amp; InternPe Intern</span>
                <span className="meta-tag">SIH 2025 National Finalist</span>
                <span className="meta-tag">2 Registered Patents</span>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/experience" className="btn-primary">
                  <span>View Internships &amp; Journey</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/projects" className="btn-secondary">
                  <span>Inspect Selected Works</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          2. DETAILED ACADEMIC & ENGINEERING BIOGRAPHY
          ===================================================================== */}
      <section id="biography" className="page-section bg-cream" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="editorial-eyebrow">Academic &amp; Technical Context</div>
            <h2 className="editorial-h2" style={{ marginBottom: '24px' }}>Build. Understand. Improve.</h2>
            
            <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.025rem' }}>
              Currently in my undergraduate studies at <strong>SNS College of Engineering</strong> in Coimbatore (Sept 2024 – 2028), I direct extra-curricular hours toward competitive programming, hackathons, and software internships.
            </p>
            <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.025rem' }}>
              I believe that frontend architecture is the sensory interface of modern computing: it is where complex backend pipelines and predictive models become actionable tools for human beings.
            </p>
            <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.8', fontSize: '1.025rem' }}>
              Whether fine-tuning component lifecycles in React, configuring zero-bloat modern CSS tokens, or training predictive neural models for disaster response, I prioritize restraint, clarity, and dependable performance.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. DISCIPLINE & ORIGIN (Athletics / Software / Responsibility)
          ===================================================================== */}
      <DisciplineOrigin />

      {/* =====================================================================
          4. LUXURY CONTINUOUS MARQUEE TICKER
          ===================================================================== */}
      <LuxuryMarquee theme="dark" />

      {/* =====================================================================
          5. CODE OF CRAFT: THINGS I REFUSE TO SHIP VS GUARANTEED SHIPPED
          ===================================================================== */}
      <CraftPrinciples />

      {/* =====================================================================
          6. VISUAL LEARNING TIMELINE (Evolution)
          ===================================================================== */}
      <section className="page-section bg-clay" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="editorial-eyebrow" style={{ justifyContent: 'center', color: 'var(--color-sunlit-sand)' }}>
              Evolution
            </div>
            <h2 className="editorial-h2" style={{ color: 'var(--color-warm-ivory)' }}>
              Learning becomes valuable when applied.
            </h2>
            <p className="editorial-lead" style={{ margin: '0 auto', maxWidth: '640px', color: 'var(--color-warm-ivory)', opacity: 0.9 }}>
              A disciplined progression from foundational mathematics and systems programming to full-stack interfaces and applied prediction.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            
            {/* Step 1 */}
            <div className="timeline-block editorial-card" style={{ background: '#FFFFFF', color: 'var(--color-espresso)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                  <GraduationCap size={16} /> Phase 01 — Foundations
                </span>
                <span className="meta-tag">2024 – Present</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-espresso)' }}>
                B.E. Computer Science &amp; Technology at SNSCE
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-warm-grey)', lineHeight: '1.65' }}>
                Mastering core computer science disciplines: object-oriented programming (Java, C++), algorithms, discrete structures, and database principles with an 8.00 / 10 CGPA.
              </p>
            </div>

            {/* Step 2 */}
            <div className="timeline-block editorial-card" style={{ background: '#FFFFFF', color: 'var(--color-espresso)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                  <Code2 size={16} /> Phase 02 — Practical Interface Engineering
                </span>
                <span className="meta-tag">Internships</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-espresso)' }}>
                Web Internships at CodSoft &amp; InternPe
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-warm-grey)', lineHeight: '1.65' }}>
                Applied core HTML5, responsive CSS3, and JavaScript across live development tasks. Collaborated on component debugging, usability refinement, and version control with Git.
              </p>
            </div>

            {/* Step 3 */}
            <div className="timeline-block editorial-card" style={{ background: '#FFFFFF', color: 'var(--color-espresso)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                  <BrainCircuit size={16} /> Phase 03 — Applied AI/ML &amp; National Validation
                </span>
                <span className="meta-tag">SIH 2025 &amp; Patents</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-espresso)' }}>
                Disaster Management AI &amp; Product Patents
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-warm-grey)', lineHeight: '1.65' }}>
                Competed in Smart India Hackathon (SIH 2025) at the national level, co-invented 2 certified product patents, and authored an AI weather-prediction disaster mitigation system.
              </p>
            </div>

            {/* Step 4 */}
            <div className="timeline-block editorial-card" style={{ background: '#FFFFFF', color: 'var(--color-espresso)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                  <Sparkles size={16} /> Phase 04 — Algorithmic Discipline
                </span>
                <span className="meta-tag">100-Day Streak</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-espresso)' }}>
                150+ LeetCode Solved &amp; German Language
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-warm-grey)', lineHeight: '1.65' }}>
                Maintained a consecutive 100-day LeetCode streak in Java and C++, while acquiring beginner German language proficiency to broaden international communication.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          7. CLOSING STATEMENT (Deep Espresso Section)
          ===================================================================== */}
      <section className="page-section bg-espresso" style={{ textAlign: 'center', padding: '100px 0' }}>
        <div className="container-narrow">
          <div className="editorial-eyebrow" style={{ justifyContent: 'center', color: 'var(--color-rusty-orange)' }}>
            Perspective
          </div>
          <h2 className="editorial-h2" style={{ color: 'var(--color-warm-ivory)' }}>
            Small iterations. Better outcomes.
          </h2>
          <p className="editorial-lead" style={{ margin: '0 auto 36px', color: 'var(--color-sunlit-sand)' }}>
            Whether refactoring a subtle component animation or training a predictive model, consistent care produces reliable software.
          </p>
          <Link to="/projects" className="btn-primary">
            <span>Explore Selected Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
