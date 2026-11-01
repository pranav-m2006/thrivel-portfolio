import { useState, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  AlertTriangle, 
  Layers, 
  CheckCircle2, 
  Workflow, 
  Users 
} from 'lucide-react';
import ProjectCaseStudyModal, { type ProjectDetail } from '../components/ProjectCaseStudyModal';
import { FEATURED_PROJECTS } from '../components/ProjectsSection';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page-view min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="border-b border-slate-800 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            04 // Selected Projects
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Production Case Studies
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Detailed engineering breakdowns of my primary software projects—built for tangible utility, rigorous logic, and practical real-world impact.
          </p>
        </div>

        {/* Project 01: AI SKILL TWIN (Wide Detailed Layout) */}
        {FEATURED_PROJECTS[0] && (() => {
          const p1 = FEATURED_PROJECTS[0];
          return (
            <article className="p-8 md:p-14 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Preview (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
                    {/* Top Window Bar */}
                    <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-xs text-slate-500 hidden sm:inline">
                          ai-skill-twin.vercel.app
                        </span>
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Verified Live App
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 p-2">
                      <img
                        src={p1.imageSrc}
                        alt={p1.imageAlt}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Workflow Pipeline Pill Grid */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-2.5">
                      <Workflow className="w-3.5 h-3.5" />
                      Application Workflow Pipeline
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {p1.workflowSteps.map((ws) => (
                        <div key={ws.step} className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="font-mono text-[10px] text-cyan-400 block font-bold">{ws.step}</span>
                          <span className="text-xs text-slate-200 font-semibold block">{ws.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Specs & Actions (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">
                        {p1.number}
                      </span>
                      <span className="text-slate-600">//</span>
                      <span className="font-mono text-xs text-slate-400 uppercase">
                        {p1.category}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {p1.title}
                    </h2>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {p1.shortDesc}
                  </p>

                  {/* Problem & Target Users Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <h3 className="font-mono text-xs uppercase text-amber-400 flex items-center gap-1.5 mb-1.5 font-bold">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        The Problem
                      </h3>
                      <p className="text-xs text-slate-300 leading-normal">
                        {p1.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <h3 className="font-mono text-xs uppercase text-cyan-400 flex items-center gap-1.5 mb-1.5 font-bold">
                        <Users className="w-3.5 h-3.5" />
                        Target Users
                      </h3>
                      <p className="text-xs text-slate-300 leading-normal">
                        Computer science students, aspiring software engineers, and job seekers seeking objective competency roadmaps.
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                      Key Implemented Capabilities
                    </h3>
                    {p1.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p1.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300"
                      >
                        <span className="text-cyan-400 font-semibold mr-1.5">#</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={p1.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-950" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={p1.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-all"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>View on GitHub</span>
                    </a>

                    <button
                      onClick={() => setActiveModalProject(p1)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all"
                    >
                      <Layers className="w-4 h-4 text-violet-400" />
                      <span>Full Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })()}

        {/* Project 02: DISASTER MANAGEMENT SYSTEM (Alternating Layout) */}
        {FEATURED_PROJECTS[1] && (() => {
          const p2 = FEATURED_PROJECTS[1];
          return (
            <article className="p-8 md:p-14 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Specs & Actions (6 cols) */}
                <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-violet-400 uppercase tracking-widest font-bold">
                        {p2.number}
                      </span>
                      <span className="text-slate-600">//</span>
                      <span className="font-mono text-xs text-slate-400 uppercase">
                        {p2.category}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {p2.title}
                    </h2>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {p2.shortDesc}
                  </p>

                  {/* Problem & Target Users Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <h3 className="font-mono text-xs uppercase text-amber-400 flex items-center gap-1.5 mb-1.5 font-bold">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        The Problem
                      </h3>
                      <p className="text-xs text-slate-300 leading-normal">
                        {p2.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <h3 className="font-mono text-xs uppercase text-violet-400 flex items-center gap-1.5 mb-1.5 font-bold">
                        <Users className="w-3.5 h-3.5" />
                        Target Users
                      </h3>
                      <p className="text-xs text-slate-300 leading-normal">
                        Local disaster response teams, civic emergency planners, and vulnerable regional populations.
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-violet-400">
                      Key Implemented Capabilities
                    </h3>
                    {p2.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p2.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300"
                      >
                        <span className="text-violet-400 font-semibold mr-1.5">#</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GITHUB ONLY, NO LIVE DEMO */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={p2.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-md transition-all"
                    >
                      <Github className="w-4 h-4 text-violet-400" />
                      <span>View on GitHub</span>
                    </a>

                    <button
                      onClick={() => setActiveModalProject(p2)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-violet-500/40 transition-all"
                    >
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span>Full Case Study</span>
                    </button>

                    {/* Offline/Localhost Notice Badge */}
                    <span className="font-mono text-xs text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-2 rounded-xl flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Hosted Locally (Offline Pipeline)
                    </span>
                  </div>
                </div>

                {/* Right Preview (6 cols) */}
                <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
                    {/* Top Window Bar */}
                    <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-xs text-slate-500 hidden sm:inline">
                          localhost:8000/hazard-maps
                        </span>
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Localhost Simulation
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 p-2">
                      <img
                        src={p2.imageSrc}
                        alt={p2.imageAlt}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Workflow Pipeline */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-violet-400 flex items-center gap-1.5 mb-2.5">
                      <Workflow className="w-3.5 h-3.5" />
                      Hazard Modeling Workflow
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {p2.workflowSteps.map((ws) => (
                        <div key={ws.step} className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="font-mono text-[10px] text-violet-400 block font-bold">{ws.step}</span>
                          <span className="text-xs text-slate-200 font-semibold block">{ws.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })()}
      </div>

      {/* Case Study Full Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
