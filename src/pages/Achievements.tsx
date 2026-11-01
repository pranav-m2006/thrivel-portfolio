import { useEffect } from 'react';
import { 
  Trophy, 
  Award, 
  Flame, 
  FileText, 
  CheckCircle2, 
  Medal 
} from 'lucide-react';

export default function Achievements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="achievements-page-view min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-slate-800 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            05 // Honors &amp; Milestones
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Honors, Hackathons &amp; Recognition
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Tangible milestones earned through competitive programming, nationwide hackathons, and published technical research.
          </p>
        </div>

        {/* 1. Featured Spotlight: HackMatrix Podium Winner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.12)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/40 font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-cyan-400" />
                Podium Finish // Cash Prize &amp; Trophy
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                HackMatrix Hackathon — 3rd Place Winner
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Secured 3rd place overall in an intensive national-level competitive hackathon. Designed, coded, and demonstrated an end-to-end software system under time-constrained sprint conditions, assessed by industry evaluators for technical architecture, feasibility, and user value.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  National Hackathon Evaluation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Cash Prize &amp; Official Trophy Awarded
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-950/70 border border-slate-800 text-center">
              <div className="w-20 h-20 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                <Medal className="w-10 h-10 text-cyan-400" />
              </div>
              <span className="text-3xl font-black font-mono text-white mb-1">3rd PLACE</span>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                HackMatrix Podium
              </span>
            </div>
          </div>
        </div>

        {/* 2. Grid of Distinct Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card A: SIH 2025 Finalist */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/40 transition-all flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  National Finalist
                </span>
                <Award className="w-6 h-6 text-violet-400 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                Smart India Hackathon (SIH 2025)
              </h3>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Ministry of Education &amp; AICTE
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Qualified as a National Finalist in India’s premier nationwide student innovation initiative. Collaborated on architecting digital solutions targeting pressing civic and technical problem statements defined by central government bodies.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
              <span className="text-violet-400 font-semibold">SIH 2025 FINALIST</span>
              <span>NATIONWIDE SELECTION</span>
            </div>
          </div>

          {/* Card B: 2 Published Product Patents */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Intellectual Property
                </span>
                <FileText className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                2 Published Patents
              </h3>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Patent Office of India
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Authored and formally published 2 product patents detailing technical methodologies in hardware-software integration and automated data collection systems, representing rigorous empirical research.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">2 PUBLICATIONS</span>
              <span>VERIFIED PATENTS</span>
            </div>
          </div>

          {/* Card C: LeetCode 100-Day Streak */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Algorithmic Consistency
                </span>
                <Flame className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                100-Day LeetCode Streak
              </h3>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                LeetCode Platform
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Maintained an unbroken daily problem-solving cadence across 100+ consecutive days. Solved algorithmic challenges spanning dynamic programming, binary trees, graph traversals, and complexity optimization in C++ and Java.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
              <span className="text-amber-400 font-semibold">100+ DAYS ACTIVE</span>
              <span>DSA CONSISTENCY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
