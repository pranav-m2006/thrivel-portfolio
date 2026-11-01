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
    period: '2023 – 2027',
    location: 'Coimbatore, Tamil Nadu, India',
    score: '8.00 / 10.0',
    scoreLabel: 'Cumulative GPA',
    highlights: [
      'Core coursework in Data Structures, Algorithms, and Object-Oriented Systems',
      'Specialized in Applied AI/ML algorithms and modern Web Technologies',
      'Active participant in competitive hackathons, technical symposiums, and research initiatives',
    ],
  },
  {
    institution: 'Presentation Convent MHSS',
    degree: 'Higher Secondary Certificate (HSC) — Class XII',
    period: '2021 – 2023',
    location: 'Tamil Nadu, India',
    score: '92.0%',
    scoreLabel: 'Academic Score',
    highlights: [
      'Comprehensive study in Mathematics, Computer Science, Physics, and Chemistry',
      'Built early programming foundations in C++ and algorithmic logic',
      'Graduated with distinction and academic honors',
    ],
  },
];

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.edu-header-block',
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

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="edu-header-block mb-16 flex flex-col items-start border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            06 // Academic Background
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mt-4 leading-relaxed">
            Scholastic background and core theoretical foundations in computer science and technology.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_HISTORY.map((item) => (
            <div
              key={item.institution}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-cyan-400 font-mono block">
                      {item.score}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {item.scoreLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.institution}
                </h3>

                <p className="text-base text-cyan-300 font-medium mb-3">
                  {item.degree}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  STATUS: VERIFIED ENROLLMENT
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
