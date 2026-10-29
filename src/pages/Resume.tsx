import { Link } from 'react-router-dom';
import { Printer, ArrowLeft } from 'lucide-react';
import PageHeroHeadline from '../components/PageHeroHeadline';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-wrapper resume-page-container">
      {/* 1. HERO: Big Bold Black-to-Red Interactive Transition Heading */}
      <PageHeroHeadline
        eyebrow="09 / CURRICULUM VITAE &amp; CREDENTIALS"
        blackText="Documented record."
        accentText="Zero invented claims."
        arrowHref="#resume-document"
        leadParagraph={
          <>
            Official curriculum vitae of <strong>Pranav M</strong>, undergraduate computer science engineer
            at <strong>SNS College of Engineering</strong>. Verified academic standing, registered product patents,
            software internships, and production system achievements.
          </>
        }
        tags={[
          'B.E. CST (2024–2028)',
          'CGPA 8.00 / 10',
          '2 Certified Patents',
          'SIH 2025 Finalist',
          '150+ LeetCode (100-Day Streak)',
        ]}
      />

      {/* 2. RESUME ACTIONS & PRINT BAR */}
      <section id="resume-document" className="page-section bg-ivory" style={{ padding: '40px 0 100px' }}>
        <div className="container-narrow">
          
          {/* Action Toolbar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/" className="btn-secondary" style={{ fontSize: '0.825rem' }}>
              <ArrowLeft size={15} />
              <span>Back to Portfolio</span>
            </Link>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={handlePrint}
                className="btn-primary"
                style={{ fontSize: '0.825rem', gap: '6px' }}
              >
                <Printer size={15} />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>

          {/* Clean Editorial Resume Paper Sheet */}
          <article className="editorial-card" style={{ background: '#FFFFFF', padding: 'clamp(28px, 5vw, 56px)', border: '1px solid var(--color-border)', borderRadius: '12px', boxShadow: '0 20px 48px rgba(48, 37, 31, 0.08)' }}>
            
            {/* Resume Header */}
            <header style={{ borderBottom: '2px solid var(--color-espresso)', paddingBottom: '24px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: '#1A1310', fontWeight: 850, margin: '0 0 6px' }}>
                    PRANAV M
                  </h1>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: '#C63D2F', fontWeight: 700, margin: 0, letterSpacing: '0.04em' }}>
                    COMPUTER SCIENCE &amp; TECHNOLOGY UNDERGRADUATE · FRONTEND &amp; APPLIED AI
                  </p>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-espresso)', display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'right' }}>
                  <span>Coimbatore, Tamil Nadu, India</span>
                  <a href="mailto:pranav.m.cst.2024@snsce.ac.in" style={{ color: '#C63D2F', textDecoration: 'underline' }}>
                    pranav.m.cst.2024@snsce.ac.in
                  </a>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '4px' }}>
                    <a href="https://github.com/pranav-m2006" target="_blank" rel="noopener noreferrer" style={{ color: '#1A1310', fontWeight: 700 }}>
                      github.com/pranav-m2006
                    </a>
                    <span>·</span>
                    <a href="https://www.linkedin.com/in/pranav-m-23153a32b/" target="_blank" rel="noopener noreferrer" style={{ color: '#1A1310', fontWeight: 700 }}>
                      linkedin/pranav-m
                    </a>
                  </div>
                </div>
              </div>
            </header>

            {/* Section: Academic Education */}
            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#C63D2F', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', marginBottom: '14px' }}>
                Academic Education
              </h2>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 750, color: 'var(--color-espresso)', margin: 0 }}>
                    SNS College of Engineering, Coimbatore
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-warm-grey)' }}>
                    Sept 2024 – May 2028
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '2px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-espresso)' }}>
                    Bachelor of Engineering in Computer Science and Technology
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: '#C63D2F' }}>
                    CGPA: 8.00 / 10.0
                  </span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 750, color: 'var(--color-espresso)', margin: 0 }}>
                    Presentation Convent Matriculation Hr. Sec. School
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-warm-grey)' }}>
                    Completed 2024
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '2px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-espresso)' }}>
                    Higher Secondary Certificate (HSC) &amp; SSLC
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-espresso)' }}>
                    HSC: 73.0% · SSLC: 81.6%
                  </span>
                </div>
              </div>
            </section>

            {/* Section: Technical Proficiencies */}
            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#C63D2F', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', marginBottom: '14px' }}>
                Technical Toolkit
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', fontSize: '0.885rem' }}>
                <div>
                  <strong style={{ color: 'var(--color-espresso)', display: 'block', marginBottom: '2px' }}>Core Languages:</strong>
                  <span style={{ color: 'var(--color-warm-grey)' }}>Java, C++, JavaScript (ES6+), C, Python</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-espresso)', display: 'block', marginBottom: '2px' }}>Frontend Systems:</strong>
                  <span style={{ color: 'var(--color-warm-grey)' }}>HTML5, Modern CSS3, React.js, Vite, Responsive Layouts</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-espresso)', display: 'block', marginBottom: '2px' }}>Applied AI &amp; ML:</strong>
                  <span style={{ color: 'var(--color-warm-grey)' }}>Supervised Classification, Scikit-Learn, Pandas, NLP Basics</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-espresso)', display: 'block', marginBottom: '2px' }}>Developer Tools:</strong>
                  <span style={{ color: 'var(--color-warm-grey)' }}>Git, GitHub, VS Code, Chrome DevTools, LocalStorage</span>
                </div>
              </div>
            </section>

            {/* Section: Software Internships */}
            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#C63D2F', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', marginBottom: '14px' }}>
                Software Engineering Internships
              </h2>
              
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 750, color: 'var(--color-espresso)', margin: 0 }}>
                    Web Development Intern — CodSoft
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-warm-grey)' }}>
                    Remote · Internship
                  </span>
                </div>
                <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: 'var(--color-warm-grey)', fontSize: '0.885rem', lineHeight: 1.6 }}>
                  <li>Developed responsive web interfaces with semantic HTML5, CSS3, and JavaScript across multiple viewport sizes.</li>
                  <li>Diagnosed and debugged front-end component state and layout inconsistencies, reducing rendering glitches.</li>
                  <li>Adhered to structured Git commit hygiene and collaborative branch workflows.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 750, color: 'var(--color-espresso)', margin: 0 }}>
                    Software Engineering Intern — InternPe
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-warm-grey)' }}>
                    Remote · Internship
                  </span>
                </div>
                <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: 'var(--color-warm-grey)', fontSize: '0.885rem', lineHeight: 1.6 }}>
                  <li>Implemented client-side features, DOM manipulation routines, and dynamic interactive user inputs using JavaScript.</li>
                  <li>Contributed clean code documentation and participated in sprint task reviews.</li>
                </ul>
              </div>
            </section>

            {/* Section: Selected Production Projects */}
            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#C63D2F', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', marginBottom: '14px' }}>
                Selected Production Projects
              </h2>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '1.025rem', fontWeight: 750, color: 'var(--color-espresso)', margin: 0 }}>
                    Disaster Management System (AI/ML Advisory &amp; Live Incident UI)
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#C63D2F' }}>
                    Python · Scikit-Learn · React.js
                  </span>
                </div>
                <p style={{ margin: '4px 0 0', color: 'var(--color-warm-grey)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Trained supervised classification models predicting severe storm threat urgency with 91.4% accuracy. Built responsive incident dashboard delivering real-time likelihood scores and automated precaution protocols.
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '1.025rem', fontWeight: 750, color: 'var(--color-espresso)', margin: 0 }}>
                    Learning Zone (Computer Science Study Hub &amp; AI Tutor)
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#C63D2F' }}>
                    React.js · CSS Modules · AI Tutor
                  </span>
                </div>
                <p style={{ margin: '4px 0 0', color: 'var(--color-warm-grey)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Architected interactive educational web app with topic roadmaps, coding quiz engine with syntax highlighting, and an embedded conversational AI assistant for contextual algorithmic clarification.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '1.025rem', fontWeight: 750, color: 'var(--color-espresso)', margin: 0 }}>
                    Finance Tracker (Real-Time Expense Analytics &amp; Velocity Ledger)
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#C63D2F' }}>
                    React.js · SVG Charts · LocalStorage
                  </span>
                </div>
                <p style={{ margin: '4px 0 0', color: 'var(--color-warm-grey)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Engineered personal finance tracker with tabular-numeric ledger, category spend velocity algorithms, interactive SVG charts, and private on-device CSV export capability.
                </p>
              </div>
            </section>

            {/* Section: Patents, Hackathons & Honors */}
            <section>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#C63D2F', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', marginBottom: '14px' }}>
                Intellectual Property &amp; Key Honors
              </h2>
              <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-warm-grey)', fontSize: '0.885rem', lineHeight: 1.7 }}>
                <li>
                  <strong style={{ color: 'var(--color-espresso)' }}>2 Registered Product Patents:</strong> Officially certified and registered co-inventor on two technical hardware/software patents.
                </li>
                <li>
                  <strong style={{ color: 'var(--color-espresso)' }}>Smart India Hackathon (SIH 2025):</strong> National-level finalist representing SNS College of Engineering in competitive sprint development.
                </li>
                <li>
                  <strong style={{ color: 'var(--color-espresso)' }}>Competitive Algorithmic Discipline:</strong> 150+ problems solved on LeetCode with an active 100-day consecutive streak.
                </li>
                <li>
                  <strong style={{ color: 'var(--color-espresso)' }}>Technical Certifications:</strong> IBM Technical Foundations, Oracle Programming Fundamentals, NASSCOM Technology Standard, Great Learning Web Dev, Applied NLP Workshop.
                </li>
              </ul>
            </section>

          </article>

        </div>
      </section>
    </div>
  );
}
