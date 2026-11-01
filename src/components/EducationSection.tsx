import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: 'SNS College of Engineering',
    degree: 'B.E. in Computer Science and Technology',
    period: 'September 2024 – 2028',
    location: 'Coimbatore, Tamil Nadu',
    score: '8.00 / 10',
    scoreLabel: 'Cumulative GPA',
    highlights: [
      'Core focus on Object-Oriented Programming, Data Structures, Relational Database Systems, and Applied Machine Learning.',
      'Active participant in technical club initiatives, competitive coding challenges, and collaborative hackathons.',
      'Maintaining strong academic standing while pursuing software development internships and research patent projects.',
    ],
  },
  {
    institution: 'Presentation Convent Matriculation Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC) & SSLC',
    period: 'Completed School Education',
    location: 'Tamil Nadu, India',
    score: 'HSC: 73% · SSLC: 81.6%',
    scoreLabel: 'Academic Score',
    highlights: [
      'Completed comprehensive foundational coursework in Mathematics, Physics, Chemistry, and Computer Science.',
      'Demonstrated consistent academic discipline and participation in co-curricular scholastic competitions.',
    ],
  },
];

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.education-card-item', {
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
    <section className="education-master-section bg-ivory" id="education" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-intro-header">
          <span className="section-eyebrow-stamp">06 / ACADEMIC BACKGROUND</span>
          <h2 className="section-main-heading">
            Education &amp; Scholastic Foundations.
          </h2>
          <p className="section-lead-paragraph">
            Academic milestones and verified coursework grounding my engineering discipline in computer science and technology.
          </p>
        </div>

        {/* Education Cards Stack */}
        <div className="education-cards-stack">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <div key={idx} className="education-card-item">
              
              <div className="edu-card-topbar">
                <div className="edu-inst-group">
                  <div className="edu-icon-pill">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="edu-degree-title">{edu.degree}</h3>
                    <div className="edu-inst-name">{edu.institution}</div>
                  </div>
                </div>

                <div className="edu-score-badge">
                  <span className="edu-score-label">{edu.scoreLabel}</span>
                  <strong className="edu-score-val">{edu.score}</strong>
                </div>
              </div>

              <div className="edu-meta-row">
                <span className="edu-meta-tag">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </span>
                <span className="edu-meta-tag">
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                </span>
              </div>

              <ul className="edu-highlights-list">
                {edu.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="edu-highlight-item">
                    <CheckCircle2 size={15} className="edu-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
