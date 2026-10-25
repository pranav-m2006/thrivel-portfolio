import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.cert-grid-item', {
        scrollTrigger: {
          trigger: '#certifications-grid',
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const certs = [
    {
      org: 'IBM',
      title: 'Technical Foundations Certification',
      desc: 'Industry-standard technical foundations, computer science systems, and professional developer methodologies.',
      skills: ['Systems Engineering', 'Developer Standards', 'Enterprise Workflows'],
    },
    {
      org: 'Oracle',
      title: 'Developer & Programming Fundamentals',
      desc: 'Structured programming logic, database interfaces, and computational fundamentals.',
      skills: ['Structured SQL', 'Relational Schemas', 'Programming Logic'],
    },
    {
      org: 'NASSCOM',
      title: 'Industry Technology & Skills Standard',
      desc: 'Recognized industry curriculum aligning computer science education with contemporary workforce standards.',
      skills: ['Industry Standards', 'Digital Competency', 'Software Agility'],
    },
    {
      org: 'Great Learning',
      title: 'Web Development & Software Engineering',
      desc: 'Comprehensive training in modern frontend technologies, client-side scripting, and web application design.',
      skills: ['HTML5 / CSS3', 'JavaScript ES6+', 'Web App Architecture'],
    },
    {
      org: 'NLP Workshop',
      title: 'Natural Language Processing Hands-On Workshop',
      desc: 'Practical workshop exploring applied NLP architectures, tokenization, language models, and text analysis.',
      skills: ['Text Tokenization', 'Semantic Embeddings', 'Applied NLP Models'],
    },
    {
      org: 'CSE Department',
      title: 'C / C++ / Python in CSE',
      desc: 'Core language proficiency across systems programming and scripting for algorithmic computing.',
      skills: ['C Memory Dynamics', 'C++ STL', 'Python Scripting'],
    },
    {
      org: 'Academic Symposium',
      title: 'Paper Presentation Certification',
      desc: 'Certificate of merit and participation for technical research presented at college-level symposium.',
      skills: ['Technical Research', 'Paper Presentation', 'Peer Review'],
    },
  ];

  return (
    <div ref={containerRef} className="page-wrapper">
      
      {/* =====================================================================
          1. HERO: Big Bold Black-to-Red Interactive Transition Heading
          ===================================================================== */}
      <PageHeroHeadline
        eyebrow="06 / ACCREDITATIONS & VERIFIED CREDENTIALS"
        blackText="Verified credentials."
        accentText="Zero invented claims."
        arrowHref="#certifications-grid"
        leadParagraph={
          <>
            A documented record of official technical certifications across{' '}
            <strong style={{ color: '#1A1310' }}>systems engineering</strong>,{' '}
            <strong style={{ color: '#C63D2F' }}>industry developer standards</strong>,{' '}
            <strong style={{ color: '#1A1310' }}>modern web application design</strong>, and{' '}
            <strong style={{ color: '#C63D2F' }}>applied natural language processing</strong>.
          </>
        }
        tags={[
          'IBM Certified',
          'Oracle Developer',
          'NASSCOM Standard',
          'Great Learning',
          'Applied NLP Workshop',
          'Academic Symposium',
        ]}
      />

      {/* =====================================================================
          2. CERTIFICATIONS GRID
          ===================================================================== */}
      <section id="certifications-grid" className="page-section bg-ivory relative">
        <div className="watermark-numeral" aria-hidden="true">06</div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {certs.map((c, idx) => (
              <div key={idx} className="cert-grid-item editorial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem', fontWeight: 700, color: '#C63D2F' }}>
                      {c.org}
                    </span>
                    <span className="meta-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem' }}>
                      <ShieldCheck size={13} color="#C63D2F" /> Verified
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-espresso)', fontWeight: 750 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-warm-grey)', lineHeight: '1.6', marginBottom: '16px' }}>
                    {c.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {c.skills.map((s, sIdx) => (
                      <span key={sIdx} className="meta-tag" style={{ fontSize: '0.7rem' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--color-sand-border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-warm-grey)' }}>
                    Accredited Proof
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#C63D2F', fontWeight: 600 }}>
                    Documented ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Marquee Ticker */}
      <LuxuryMarquee theme="dark" items={['VERIFIED ACCREDITATIONS', 'IBM TECHNICAL FOUNDATIONS', 'ORACLE STANDARDS', 'APPLIED NLP WORKSHOP']} />

      {/* =====================================================================
          3. CLOSING CTA (Deep Espresso)
          ===================================================================== */}
      <section className="page-section bg-espresso" style={{ textAlign: 'center', padding: '100px 0' }}>
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
