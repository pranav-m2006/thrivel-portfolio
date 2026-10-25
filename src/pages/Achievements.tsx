import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Award, Flame, FileText, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroHeadline from '../components/PageHeroHeadline';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.achieve-card-item').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 35,
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
      {/* 1. HERO: Big Bold Black-to-Red Interactive Transition Heading */}
      <PageHeroHeadline
        eyebrow="07 / MILESTONES & VALIDATION"
        blackText="Progress is built"
        accentText="one step at a time."
        arrowHref="#achievements-list"
        leadParagraph={
          <>
            A documented record of national hackathon participation as a{' '}
            <strong>Smart India Hackathon 2025 finalist</strong>,{' '}
            <strong>2 certified product patents</strong> officially registered,{' '}
            <strong>150+ LeetCode problems</strong> with an active 100-day streak, and{' '}
            <strong>academic symposium research presentation</strong>.
          </>
        }
        tags={[
          'SIH 2025 Finalist',
          '2 Certified Patents',
          '150+ LeetCode (100-Day Streak)',
          'Academic Symposium Paper',
          'SNSCE · Coimbatore',
        ]}
      />

      {/* 2. ACHIEVEMENTS LIST */}
      <section id="achievements-list" className="page-section bg-ivory">
        <div className="container-narrow">
          
          <div style={{ marginBottom: '48px' }}>
            <div className="editorial-eyebrow">Consistency & Rigor</div>
            <h2 className="editorial-h2">Learning beyond the classroom.</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Achievement 1: SIH 2025 */}
            <div className="achieve-card-item editorial-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Trophy size={20} color="var(--color-terracotta)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', textTransform: 'uppercase', fontWeight: 600 }}>
                    National Hackathon
                  </span>
                </div>
                <span className="meta-tag">National Finalist</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-espresso)' }}>
                Smart India Hackathon (SIH) 2025
              </h3>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Participated at the national level in SIH 2025, tackling complex problem statements under sprint conditions and gaining direct exposure to real-world software engineering and collaborative problem solving.
              </p>
            </div>

            {/* Achievement 2: Product Patents */}
            <div className="achieve-card-item editorial-card" style={{ background: 'var(--color-beach-cream)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={20} color="var(--color-terracotta)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Intellectual Property
                  </span>
                </div>
                <span className="meta-tag">Certified</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-espresso)' }}>
                2 Certified Product Patents
              </h3>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Co-invented and registered 2 official product patents based on innovative engineering designs and applied software-hardware solutions.
              </p>
            </div>

            {/* Achievement 3: LeetCode Consistency */}
            <div className="achieve-card-item editorial-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Flame size={20} color="var(--color-rusty-orange)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-rusty-orange)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Algorithmic Discipline
                  </span>
                </div>
                <span className="meta-tag">100-Day Streak</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-espresso)' }}>
                LeetCode: 150+ Problems Solved
              </h3>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Maintained an unbroken 100-day daily problem-solving streak on LeetCode, tackling data structures, algorithmic efficiency, dynamic programming, and search algorithms in Java and C++.
              </p>
            </div>

            {/* Achievement 4: Other Hackathons */}
            <div className="achieve-card-item editorial-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Zap size={20} color="var(--color-terracotta)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Rapid Prototyping
                  </span>
                </div>
                <span className="meta-tag">Participant</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-espresso)' }}>
                GPTathon & CodeSprint
              </h3>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Active participation in competitive development sprints, exploring AI API integrations, frontend prototyping, and rapid team collaboration.
              </p>
            </div>

            {/* Achievement 5: Paper Presentation */}
            <div className="achieve-card-item editorial-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FileText size={20} color="var(--color-terracotta)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Research Dissemination
                  </span>
                </div>
                <span className="meta-tag">Symposium</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-espresso)' }}>
                Technical Paper Presentation
              </h3>
              <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Presented technical research at a college-level academic event, detailing software architectures and applied computing paradigms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5. VERIFIED CREDENTIALS BRIDGE (Fills the space above the View Certifications CTA) */}
      <section className="bg-ivory" style={{ padding: '0 0 60px' }}>
        <div className="container">
          <div style={{ background: '#FFFFFF', border: '1px solid var(--color-sand-border)', borderRadius: '12px', padding: '36px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="editorial-stamp" style={{ marginBottom: '8px' }}>Continuous Accreditation</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', color: '#1A1310', marginTop: '6px', marginBottom: '8px' }}>
                Accredited Coursework & Technical Certifications
              </h3>
              <p style={{ color: 'var(--color-warm-grey)', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                Formal recognition from IBM, Oracle, NASSCOM, and academic symposiums validating core competencies in modern engineering standards and applied machine learning.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="meta-tag">IBM Verified</span>
              <span className="meta-tag">Oracle Foundation</span>
              <span className="meta-tag">NASSCOM Standard</span>
              <span className="meta-tag">NLP Workshop</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA (Muted Clay) */}
      <section className="page-section bg-clay" style={{ textAlign: 'center', padding: '70px 0 80px', marginTop: 0, borderTop: '1px solid var(--color-sand-border)' }}>
        <div className="container-narrow">
          <div className="editorial-eyebrow" style={{ justifyContent: 'center', color: 'var(--color-sunlit-sand)' }}>
            Credentials
          </div>
          <h2 className="editorial-h2" style={{ color: 'var(--color-warm-ivory)' }}>
            Review verified industry certifications.
          </h2>
          <p className="editorial-lead" style={{ margin: '0 auto 36px', color: 'var(--color-warm-ivory)', opacity: 0.9 }}>
            Explore verified training from IBM, Oracle, NASSCOM, Great Learning, and specialized NLP workshops.
          </p>
          <Link to="/certifications" className="btn-primary" style={{ background: 'var(--color-espresso)' }}>
            <span>View Certifications</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
