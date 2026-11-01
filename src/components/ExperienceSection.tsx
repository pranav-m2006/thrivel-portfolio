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
    role: 'Frontend Developer Intern',
    period: 'Current / Present',
    location: 'Remote',
    isCurrent: true,
    responsibilities: [
      'Architecting responsive, high-fidelity user interface components using React and TypeScript',
      'Implementing modular UI design patterns and maintaining consistent design tokens across views',
      'Collaborating on frontend performance tuning, smooth transitions, and cross-device responsiveness',
      'Translating UX specifications into production-ready, clean, maintainable code',
    ],
    techPills: ['React', 'TypeScript', 'CSS3', 'Component Systems', 'Git'],
  },
  {
    company: 'CodSoft',
    role: 'Web Development Intern',
    period: 'Completed Internship',
    location: 'Remote',
    responsibilities: [
      'Developed multiple web project deliverables adhering to modern responsive web standards',
      'Implemented interactive UI logic, client-side data validation, and clean semantic layouts',
      'Practiced collaborative Git workflows, code reviews, and structured project milestones',
    ],
    techPills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git', 'Responsive Design'],
  },
  {
    company: 'InternPe',
    role: 'Web Development Intern',
    period: 'Completed Internship',
    location: 'Remote',
    responsibilities: [
      'Constructed foundational web applications focusing on layout responsiveness and clean styling',
      'Gained structured hands-on experience in frontend debugging and browser cross-compatibility',
      'Delivered sprint tasks on schedule while exploring modern frontend development best practices',
    ],
    techPills: ['HTML5', 'CSS3', 'JavaScript', 'Web Standards'],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-header-block',
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
      id="experience"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="exp-header-block mb-16 flex flex-col items-start border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            04 // Professional Experience
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Internship Timeline
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mt-4 leading-relaxed">
            Practical development experience accumulated across industry internships and engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="relative group">
              {/* Glowing Node Dot on Timeline */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent
                    ? 'bg-cyan-500 border-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.7)]'
                    : 'bg-slate-900 border-slate-700'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-mono text-[11px] uppercase tracking-wider">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-cyan-400 font-semibold flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                  {exp.techPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 font-mono text-xs text-slate-400"
                    >
                      {tech}
                    </span>
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
