import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, AlertTriangle, Layers, CheckCircle2 } from 'lucide-react';
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
    badge: 'CAREER INTELLIGENCE & GAP ANALYSIS',
    shortDesc:
      'A skill-development and career-support platform designed to help students and job seekers understand their current skills, identify industry skill gaps, and plan structured professional growth.',
    problem:
      'Students and early-stage professionals frequently struggle to navigate fragmented coursework and ambiguous job postings, lacking objective, measurable insights into what specific skills they need for their target tech careers.',
    solution:
      'Built an intelligent, interactive web platform that assesses student competency profiles, compares them against real-world engineering benchmarks, and generates clear, milestone-driven learning roadmaps using the Gemini API.',
    features: [
      'Interactive radar skill assessment and visual gap identification matrix',
      'Milestone-driven career progression roadmap with checkpoint completion tracking',
      'Gemini AI resume skill extraction and role-readiness matching',
      'Actionable course recommendations and verified learning milestones',
    ],
    techStack: [
      { name: 'React', role: 'Frontend Architecture', tag: 'Core UI' },
      { name: 'TypeScript', role: 'Type Safety & State Contracts', tag: 'Language' },
      { name: 'Tailwind CSS', role: 'Modern Responsive Design', tag: 'Styling' },
      { name: 'Gemini API', role: 'Resume Extraction & Gap Analysis', tag: 'AI Engine' },
      { name: 'Node.js', role: 'API Orchestration & Parsing', tag: 'Backend' },
      { name: 'Vercel', role: 'Continuous Deployment & CDN', tag: 'Cloud' },
    ],
    myContribution: [
      'Architected the modern responsive frontend in React & TypeScript with zero layout shift',
      'Designed and coded the interactive skill radar visualization and gap identification panels',
      'Integrated the Google Gemini API for automated resume parsing and intelligent curriculum matching',
      'Configured automated CI/CD deployment pipelines on Vercel',
    ],
    workflowSteps: [
      { step: '01', title: 'Profile Ingestion', desc: 'User inputs current technical skills, coursework, and target engineering roles.' },
      { step: '02', title: 'AI Gap Analysis', desc: 'Gemini AI evaluates profile against industry benchmarks to detect specific missing competencies.' },
      { step: '03', title: 'Roadmap Synthesis', desc: 'Generates a phased milestone roadmap prioritized by urgency and prerequisite dependencies.' },
      { step: '04', title: 'Progress Tracking', desc: 'Real-time dashboard tracks milestone completions and updates verified job-readiness scores.' },
    ],
    githubUrl: 'https://github.com/pranav-m2006/AI-skill-twin',
    liveDemoUrl: 'https://ai-skill-twin.vercel.app/login',
    liveDemoStatus: 'LIVE APPLICATION (VERIFIED DEPLOYMENT)',
    imageSrc: '/images/skill-twin-preview.svg',
    imageAlt: 'AI Skill Twin Career Development Platform Interface Preview',
    limitations: 'Continuous updates underway to expand specialized role tracks and enhance multi-language code assessment.',
  },
  {
    id: 'disaster-management',
    number: 'PROJECT 02',
    title: 'Disaster Management System',
    category: 'AI/ML Weather Prediction & Disaster Preparedness',
    badge: 'WEATHER INTELLIGENCE & HAZARD MODELING',
    shortDesc:
      'An AI/ML-based disaster management and mitigation platform focused on predictive meteorological modeling and precautionary guidance to help reduce the human and infrastructure impact of severe weather events.',
    problem:
      'Traditional regional disaster alert mechanisms frequently suffer from delayed dissemination and broad generalizations, leaving vulnerable communities without granular, actionable warning before floods and severe storms escalate.',
    solution:
      'Engineered an integrated AI/ML weather intelligence application combining historical storm telemetry with predictive classification algorithms to visualize localized hazard zones and deliver rapid precautionary advisories.',
    features: [
      'Predictive machine learning classifiers for rainfall and flood surge probability',
      'Interactive geospatial risk mapping indicating hazard severity and safe zones',
      'Automated, threshold-triggered precautionary guidance protocols for emergency responders',
      'Local meteorological telemetry dashboard with historical weather pattern comparisons',
    ],
    techStack: [
      { name: 'Python', role: 'Data Processing & Model Training', tag: 'Core Language' },
      { name: 'Scikit-learn', role: 'Predictive Classifier Algorithms', tag: 'Machine Learning' },
      { name: 'Pandas & NumPy', role: 'Meteorological Data Cleaning & Ingestion', tag: 'Data Pipeline' },
      { name: 'React', role: 'Interactive Dashboard & Maps UI', tag: 'Frontend' },
      { name: 'Leaflet / Maps', role: 'Geospatial Vulnerability Visualization', tag: 'Geospatial' },
      { name: 'FastAPI / Flask', role: 'Local Inference API & Dispatch', tag: 'Backend API' },
    ],
    myContribution: [
      'Trained and validated predictive classification models on historical meteorological disaster datasets',
      'Designed the real-time geospatial hazard map and severity threshold visualization interface',
      'Built data ingestion pipelines for environmental parameters (rainfall intensity, atmospheric pressure)',
      'Engineered rule-based advisory generators for automated disaster precautionary guidance',
    ],
    workflowSteps: [
      { step: '01', title: 'Data Ingestion', desc: 'Streams atmospheric sensor inputs (precipitation, pressure, wind velocity).' },
      { step: '02', title: 'ML Hazard Inference', desc: 'Trained Scikit-learn models evaluate probability of extreme flood/cyclone events.' },
      { step: '03', title: 'Geospatial Mapping', desc: 'Projects predicted threat levels onto interactive regional map layers.' },
      { step: '04', title: 'Actionable Guidance', desc: 'Dispatches targeted evacuation advisories and precautionary checklists to responders.' },
    ],
    githubUrl: 'https://github.com/pranav-m2006/Disaster-management',
    liveDemoUrl: undefined, // Hosted locally per explicit requirement!
    liveDemoStatus: 'HOSTED LOCALLY (OFFLINE PIPELINE)',
    imageSrc: '/images/disaster-screen.jpg',
    imageAlt: 'Disaster Management System Weather Intelligence & Hazard Prediction Dashboard',
    limitations: 'Currently runs on local environment with mock/sample sensor feeds; live external API integration in active development.',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        '.projects-header-block',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-header-block',
            start: 'top 85%',
          },
        }
      );

      // Card reveals
      gsap.utils.toArray<HTMLElement>('.project-case-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Background Soft Neon Light */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, #00f0ff 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header: Prominent & Impossible to Miss */}
        <div className="projects-header-block mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              01 // Selected Projects
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Featured Case Studies
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mt-4 leading-relaxed">
              Deep dive into my primary development projects—engineered for practical utility, clean architecture, and real-world impact.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              [ 02 Verified Productions ]
            </span>
          </div>
        </div>

        {/* Alternating Project Cards */}
        <div className="space-y-24 md:space-y-32">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="project-case-card relative rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Visual Preview Column (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/90 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                      {/* Top Browser Header Bar */}
                      <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="ml-2 font-mono text-xs text-slate-500 hidden sm:inline">
                            {project.title.toLowerCase().replace(/\s+/g, '-')}.local
                          </span>
                        </div>
                        {project.liveDemoUrl ? (
                          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Live App
                          </span>
                        ) : (
                          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Local Deployment
                          </span>
                        )}
                      </div>

                      {/* Image / Graphic Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Content & Case Study Details (6 cols) */}
                  <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    {/* Project Number & Category Pill */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                        {project.number}
                      </span>
                      <span className="text-slate-600">//</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                      {project.shortDesc}
                    </p>

                    {/* Problem Solved Callout */}
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        The Problem It Solves
                      </h4>
                      <p className="text-sm text-slate-300 leading-normal">
                        {project.problem}
                      </p>
                    </div>

                    {/* Implemented Features Checklist */}
                    <div className="mb-6 space-y-2">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2.5">
                        Key Implemented Features
                      </h4>
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech.name}
                            className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {/* Live Demo Button (ONLY if liveDemoUrl is present) */}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-semibold text-sm">Live Demo</span>
                        </a>
                      )}

                      {/* GitHub Repository Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-200 bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">View on GitHub</span>
                      </a>

                      {/* Case Study Details Modal Button */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-200"
                      >
                        <Layers className="w-4 h-4 text-violet-400" />
                        <span className="text-sm">Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Full Deep Dive Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
