import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Terminal, Sparkles, User, Layers, Award, Code2 } from 'lucide-react';
import Robot3DCharacter from '../components/Robot3DCharacter';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page-view min-h-[calc(100vh-80px)] flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #00f0ff 0%, #8b5cf6 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* Left Column: Personal Identity & Direct Action Buttons (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">
              Available for Internships &amp; Projects
            </span>
          </div>

          {/* Name - Visible Immediately */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3">
            Pranav M<span className="text-cyan-400">.</span>
          </h1>

          {/* Role & Positioning */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Frontend Developer | AI/ML Practitioner
            </h2>
            <p className="text-sm sm:text-base font-mono text-slate-400 mt-1 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400 inline" />
              Computer Science Engineering Student @ SNSCE
            </p>
          </div>

          {/* Concise Introduction - Visible Immediately */}
          <div className="space-y-3 mb-8 max-w-2xl">
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              I develop interactive web experiences and practical AI/ML projects.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              From intelligent career-development platforms to predictive disaster management systems, I enjoy turning ideas into reliable, human-respectful software.
            </p>
          </div>

          {/* Two Prominent Page Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              to="/projects"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span className="text-base tracking-wide">Explore My Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 hover:text-white transform hover:-translate-y-0.5"
            >
              <User className="w-4 h-4 text-cyan-400" />
              <span className="text-base">About Me</span>
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Credential Highlights */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white font-mono">3+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Internships</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-cyan-400 font-mono">3rd</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">HackMatrix Place</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-violet-400 font-mono">SIH 2025</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">National Finalist</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-emerald-400 font-mono">2</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Patents Filed</span>
            </div>
          </div>
        </div>

        {/* Right Column: Large Dedicated Interactive 3D AI Robot (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[580px]">
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-cyan-500/15 blur-[90px] pointer-events-none" />
          <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-violet-600/15 blur-[80px] pointer-events-none" />

          {/* Real 3D AI Robot Character */}
          <div className="relative w-full h-full max-w-[540px] aspect-square flex items-center justify-center">
            <Robot3DCharacter />
          </div>

          {/* Tech Framing Tag */}
          <div className="absolute top-2 right-2 font-mono text-[11px] text-cyan-400/60 tracking-widest hidden sm:block">
            AI_ROBOT // GAZE_TRACKING: ON
          </div>
        </div>
      </div>

      {/* Six-Page Route Quick Nav Bar at Bottom */}
      <div className="max-w-7xl mx-auto w-full pt-10 border-t border-slate-800/60 mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <Link
          to="/projects"
          className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-slate-200 uppercase font-semibold">Projects</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/about"
          className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <User className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-mono text-slate-200 uppercase font-semibold">About</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/skills"
          className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-slate-200 uppercase font-semibold">Skills</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/achievements"
          className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-slate-200 uppercase font-semibold">Achievements</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/contact"
          className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group col-span-2 sm:col-span-1"
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-slate-200 uppercase font-semibold">Contact</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
