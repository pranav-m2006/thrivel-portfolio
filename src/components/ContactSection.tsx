import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-header-block',
        { y: 35, opacity: 0 },
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pranav.m2006.aiml@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="contact-header-block mb-16 flex flex-col items-start border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            07 // Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mt-4 leading-relaxed">
            Open for software engineering internships, collaborative development projects, and applied AI initiatives.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Connect Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Initiate a Conversation
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Whether you have an internship opening, an interesting full-stack project, or want to discuss applied machine learning solutions, I&apos;d love to connect.
              </p>

              {/* Email One-Click Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:pranav.m2006.aiml@gmail.com"
                      className="text-white hover:text-cyan-300 font-mono text-sm sm:text-base font-semibold transition-colors"
                    >
                      pranav.m2006.aiml@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Contact Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Phone</span>
                    <span className="text-sm font-mono text-slate-300">+91 97894 48944</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Location</span>
                    <span className="text-sm font-mono text-slate-300">Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850/80 transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base">GitHub</h4>
                    <p className="text-xs text-slate-400 font-mono">pranav-m2006</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/pranav-m2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850/80 transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base">LinkedIn</h4>
                    <p className="text-xs text-slate-400 font-mono">pranav-m2006</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Catchy Discipline Manifesto (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block">
                // ENGINEERING STANDARDS
              </span>

              <div className="space-y-4 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                <p className="border-l-2 border-cyan-400 pl-4">
                  ATHLETICS TAUGHT DISCIPLINE.
                </p>
                <p className="border-l-2 border-sky-400 pl-4">
                  SOFTWARE TAUGHT CURIOSITY.
                </p>
                <p className="border-l-2 border-violet-400 pl-4">
                  PROBLEM-SOLVING TAUGHT RESPONSIBILITY.
                </p>
              </div>

              <div className="py-4 border-y border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>Discipline</span>
                <span className="text-cyan-400">→</span>
                <span>Curiosity</span>
                <span className="text-cyan-400">→</span>
                <span>Responsibility</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Whether preparing for competitive programming challenges or architecting full-stack React systems, the same standard applies: show up consistently, reject complacency, and build with human respect.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>PRANAV M. // 2026</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                READY FOR CHALLENGES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
