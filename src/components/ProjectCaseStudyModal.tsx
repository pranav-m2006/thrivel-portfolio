import { useEffect } from 'react';
import { X, Github, ExternalLink, ShieldCheck, Code, Layers, Cpu, Database, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  shortDesc: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: { name: string; role: string; tag: string }[];
  myContribution: string[];
  workflowSteps: { step: string; title: string; desc: string }[];
  githubUrl: string;
  liveDemoUrl?: string;
  liveDemoStatus?: string;
  imageSrc: string;
  imageAlt: string;
  limitations: string;
}

interface ProjectCaseStudyModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="case-study-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-backdrop" onClick={onClose} />
      
      <div className="modal-container-card">
        {/* Modal Top Bar */}
        <div className="modal-header-bar">
          <div className="modal-header-meta">
            <span className="modal-number-tag">{project.number}</span>
            <span className="modal-category-pill">{project.category}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-scroll-content">
          
          {/* Project Title & Summary */}
          <div className="modal-hero-block">
            <h2 id="modal-project-title" className="modal-title">{project.title}</h2>
            <p className="modal-lead-summary">{project.shortDesc}</p>

            <div className="modal-action-buttons-row">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={16} />
                <span>View Source Code on GitHub</span>
                <ExternalLink size={14} />
              </a>

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink size={15} />
                  <span>Launch Live Deployment</span>
                </a>
              ) : (
                <div className="modal-demo-status-badge">
                  <span className="status-dot-amber" />
                  <span>Deployment: {project.liveDemoStatus || 'Repository Validated · Local / Docker Environment'}</span>
                </div>
              )}
            </div>
          </div>

          {/* Visual Application Showcase */}
          <div className="modal-image-showcase">
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="modal-preview-img"
              loading="lazy"
            />
            <div className="modal-image-caption">
              <span>{project.imageAlt}</span>
              <span className="modal-verified-tag"><ShieldCheck size={13} /> Verified Repository Architecture</span>
            </div>
          </div>

          {/* Problem vs Solution Split Grid */}
          <div className="modal-split-grid">
            <div className="modal-split-card problem-card">
              <div className="modal-card-badge text-crimson">
                <AlertTriangle size={15} />
                <span>THE REAL-WORLD PROBLEM</span>
              </div>
              <h3 className="modal-card-heading">Why Existing Tools Fall Short</h3>
              <p className="modal-card-text">{project.problem}</p>
            </div>

            <div className="modal-split-card solution-card">
              <div className="modal-card-badge text-sandstone">
                <ShieldCheck size={15} />
                <span>THE ENGINEERING SOLUTION</span>
              </div>
              <h3 className="modal-card-heading">Architectural Approach &amp; Design</h3>
              <p className="modal-card-text">{project.solution}</p>
            </div>
          </div>

          {/* Core Technical Workflow Pipeline */}
          <div className="modal-workflow-section">
            <div className="modal-section-eyebrow">
              <Layers size={15} />
              <span>SYSTEM ARCHITECTURE &amp; WORKFLOW PIPELINE</span>
            </div>
            <h3 className="modal-section-title">How the Application Works (Input → Output)</h3>

            <div className="modal-workflow-steps">
              {project.workflowSteps.map((step, idx) => (
                <div key={idx} className="workflow-step-card">
                  <span className="workflow-step-num">{step.step}</span>
                  <h4 className="workflow-step-title">{step.title}</h4>
                  <p className="workflow-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implemented Features Grid */}
          <div className="modal-features-section">
            <div className="modal-section-eyebrow">
              <Code size={15} />
              <span>VERIFIED FUNCTIONALITY</span>
            </div>
            <h3 className="modal-section-title">Key Implemented Capabilities</h3>

            <div className="modal-features-list">
              {project.features.map((feat, idx) => (
                <div key={idx} className="modal-feature-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Tech Stack */}
          <div className="modal-tech-section">
            <div className="modal-section-eyebrow">
              <Cpu size={15} />
              <span>VERIFIED TECHNOLOGIES</span>
            </div>
            <h3 className="modal-section-title">Technology Stack &amp; Architectural Roles</h3>

            <div className="modal-tech-grid">
              {project.techStack.map((tech, idx) => (
                <div key={idx} className="modal-tech-chip">
                  <div className="tech-chip-top">
                    <span className="tech-chip-name">{tech.name}</span>
                    <span className="tech-chip-tag">{tech.tag}</span>
                  </div>
                  <span className="tech-chip-role">{tech.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Verifiable Technical Contribution */}
          <div className="modal-contribution-section">
            <div className="modal-section-eyebrow">
              <Database size={15} />
              <span>INDIVIDUAL CONTRIBUTION</span>
            </div>
            <h3 className="modal-section-title">What I Personally Engineered</h3>

            <ul className="modal-contribution-list">
              {project.myContribution.map((item, idx) => (
                <li key={idx} className="modal-contrib-item">
                  <ArrowRight size={14} className="contrib-arrow" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honest Limitations & Future Refinement */}
          <div className="modal-limitations-section">
            <h4 className="limitations-heading">Engineering Tradeoffs &amp; Realistic Limitations</h4>
            <p className="limitations-text">{project.limitations}</p>
          </div>

          {/* Modal Footer Callout */}
          <div className="modal-footer-banner">
            <div>
              <h4 className="footer-banner-title">Inspect the full repository on GitHub</h4>
              <p className="footer-banner-sub">Review commit histories, file structures, and code architecture directly.</p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={16} />
              <span>Open Repository</span>
              <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

