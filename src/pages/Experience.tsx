import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, CheckCircle2, Check, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';
import DarkExplanationSection from '../components/DarkExplanationSection';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.exp-card-item').forEach((card) => {
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
      
      {/* =====================================================================
          1. HERO: Big Bold Black-to-Red Interactive Transition Heading
          ===================================================================== */}
      <PageHeroHeadline
        eyebrow="05 / INDUSTRY TRACK RECORD & INTERNSHIPS"
        blackText="Learning by building"
        accentText="production software."
        arrowHref="#experience-timeline"
        leadParagraph={
          <>
            Hands-on internship experience in web development applying{' '}
            <strong>foundational frontend technologies</strong>,{' '}
            <strong>component architecture</strong>, and{' '}
            <strong>collaborative Git code reviews</strong> to real project tasks and usability refinements.
          </>
        }
        tags={[
          'CodSoft Web Intern',
          'InternPe Software Intern',
          'Collaborative Git Reviews',
          'HTML5 / CSS3 / JavaScript',
          'Component Debugging',
        ]}
      />

      {/* Continuous Moving Horizontal Bar */}
      <LuxuryMarquee
        theme="dark"
        items={[
          'INDUSTRY INTERNSHIPS',
          'FRONTEND ARCHITECTURE',
          'GIT & GITHUB COLLABORATION',
          'CODE REVIEW DISCIPLINE',
          'USABILITY REFINEMENT',
          'CONTINUOUS EXECUTION',
          'SNS COLLEGE OF ENGINEERING',
        ]}
      />

      {/* Dark Theme Explanation Section: Workplace Standards & Collaboration Integrity */}
      <DarkExplanationSection
        badge="WORKPLACE STANDARDS & INTEGRITY"
        title="What I Bring to Engineering Teams."
        quote="“Showing up with curiosity, taking full responsibility for assigned tickets, and communicating clearly across pull requests.”"
        leftColumn={{
          title: 'TEAMWORK & COLLABORATIVE BOUNDARIES',
          pillText: 'DISCIPLINE',
          variant: 'blocked',
          items: [
            {
              title: 'Silent assumptions & scope creep',
              desc: 'Refuse guessing requirements silently; ask clarifying questions early to prevent wasted sprint cycles.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Monolithic messy pull requests',
              desc: 'Refuse multi-thousand-line PRs; structure commits with atomic, bisectable, and documented intent.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Skipping cross-browser checks',
              desc: 'Refuse testing on only one viewport; verify across Chrome, Firefox, Safari, and mobile breakpoints.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Defensiveness during review',
              desc: 'Welcome peer feedback, code reviews, and critiques as the fastest mechanism for engineering growth.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
          ],
        }}
        rightColumn={{
          title: 'VERIFIED INTERNSHIP DELIVERABLES',
          pillText: 'VERIFIED',
          variant: 'verified',
          items: [
            {
              title: 'CodSoft Web Development Internship',
              desc: 'Engineered responsive layouts, resolved cross-device bugs, and honed vanilla CSS & JavaScript craft.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
            {
              title: 'InternPe Software Engineering Internship',
              desc: 'Delivered frontend features under agile sprints and maintained collaborative Git version control.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Clean Pull Request Hygiene',
              desc: 'Practiced daily branching, clear PR descriptions, descriptive commit logs, and clean squash-merge workflows.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Academic Research Collaboration',
              desc: 'Co-authored research presented at technical symposium with university faculty peer reviews.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
          ],
        }}
      />

      {/* =====================================================================
          2. TIMELINE SECTION
          ===================================================================== */}
      <section id="experience-timeline" className="page-section bg-ivory">
        <div className="container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Internship 1: CodSoft */}
            <div className="exp-card-item editorial-card relative">
              <div className="watermark-numeral" aria-hidden="true">01</div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', marginBottom: '4px', fontWeight: 600 }}>
                      <Briefcase size={16} /> Web Development Internship
                    </span>
                    <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                      CodSoft
                    </h2>
                  </div>
                  <span className="meta-tag">Web Development Intern</span>
                </div>

                <p style={{ color: 'var(--color-espresso)', fontSize: '1.025rem', lineHeight: '1.65', marginBottom: '18px' }}>
                  Developed and enhanced responsive web interfaces, applying HTML, CSS, and JavaScript to practical development tasks.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)' }}>
                      Collaborated on debugging and refining front-end components to improve usability and code quality.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)' }}>
                      Applied core HTML, CSS, and JavaScript concepts directly to real project deliverables.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['HTML5', 'CSS3', 'JavaScript', 'Component Debugging', 'Usability Refinement'].map((t) => (
                    <span key={t} className="meta-tag">{t}</span>
                  ))}
                </div>

                {/* Two-Column Spec Breakdown */}
                <div className="spec-two-column-card" style={{ boxShadow: 'none', border: '1px solid var(--color-border)' }}>
                  <div className="spec-capabilities-col">
                    <div className="spec-section-header">
                      <span className="spec-glyph-red">▸</span>
                      <span>CORE CAPABILITIES APPLIED</span>
                    </div>
                    <div className="spec-capabilities-grid">
                      {[
                        'Component Debugging & Refinement',
                        'Responsive Layout Engineering',
                        'Cross-Browser Usability Testing',
                        'Semantic HTML5 Markup',
                        'Modular CSS3 Structure',
                        'DOM Performance Optimization',
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
                      <span>SHIPPED WORK & OUTCOMES</span>
                    </div>
                    <div className="spec-deliverables-grid">
                      {[
                        'Refined Responsive Web Interfaces',
                        'Verified Cross-Device Layouts',
                        'Clean Component Documentation',
                        'Interactive Front-End Features',
                        'Collaborative Code Review Sprints',
                        'Production Bug Fixes',
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

            {/* Internship 2: InternPe */}
            <div className="exp-card-item editorial-card relative">
              <div className="watermark-numeral" aria-hidden="true">02</div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', marginBottom: '4px', fontWeight: 600 }}>
                      <Briefcase size={16} /> Web Development Internship
                    </span>
                    <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                      InternPe
                    </h2>
                  </div>
                  <span className="meta-tag">Web Development Intern</span>
                </div>

                <p style={{ color: 'var(--color-espresso)', fontSize: '1.025rem', lineHeight: '1.65', marginBottom: '18px' }}>
                  Built frontend features for web projects while developing practical JavaScript and Git version-control experience.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)' }}>
                      Engineered front-end features for assigned web project tasks, strengthening hands-on JavaScript mastery.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)' }}>
                      Collaborated on debugging and refining front-end components to improve usability and code quality.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-warm-grey)' }}>
                      Maintained clean version control and collaboration workflows using Git and GitHub.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['JavaScript', 'Git', 'GitHub', 'Frontend Features', 'Version Control'].map((t) => (
                    <span key={t} className="meta-tag">{t}</span>
                  ))}
                </div>

                {/* Two-Column Spec Breakdown */}
                <div className="spec-two-column-card" style={{ boxShadow: 'none', border: '1px solid var(--color-border)' }}>
                  <div className="spec-capabilities-col">
                    <div className="spec-section-header">
                      <span className="spec-glyph-red">▸</span>
                      <span>CORE CAPABILITIES APPLIED</span>
                    </div>
                    <div className="spec-capabilities-grid">
                      {[
                        'Feature Development in JavaScript',
                        'Version Control with Git',
                        'Collaborative Pull Requests',
                        'Interactive DOM Manipulation',
                        'Front-End UI Implementation',
                        'Agile Team Task Decomposition',
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
                      <span>SHIPPED WORK & OUTCOMES</span>
                    </div>
                    <div className="spec-deliverables-grid">
                      {[
                        'Shipped Front-End Web Features',
                        'Clean Semantic Commit History',
                        'Resolved UI Edge Cases',
                        'Responsive Layout Validations',
                        'Team Code Reviews',
                        'Functional Project Milestones',
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

          </div>
        </div>
      </section>

      {/* Luxury Marquee Ticker */}
      <LuxuryMarquee theme="dark" items={['INDUSTRY INTERNSHIPS', 'FRONTEND ARCHITECTURE', 'GIT & GITHUB COLLABORATION', 'CODE REVIEW DISCIPLINE']} />

      {/* =====================================================================
          3. EDUCATION & EXTRA-CURRICULAR CONTEXT
          ===================================================================== */}
      <section className="page-section bg-clay" style={{ padding: '80px 0' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="editorial-eyebrow" style={{ justifyContent: 'center', color: 'var(--color-sunlit-sand)' }}>
              Academic Foundation
            </div>
            <h2 className="editorial-h2" style={{ color: 'var(--color-warm-ivory)' }}>
              Where the engineering habits began.
            </h2>
          </div>

          <div className="editorial-card" style={{ background: '#FFFFFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
              <div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                  <GraduationCap size={16} /> Bachelor of Engineering
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                  SNS College of Engineering
                </h3>
              </div>
              <span className="meta-tag">Sept 2024 – 2028</span>
            </div>

            <p style={{ color: 'var(--color-espresso)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '12px' }}>
              B.E. Computer Science and Technology · Current CGPA: <strong>8.00 / 10</strong>
            </p>
            <p style={{ color: 'var(--color-warm-grey)', fontSize: '0.9rem', lineHeight: '1.65' }}>
              Coimbatore, Tamil Nadu. Active in technical symposiums, hackathon teams (SIH '25 National Finalist), and departmental AI workshops.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CLOSING CTA
          ===================================================================== */}
      <section className="page-section bg-espresso" style={{ textAlign: 'center', padding: '90px 0' }}>
        <div className="container-narrow">
          <div className="editorial-eyebrow" style={{ justifyContent: 'center', color: 'var(--color-rusty-orange)' }}>
            Next Chapter
          </div>
          <h2 className="editorial-h2" style={{ color: 'var(--color-warm-ivory)' }}>
            Recognitions, patents, and hackathons.
          </h2>
          <p className="editorial-lead" style={{ margin: '0 auto 36px', color: 'var(--color-sunlit-sand)' }}>
            Explore verified milestones from Smart India Hackathon to registered technological patents.
          </p>
          <Link to="/achievements" className="btn-primary">
            <span>View Achievements</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
