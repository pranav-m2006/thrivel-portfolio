import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Terminal, Sparkles, ChevronDown, User } from 'lucide-react';
import gsap from 'gsap';
import Hero3DVisual from './Hero3DVisual';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const visualColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-status-pill',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2 }
      )
        .fromTo(
          '.hero-title-main',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.hero-role-badge',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.hero-intro-text',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta-group',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-credentials-row',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          visualColRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.0, ease: 'power2.out' },
          '-=0.9'
        )
        .fromTo(
          '.hero-scroll-prompt',
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-28 pb-16 px-6 md:px-12 lg:px-20"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #00f0ff 0%, #8b5cf6 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Personal Identity & Actions (7 cols) */}
        <div ref={textColRef} className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Status Indicator */}
          <div className="hero-status-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-medium">
              Available for Internships &amp; Projects
            </span>
          </div>

          {/* Name */}
          <h1 className="hero-title-main text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-3">
            Pranav M<span className="text-cyan-400">.</span>
          </h1>

          {/* Professional Title & Subtitle */}
          <div className="hero-role-badge mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Frontend Developer | AI/ML Practitioner
            </h2>
            <p className="text-sm sm:text-base font-mono text-slate-400 mt-1 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400 inline" />
              Computer Science Engineering Student @ SNSCE
            </p>
          </div>

          {/* Concise Introduction & Statement */}
          <div className="hero-intro-text space-y-3 mb-8 max-w-2xl">
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              I build responsive, high-performance web experiences and explore practical AI-powered solutions to real-world challenges.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              From intelligent career-development platforms to predictive disaster management systems, I enjoy turning complex technical ideas into reliable, human-respectful software.
            </p>
          </div>

          {/* Two Prominent Action Buttons */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span className="text-base font-semibold tracking-wide">Explore My Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 hover:text-white transform hover:-translate-y-0.5"
            >
              <User className="w-4 h-4 text-cyan-400" />
              <span className="text-base">About Me</span>
            </button>

            {/* Quick Social Connect Icons */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Credential Strip */}
          <div className="hero-credentials-row pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
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

        {/* Right Column: Interactive 3D Cybernetic Visual (5 cols) */}
        <div
          ref={visualColRef}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] lg:min-h-[540px]"
        >
          {/* Subtle Cyber Glow Disc Behind 3D Model */}
          <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-violet-600/10 blur-[70px] pointer-events-none" />

          {/* Live Interactive Three.js Neural Kernel */}
          <div className="relative w-full h-full max-w-[500px] aspect-square flex items-center justify-center">
            <Hero3DVisual />
          </div>

          {/* Corner Framing Tech Accents */}
          <div className="absolute top-2 right-2 font-mono text-[10px] text-cyan-500/40 tracking-widest hidden sm:block">
            SYS_3D // CORE: ACTIVE
          </div>
          <div className="absolute bottom-2 left-2 font-mono text-[10px] text-slate-600 tracking-widest hidden sm:block">
            LAT: 11.0168° N, 76.9558° E
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hero-scroll-prompt mt-12 flex flex-col items-center justify-center gap-2 pointer-events-none">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
}
