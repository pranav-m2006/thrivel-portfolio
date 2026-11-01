import { useEffect, useRef } from 'react';
import { Trophy, Award, Flame, FileText, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AchievementItem {
  id: string;
  category: string;
  title: string;
  issuer: string;
  badge: string;
  badgeColor: string;
  desc: string;
  icon: typeof Trophy;
  metrics: string;
}

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'hackmatrix-podium',
    category: 'COMPETITIVE HACKATHON',
    title: 'HackMatrix Hackathon — 3rd Place Winner',
    issuer: 'National Technical Hackathon',
    badge: 'PODIUM FINISH // CASH PRIZE & TROPHY',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/60',
    desc: 'Secured 3rd place overall in an intensive competitive hackathon, prototyping and pitching an end-to-end software innovation under rigorous evaluation.',
    icon: Trophy,
    metrics: 'Cash Prize & Trophy Awarded',
  },
  {
    id: 'sih-2025',
    category: 'NATIONAL COMPETITION',
    title: 'Smart India Hackathon (SIH 2025) — Finalist',
    issuer: 'Ministry of Education & AICTE',
    badge: 'NATIONAL LEVEL FINALIST',
    badgeColor: 'border-violet-500/40 text-violet-400 bg-violet-950/60',
    desc: 'Selected as national finalist in India’s flagship national innovation competition, engineering software solutions for nationwide public challenges.',
    icon: Award,
    metrics: 'Nationwide Finalist Selection',
  },
  {
    id: 'patents',
    category: 'INTELLECTUAL PROPERTY',
    title: '2 Published Product Patents',
    issuer: 'Patent Office of India',
    badge: 'OFFICIALLY PUBLISHED PATENTS',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/60',
    desc: 'Published 2 formal patents for engineering and software methodologies, demonstrating rigorous research and novelty in problem solving.',
    icon: FileText,
    metrics: '2 Publications Filed',
  },
  {
    id: 'leetcode-streak',
    category: 'ALGORITHMIC MASTERY',
    title: 'LeetCode 100-Day Problem-Solving Streak',
    issuer: 'LeetCode Platform',
    badge: '100+ DAYS CONTINUOUS COMMITMENT',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/60',
    desc: 'Maintained an unbroken 100-day daily problem-solving streak on LeetCode, tackling complex data structures, dynamic programming, and graph algorithms.',
    icon: Flame,
    metrics: '100+ Days Active Streak',
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.achieve-header-block',
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
      id="achievements"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="achieve-header-block mb-16 flex flex-col items-start border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            05 // Honors &amp; Milestones
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Verified Achievements
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mt-4 leading-relaxed">
            Tangible milestones earned through competitive programming, nationwide hackathons, and published technical research.
          </p>
        </div>

        {/* 2x2 Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ACHIEVEMENTS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-850/90 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                    {item.issuer}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {item.metrics}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    VERIFIED
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
