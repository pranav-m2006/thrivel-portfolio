import { useEffect, useRef } from 'react';
import { GraduationCap, Code2, BrainCircuit, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal-block',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="about-reveal-block mb-16 flex flex-col items-start border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            02 // About Me
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Engineering Background &amp; Focus
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mt-4 leading-relaxed">
            Bridging modern frontend engineering with applied machine learning to build intuitive, resilient digital experiences.
          </p>
        </div>

        {/* Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Live Tech Badge (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Glowing Corner Accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-violet-400 z-20 pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-[0_0_50px_rgba(0,240,255,0.12)]">
                <img
                  src="/images/pranav.jpg"
                  alt="Pranav M. - Frontend Developer & AI/ML Practitioner"
                  className="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-semibold">Pranav M.</p>
                    <p className="text-slate-400 text-xs font-mono">B.E. CST @ SNSCE</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950/90 border border-cyan-500/30 font-mono text-[11px] text-cyan-300">
                    CGPA 8.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Core Principles (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Turning technical curiosity into dependable software.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I am a Computer Science and Technology student at SNS College of Engineering with an active focus on modern frontend architecture, TypeScript, and applied AI/ML systems.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Rather than treating AI and web development as separate disciplines, I specialize in combining them—translating complex machine learning models into clean, responsive web applications that solve real-world problems.
              </p>
            </div>

            {/* 3 Core Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
                <Code2 className="w-5 h-5 text-cyan-400 mb-3" />
                <h4 className="text-white font-semibold text-base mb-1">Disciplined Execution</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Clean components, rigorous type safety, and predictable state.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-violet-500/40 transition-all duration-200">
                <BrainCircuit className="w-5 h-5 text-violet-400 mb-3" />
                <h4 className="text-white font-semibold text-base mb-1">Applied AI Systems</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Grounding machine learning algorithms in accessible, real-time web tools.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-white font-semibold text-base mb-1">Human Respect</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Responsive design, intuitive user flows, and zero superficial bloat.
                </p>
              </div>
            </div>

            {/* Key Academic & Practical Highlights */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-slate-300">
                  B.E. Computer Science &amp; Technology (2023–2027)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full">
                  SNS College of Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
