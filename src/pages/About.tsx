import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Code2, BrainCircuit, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PersonalPortrait from '../components/PersonalPortrait';
import PageHeroHeadline from '../components/PageHeroHeadline';
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
          1. HERO: Big Bold Black-to-Red Interactive Transition Heading
          ===================================================================== */}
      <PageHeroHeadline
        eyebrow="02 / ORIGIN & PHILOSOPHY"
        blackText="Curiosity is where"
        accentText="engineering begins."
        arrowHref="#biography"
        leadParagraph={
          <>
            I am a <strong style={{ color: '#1A1310' }}>Computer Science &amp; Technology undergraduate</strong> at{' '}
            <strong style={{ color: '#C63D2F' }}>SNS College of Engineering</strong> in Coimbatore, dedicated to
            building calm frontend interfaces and exploring <strong style={{ color: '#C63D2F' }}>applied artificial intelligence</strong>{' '}
            with zero superficial claims.
          </>
        }
        tags={[
          'SNSCE · Coimbatore (2024–2028)',
          'B.E. Computer Science',
          'CGPA 8.00 / 10',
          'Frontend & Applied AI',
          '2 Registered Patents',
        ]}
      />

      {/* =====================================================================
          2. PROMINENT PORTRAIT & BIOGRAPHY (Section 6)
          ===================================================================== */}
      <section id="biography" className="page-section bg-ivory" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'center' }}>
            
            {/* Prominent Personal Portrait Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PersonalPortrait
                size="large"
                caption="Pranav M — Software Engineer (Coimbatore, India)"
              />
            </div>

            {/* Editorial Biography */}
            <div>
              <div className="editorial-eyebrow">Academic &amp; Technical Context</div>
              <h2 className="editorial-h2">Build. Understand. Improve.</h2>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.025rem' }}>
                Currently in my undergraduate studies at <strong>SNS College of Engineering</strong> in Coimbatore (Sept 2024 – 2028), I maintain a <strong>8.00 / 10 CGPA</strong> while directing extra-curricular hours toward competitive programming, hackathons, and software internships.
              </p>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.025rem' }}>
                My education began at Presentation Convent Matriculation Hr. Sec. School (HSC 73%, SSLC 81.6%), where a curiosity for mathematical logic evolved into hands-on development with Java, C++, JavaScript, and React.
              </p>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.8', fontSize: '1.025rem' }}>
                I believe that frontend architecture is the sensory interface of modern computing: it is where complex backend pipelines and predictive models become actionable tools for human beings.
              </p>

              <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
                <Link to="/experience" className="btn-secondary">
                  <span>View Internships</span>
                </Link>
                <Link to="/achievements" className="btn-primary">
                  <span>View Patents &amp; SIH '25</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          3. DISCIPLINE & ORIGIN (Athletics / Software / Responsibility)
          Inspired by the reference video's signature section
          ===================================================================== */}
      <DisciplineOrigin />

      {/* =====================================================================
          4. LUXURY CONTINUOUS MARQUEE TICKER
          ===================================================================== */}
      <LuxuryMarquee theme="dark" />

      {/* =====================================================================
          5. CODE OF CRAFT: THINGS I REFUSE TO SHIP VS GUARANTEED SHIPPED
          Directly inspired by the reference video's high-contrast comparison
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
