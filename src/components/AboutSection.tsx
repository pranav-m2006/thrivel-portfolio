import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Code2, BrainCircuit, ShieldCheck, Flame, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArchFrame from './ArchFrame';
import DisciplineOrigin from './DisciplineOrigin';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-reveal-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-master-section bg-cream" id="about" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-intro-header about-reveal-item">
          <span className="section-eyebrow-stamp">01 / DEVELOPMENT JOURNEY &amp; FOUNDATION</span>
          <h2 className="section-main-heading">
            Engineering Thoughtful Interfaces &amp; Applied AI Systems.
          </h2>
          <p className="section-lead-paragraph">
            I am a Computer Science and Technology student at SNS College of Engineering with practical experience in frontend engineering and applied AI/ML systems. I focus on turning complex technical concepts into clear, responsive, and reliable software.
          </p>
        </div>

        {/* Two-Column Profile & Philosophy Grid */}
        <div className="about-profile-grid">
          
          {/* LEFT: Authentic Portrait inside Architectural Arch Frame */}
          <div className="about-portrait-wrapper about-reveal-item">
            <ArchFrame
              imageSrc="/images/pranav.jpg"
              altText="Pranav M — Frontend Developer &amp; AI/ML Practitioner"
              caption="Pranav M · Coimbatore, Tamil Nadu"
              badgeText="B.E. CST · SNSCE (2024–2028)"
              enableParallax={true}
            />
          </div>

          {/* RIGHT: Core Engineering Journey & Values */}
          <div className="about-narrative-wrapper about-reveal-item">
            <div className="about-narrative-card">
              <h3 className="about-card-title">Curiosity Grounded in Engineering Rigor</h3>
              <p className="about-card-body">
                My approach to software balances aesthetic precision with algorithmic depth. Whether structuring clean, reusable React component hierarchies, building offline-first architectures with indexed client storage, or integrating predictive machine learning models into intuitive user flows, I prioritize usability, performance, and maintainability.
              </p>

              <div className="about-focus-areas-list">
                <div className="about-focus-item">
                  <div className="about-focus-icon-wrap">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <h4 className="about-focus-name">Responsive Frontend Engineering</h4>
                    <p className="about-focus-desc">
                      Building modern web applications using React, TypeScript, and clean CSS architectures with measured animations and WCAG AA accessibility.
                    </p>
                  </div>
                </div>

                <div className="about-focus-item">
                  <div className="about-focus-icon-wrap">
                    <BrainCircuit size={18} />
                  </div>
                  <div>
                    <h4 className="about-focus-name">Applied Artificial Intelligence</h4>
                    <p className="about-focus-desc">
                      Leveraging predictive ML algorithms (Random Forest, classification) and modern LLM APIs to solve concrete challenges in disaster preparedness and career roadmaps.
                    </p>
                  </div>
                </div>

                <div className="about-focus-item">
                  <div className="about-focus-icon-wrap">
                    <Flame size={18} />
                  </div>
                  <div>
                    <h4 className="about-focus-name">Daily Algorithmic Problem Solving</h4>
                    <p className="about-focus-desc">
                      Maintaining a 100-day streak with 150+ problems solved on LeetCode across Java and C++, reinforcing data structures, time complexity, and memory management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Highlight Metrics */}
              <div className="about-metrics-strip">
                <div className="about-metric-pill">
                  <GraduationCap size={16} />
                  <div>
                    <span className="metric-val">CGPA 8.00</span>
                    <span className="metric-sub">SNSCE · B.E. CST</span>
                  </div>
                </div>

                <div className="about-metric-pill">
                  <Award size={16} />
                  <div>
                    <span className="metric-val">3rd Place</span>
                    <span className="metric-sub">HackMatrix Erode</span>
                  </div>
                </div>

                <div className="about-metric-pill">
                  <ShieldCheck size={16} />
                  <div>
                    <span className="metric-val">Finalist</span>
                    <span className="metric-sub">SIH 2025 National</span>
                  </div>
                </div>

                <div className="about-metric-pill">
                  <BookOpen size={16} />
                  <div>
                    <span className="metric-val">2 Patents</span>
                    <span className="metric-sub">Co-Inventor</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Catchy Editorial Origin Cadence */}
        <div className="about-reveal-item" style={{ marginTop: '56px' }}>
          <DisciplineOrigin
            theme="light"
            badge="ORIGIN &amp; RIGOR"
            lines={[
              { text: 'ATHLETICS TAUGHT', pop: 'DISCIPLINE.', popBg: 'crimson' },
              { text: 'SOFTWARE TAUGHT', pop: 'CURIOSITY.', popBg: 'black', isMiddle: true },
              { text: 'PROBLEM-SOLVING TAUGHT', pop: 'RESPONSIBILITY.', popBg: 'crimson' },
            ]}
            flow={['Discipline', 'Curiosity', 'Responsibility']}
            headline="EVERYTHING I BUILD."
            subtext="Whether preparing for competitive programming challenges or architecting full-stack React systems, the same standard applies: show up consistently, reject complacency, and build with human respect."
          />
        </div>

      </div>
    </section>
  );
}

