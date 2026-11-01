import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  responsibilities: string[];
  techPills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Thrivels',
    role: 'Web Development Intern',
    period: 'Current · 2026',
    location: 'Remote',
    isCurrent: true,
    responsibilities: [
      'Contributing to modern web interface development and component-driven frontend architecture using React.',
      'Refining responsive layouts and cross-browser visual consistency across desktop and mobile viewports.',
      'Collaborating on frontend performance improvements, asset loading optimizations, and interface ergonomics.',
    ],
    techPills: ['React.js', 'TypeScript', 'Responsive Design', 'Git', 'CSS Tokens'],
  },
  {
    company: 'CodSoft',
    role: 'Web Development Intern',
    period: 'Internship Term',
    location: 'Virtual / Remote',
    responsibilities: [
      'Developed and enhanced responsive web interfaces applying semantic HTML5, modern CSS, and JavaScript ES6+.',
      'Debugged and refined frontend components, resolving cross-device layout inconsistencies and improving usability.',
      'Structured clean, modular frontend code adhering to contemporary web standards and accessibility guidelines.',
    ],
    techPills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'UI Debugging', 'Usability Testing'],
  },
  {
    company: 'InternPe',
    role: 'Web Development Intern',
    period: 'Internship Term',
    location: 'Virtual / Remote',
    responsibilities: [
      'Built interactive frontend features for web applications with a focus on clean client-side JavaScript execution.',
      'Maintained version control integrity, managing branches, atomic commits, and repository merges using Git.',
      'Delivered functional web modules within structured deadlines while validating code across diverse browser engines.',
    ],
    techPills: ['JavaScript', 'DOM APIs', 'Git', 'GitHub', 'Frontend Workflows'],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.experience-card-item', {
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
    <section className="experience-master-section bg-ivory" id="experience" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-intro-header">
          <span className="section-eyebrow-stamp">04 / PRACTICAL INDUSTRY ENGAGEMENTS</span>
          <h2 className="section-main-heading">
            Professional Experience &amp; Internships.
          </h2>
          <p className="section-lead-paragraph">
            A chronological timeline of web development internships. Demonstrating consistent application of frontend engineering, code hygiene, and collaborative version control.
          </p>
        </div>

        {/* Experience Timeline Stack */}
        <div className="experience-timeline-stack">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`experience-card-item ${exp.isCurrent ? 'experience-current-card' : ''}`}>
              
              {/* Header Row */}
              <div className="exp-card-header">
                <div className="exp-company-group">
                  <div className="exp-icon-pill">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="exp-role-title">{exp.role}</h3>
                    <div className="exp-company-name">
                      <span>{exp.company}</span>
                      {exp.isCurrent && (
                        <span className="exp-current-badge">
                          <span className="current-pulse-dot" />
                          <span>Active Role</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="exp-meta-group">
                  <span className="exp-meta-pill">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </span>
                  <span className="exp-meta-pill">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities List */}
              <ul className="exp-responsibilities-list">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="exp-resp-item">
                    <CheckCircle2 size={15} className="resp-check-icon" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Pills Footer */}
              <div className="exp-tech-footer">
                <span className="exp-tech-label">Applied Technologies:</span>
                <div className="exp-tech-chips">
                  {exp.techPills.map((tech, tIdx) => (
                    <span key={tIdx} className="exp-pill-tag">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

