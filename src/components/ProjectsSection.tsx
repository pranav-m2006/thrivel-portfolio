import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, ArrowRight, ShieldCheck, AlertTriangle, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCaseStudyModal, { type ProjectDetail } from './ProjectCaseStudyModal';

gsap.registerPlugin(ScrollTrigger);

export const FEATURED_PROJECTS: ProjectDetail[] = [
  {
    id: 'ai-skill-twin',
    number: 'PROJECT 01',
    title: 'AI Skill Twin',
    category: 'AI-Powered Career Development Platform',
    badge: 'CAREER INTELLIGENCE & SKILL ROADMAPS',
    shortDesc: 'A comprehensive career-development platform designed to help students and job seekers evaluate their competencies, identify targeted skill gaps, build dynamic learning roadmaps, and discover tailored career paths.',
    problem: 'Students and early-career job seekers frequently face information fragmentation: job descriptions use conflicting terminology, prerequisite skills are difficult to sequence without expert mentorship, and candidates fall into tutorial paralysis without verifiable milestone validation.',
    solution: 'AI Skill Twin consolidates skill assessment, automated skill-gap analysis, customized step-by-step curricula, and career discovery into an integrated web architecture powered by modern React and contextual Gemini AI assistance.',
    features: [
      'Interactive skill profile creation and competency matrix analysis',
      'Automated skill-gap identification against specific industry job profiles',
      'Personalized, milestone-driven learning roadmaps with sequential progress tracking',
      'AI-assisted career advisory addressing role-specific engineering requirements',
      'Targeted job recommendations matching current and projected user scores',
      'Resume alignment diagnostics analyzing technical keyword coverage',
    ],
    techStack: [
      { name: 'React.js', role: 'Frontend UI', tag: 'Client' },
      { name: 'Vite', role: 'Build Tooling & HMR', tag: 'Tooling' },
      { name: 'Tailwind CSS', role: 'Design System & Utility Styling', tag: 'Styling' },
      { name: 'Node.js', role: 'Server Runtime & API Dispatch', tag: 'Backend' },
      { name: 'Express.js', role: 'RESTful API Architecture', tag: 'Backend' },
      { name: 'Prisma ORM', role: 'Type-Safe Database Modeling', tag: 'Data' },
      { name: 'SQLite / Postgres', role: 'Relational Persistence', tag: 'Database' },
      { name: 'Gemini API', role: 'Contextual AI Career Diagnostics', tag: 'AI/ML' },
    ],
    myContribution: [
      'Architected the declarative React frontend component hierarchy, ensuring clean separation of state and presentation.',
      'Constructed the dynamic learning roadmap visualization displaying sequential phase milestones and completion indicators.',
      'Engineered responsive skill-gap radar and progress cards with accessible typography and clean color semantics.',
      'Integrated backend REST endpoints connecting user assessment inputs to structured roadmap payloads.',
    ],
    workflowSteps: [
      { step: '01', title: 'Competency Intake', desc: 'User completes a structured technical questionnaire or uploads resume details covering frameworks, languages, and project history.' },
      { step: '02', title: 'Target Role Benchmark', desc: 'System parses selected target job descriptions and extracts required competency thresholds across frontend, backend, and systems logic.' },
      { step: '03', title: 'Skill-Gap Computation', desc: 'Algorithms calculate variance between candidate capabilities and role benchmarks, highlighting critical prerequisites.' },
      { step: '04', title: 'Dynamic Roadmap Synthesis', desc: 'Generates a personalized, phased curriculum with verifiable milestone exercises and contextual Gemini AI guidance.' },
    ],
    githubUrl: 'https://github.com/pranav-m2006/AI-skill-twin',
    liveDemoStatus: 'Repository Verified · Local Development & Docker Stack',
    imageSrc: '/images/skill-twin-preview.svg',
    imageAlt: 'AI Skill Twin — Career Intelligence & Dynamic Roadmap Dashboard',
    limitations: 'Live deployment requires configured Gemini API credentials and PostgreSQL connection string. The current repository implementation focuses on local Docker/Vite execution; cloud deployment is planned for production release.',
  },
  {
    id: 'disaster-management',
    number: 'PROJECT 02',
    title: 'Disaster Management System',
    category: 'AI/ML-Based Weather Prediction & Disaster Preparedness',
    badge: 'OFFLINE-FIRST DECISION SUPPORT & PREDICTION',
    shortDesc: 'An offline-first decision-support architecture applying machine learning to meteorological prediction, translating weather models into actionable safety recommendations, road risk assessments, and shelter logistics.',
    problem: 'During extreme meteorological disasters and flash floods, critical cellular infrastructure frequently collapses. First responders and displaced communities are left without real-time flood predictions, road impassability warnings, or shelter capacity telemetry.',
    solution: 'Engineered an offline-resilient flood response and decision-support application combining a predictive Random Forest weather model with client-side IndexedDB caching (Dexie.js) and Leaflet GIS mapping to ensure continuous operation without internet connectivity.',
    features: [
      'Predictive weather and localized flood-risk assessment using Random Forest algorithms',
      'Plain-language precautionary safety recommendations translated from probability models',
      'Road-condition-aware routing identifying flooded transit corridors and safe relief paths',
      'Relief camp occupancy and logistics tracking with capacity constraint alerts',
      'Offline-first data storage and local sync via Dexie.js (IndexedDB) for severed cellular grids',
      'Interactive spatial risk maps with Leaflet.js flood zone polygon overlays',
    ],
    techStack: [
      { name: 'Python', role: 'Machine Learning & Predictive Engine', tag: 'ML/AI' },
      { name: 'Scikit-Learn', role: 'Random Forest Prediction Model', tag: 'ML/AI' },
      { name: 'SQLAlchemy', role: 'Database ORM & Event Persistence', tag: 'Backend' },
      { name: 'Alembic', role: 'Database Migration Management', tag: 'Data' },
      { name: 'TypeScript', role: 'Type-Safe Frontend Application', tag: 'Client' },
      { name: 'Dexie.js', role: 'Offline-First Client IndexedDB', tag: 'Storage' },
      { name: 'Leaflet.js', role: 'Interactive GIS Spatial Risk Mapping', tag: 'Mapping' },
    ],
    myContribution: [
      'Engineered the decision-support frontend interface, ensuring immediate visual clarity for high-stress emergency operators.',
      'Integrated Leaflet.js interactive maps to render real-time flood risk overlays and dynamic evacuation routes.',
      'Implemented offline client-side caching with Dexie.js (IndexedDB), guaranteeing full access to cached safety protocols during network outages.',
      'Mapped raw Random Forest prediction probability scores into distinct, color-coded precautionary warning stages.',
    ],
    workflowSteps: [
      { step: '01', title: 'Environmental Data Intake', desc: 'Collects rainfall intensity, river flow gauge levels, and upstream soil saturation sensor readings.' },
      { step: '02', title: 'Random Forest Inference', desc: 'Machine learning model evaluates meteorological inputs against historical flood telemetry to calculate localized probability scores.' },
      { step: '03', title: 'Constraint & Risk Routing', desc: 'Rule engine checks road elevations and flood boundaries, flagging impassable transit routes to emergency shelters.' },
      { step: '04', title: 'Offline-First Dispatch', desc: 'Syncs emergency guidelines, shelter vacancies, and maps to local device storage via IndexedDB for uninterrupted response.' },
    ],
    githubUrl: 'https://github.com/pranav-m2006/Disaster-management',
    liveDemoStatus: 'National SIH Finalist Architecture · Python/TS Stack',
    imageSrc: '/images/project-disaster.jpg',
    imageAlt: 'Disaster Management System — Flood Risk Prediction & Offline Decision Interface',
    limitations: 'Offline synchronization requires periodic network reconnect to merge upstream relief-camp supply changes. Spatial GIS precision depends on open-source OpenStreetMap elevation contour accuracy.',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.project-showcase-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.25,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-master-section bg-cream" id="projects" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-intro-header">
          <span className="section-eyebrow-stamp">03 / VERIFIED FEATURED SYSTEMS</span>
          <h2 className="section-main-heading">
            Engineering Case Studies &amp; Architecture.
          </h2>
          <p className="section-lead-paragraph">
            Two substantial software systems engineered to address complex challenges in career progression and environmental disaster response. Explore problem definitions, technical solutions, verified codebases, and architectural decisions below.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="projects-showcase-stack">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <article key={project.id} className={`project-showcase-card ${isReversed ? 'layout-reversed' : ''}`}>
                
                {/* Visual Media Column */}
                <div className="project-media-col">
                  <div
                    className="project-image-box"
                    onClick={() => setSelectedProject(project)}
                    title="Click to open full case study"
                  >
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="project-screenshot"
                      loading="lazy"
                    />
                    <div className="project-media-overlay">
                      <span className="project-open-pill">
                        <Sparkles size={14} />
                        <span>Explore Engineering Case Study</span>
                      </span>
                    </div>
                  </div>
                  <div className="project-media-status-bar">
                    <span className="media-status-tag">
                      <ShieldCheck size={13} />
                      <span>{project.liveDemoStatus}</span>
                    </span>
                  </div>
                </div>

                {/* Content & Case Study Column */}
                <div className="project-content-col">
                  
                  {/* Top Meta */}
                  <div className="project-meta-row">
                    <span className="project-number-badge">{project.number}</span>
                    <span className="project-category-tag">{project.category}</span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-summary">{project.shortDesc}</p>

                  {/* Problem & Solution Callout Box */}
                  <div className="project-problem-solution-box">
                    <div className="ps-row">
                      <div className="ps-icon-wrap text-crimson">
                        <AlertTriangle size={15} />
                      </div>
                      <div>
                        <strong className="ps-label">The Problem:</strong>
                        <p className="ps-text">{project.problem}</p>
                      </div>
                    </div>

                    <div className="ps-row">
                      <div className="ps-icon-wrap text-sandstone">
                        <ShieldCheck size={15} />
                      </div>
                      <div>
                        <strong className="ps-label">The Solution:</strong>
                        <p className="ps-text">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="project-highlights-wrap">
                    <h4 className="project-sub-label">Key Implemented Capabilities:</h4>
                    <ul className="project-features-list">
                      {project.features.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="project-feature-item">
                          <CheckCircle2 size={14} className="feature-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Tech Chips */}
                  <div className="project-tech-chips-wrap">
                    <h4 className="project-sub-label">Technologies Used:</h4>
                    <div className="project-tech-chips">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-badge-chip">
                          <strong>{tech.name}</strong>
                          <small>({tech.tag})</small>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions-row">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      title="View Source Code on GitHub"
                    >
                      <Github size={16} />
                      <span>GitHub Repository</span>
                      <ExternalLink size={14} />
                    </a>

                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setSelectedProject(project)}
                      title="Inspect System Architecture & Case Study"
                    >
                      <Layers size={15} />
                      <span>Full Case Study &amp; Architecture</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>

              </article>
            );
          })}
        </div>

        {/* Global Git Verification Banner */}
        <div className="projects-bottom-banner">
          <div className="pbb-text">
            <h4 className="pbb-title">Looking for commit histories and technical documentation?</h4>
            <p className="pbb-sub">Every project listed above has an active, verifiable GitHub repository with documented commit logs.</p>
          </div>
          <a
            href="https://github.com/pranav-m2006"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            <span>Browse All Repositories (@pranav-m2006)</span>
          </a>
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
