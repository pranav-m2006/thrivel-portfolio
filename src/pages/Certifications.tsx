import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';
import DarkExplanationSection from '../components/DarkExplanationSection';

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
        duration: 0.6,
        stagger: 0.07,
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
      id: 'IBM-TF-2024',
    },
    {
      org: 'Oracle',
      title: 'Developer & Programming Fundamentals',
      desc: 'Structured programming logic, database interfaces, and computational fundamentals.',
      skills: ['Structured SQL', 'Relational Schemas', 'Programming Logic'],
      id: 'ORA-PF-2024',
    },
    {
      org: 'NASSCOM',
      title: 'Industry Technology & Skills Standard',
      desc: 'Recognized industry curriculum aligning computer science education with contemporary workforce standards.',
      skills: ['Industry Standards', 'Digital Competency', 'Software Agility'],
      id: 'NAS-IT-2024',
    },
    {
      org: 'Great Learning',
      title: 'Web Development & Software Engineering',
      desc: 'Comprehensive training in modern frontend technologies, client-side scripting, and web application design.',
      skills: ['HTML5 / CSS3', 'JavaScript ES6+', 'Web App Architecture'],
      id: 'GL-WEB-2024',
    },
    {
      org: 'NLP Workshop',
      title: 'Natural Language Processing Hands-On Workshop',
      desc: 'Practical workshop exploring applied NLP architectures, tokenization, language models, and text analysis.',
      skills: ['Text Tokenization', 'Semantic Embeddings', 'Applied NLP Models'],
      id: 'NLP-WS-2024',
    },
    {
      org: 'CSE Department',
      title: 'C / C++ / Python in CSE',
      desc: 'Core language proficiency across systems programming and scripting for algorithmic computing.',
      skills: ['C Memory Dynamics', 'C++ STL', 'Python Scripting'],
      id: 'CSE-SYS-2024',
    },
    {
      org: 'Academic Symposium',
      title: 'Technical Paper Presentation',
      desc: 'Certificate of merit and participation for peer-reviewed technical research presented at college-level symposium.',
      skills: ['Technical Research', 'Paper Presentation', 'Peer Review'],
      id: 'SYM-PR-2024',
    },
    {
      org: 'Smart India Hackathon',
      title: 'SIH 2025 National Finalist Credential',
      desc: 'National level finalist certificate for developing innovative tech solutions solving real-world challenges.',
      skills: ['National Finalist', 'Team Leadership', 'Applied AI Prototyping'],
      id: 'SIH-NAT-2025',
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
            <strong>systems engineering</strong>,{' '}
            <strong>industry developer standards</strong>,{' '}
            <strong>modern web application design</strong>, and{' '}
            <strong>applied natural language processing</strong>.
            Hover over to inspect verification details.
          </>
        }
        tags={[
          'IBM Certified',
          'Oracle Developer',
          'NASSCOM Standard',
          'Great Learning',
          'Applied NLP Workshop',
          'SIH 2025 Finalist',
        ]}
      />

      {/* Continuous Moving Horizontal Bar */}
      <LuxuryMarquee
        theme="dark"
        items={[
          'VERIFIED ACCREDITATIONS',
          'IBM TECHNICAL FOUNDATIONS',
          'ORACLE STANDARDS',
          'APPLIED NLP WORKSHOP',
          'SIH 2025 FINALIST',
          'NASSCOM BENCHMARK',
          'GREAT LEARNING WEB ARCHITECTURE',
        ]}
      />

      {/* Dark Theme Explanation Section: Continuous Accreditation & Curriculum Standards */}
      <DarkExplanationSection
        badge="ACCREDITATION INTEGRITY & STANDARDS"
        title="The Philosophy of Continuous Learning."
        quote="“Certifications are not decorative trophies. They are milestones of structured curriculum completion and verified technical competency.”"
        leftColumn={{
          title: 'REJECTED ACCREDITATION PRACTICES',
          pillText: 'REJECTED',
          variant: 'blocked',
          items: [
            {
              title: 'Unverified completion badges',
              desc: 'Reject low-effort online certificates issued without authentic identity verification or proctoring.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Passive video watching without labs',
              desc: 'Refuse counting video lectures as skill acquisition without demonstrable code repositories or practical labs.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Superficial multiple-choice guessing',
              desc: 'Reject trivial surface quizzes that do not test debugging, memory tradeoffs, or architectural decisions.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Outdated legacy curricula hoarding',
              desc: 'Refuse retaining obsolete badges without continuous refresh against modern industry standards.',
              icon: <X size={15} strokeWidth={2.8} />,
            },
          ],
        }}
        rightColumn={{
          title: 'VERIFIED INDUSTRY STANDARDS',
          pillText: 'VERIFIED',
          variant: 'verified',
          items: [
            {
              title: 'IBM Technical Foundations',
              desc: 'Industry-standard technical foundations, developer methodologies, and enterprise architectures.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Oracle Programming Fundamentals',
              desc: 'Structured programming logic, relational SQL database schemas, and algorithmic fundamentals.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
            {
              title: 'NASSCOM Industry Technology Standard',
              desc: 'Recognized industry curriculum aligning computer science education with contemporary workforce needs.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
            {
              title: 'Great Learning Web Architecture',
              desc: 'Comprehensive training in modern frontend technologies, client-side scripting, and responsive application design.',
              icon: <Check size={15} strokeWidth={2.8} />,
            },
          ],
        }}
      />

      {/* =====================================================================
          2. BALANCED CERTIFICATIONS GRID: Well-aligned, Anti-Overlap, Defined Typography
          ===================================================================== */}
      <section id="certifications-grid" className="cert-section-container bg-ivory">
        {/* Contained Watermark Numeral with safe padding */}
        <div className="cert-watermark-contained" aria-hidden="true">06</div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="cert-grid-layout">
            {certs.map((c, idx) => (
              <div key={idx} className="cert-grid-item">
                <div>
                  {/* Card Header: Org Badge + Verified Stamp */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <span className="cert-org-badge">
                      {c.org}
                    </span>
                    <span className="meta-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', padding: '3px 8px' }}>
                      <ShieldCheck size={12} color="#C63D2F" /> Verified
                    </span>
                  </div>

                  {/* Card Title & Description with defined typography */}
                  <h3 className="cert-card-title">
                    {c.title}
                  </h3>
                  <p className="cert-card-desc">
                    {c.desc}
                  </p>

                  {/* Skills tags */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {c.skills.map((s, sIdx) => (
                      <span key={sIdx} className="meta-tag" style={{ fontSize: '0.7rem' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Credential ID & Documented Status */}
                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--color-sand-border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--color-warm-grey)' }}>
                    ID: {c.id}
                  </span>
                  <span style={{ fontSize: '0.775rem', color: '#C63D2F', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    Documented ✓
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Luxury Marquee Ticker */}
      <LuxuryMarquee theme="dark" items={['VERIFIED ACCREDITATIONS', 'IBM TECHNICAL FOUNDATIONS', 'ORACLE STANDARDS', 'APPLIED NLP WORKSHOP', 'SIH 2025 FINALIST']} />

      {/* =====================================================================
          3. CLOSING CTA (Deep Espresso) - Generous Padding, No Overlap
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
            <span>View Achievements &amp; Patents</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
