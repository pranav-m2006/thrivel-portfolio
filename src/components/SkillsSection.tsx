import { useEffect, useRef, useState } from 'react';
import { Code, Layout, Server, Wrench, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  category: string;
  tag: string;
  verifiedIn: string;
}

const ALL_SKILLS: SkillItem[] = [
  // 1. Programming Languages
  { name: 'Python', category: 'languages', tag: 'Core Language', verifiedIn: 'Disaster Management ML Models' },
  { name: 'Java', category: 'languages', tag: 'Object-Oriented', verifiedIn: 'Academic Data Structures & Algorithms' },
  { name: 'C', category: 'languages', tag: 'Systems & Memory', verifiedIn: 'Foundational Computer Science' },
  { name: 'JavaScript (ES6+)', category: 'languages', tag: 'Web Standard', verifiedIn: 'Full-Stack React Applications' },
  { name: 'TypeScript', category: 'languages', tag: 'Type Safety', verifiedIn: 'AI Skill Twin & Production Portfolios' },

  // 2. Frontend Development
  { name: 'React', category: 'frontend', tag: 'Component Architecture', verifiedIn: 'AI Skill Twin & Internship Projects' },
  { name: 'Vite', category: 'frontend', tag: 'Modern Build Tool', verifiedIn: 'High-Performance Production Bundles' },
  { name: 'HTML5 & Semantic Web', category: 'frontend', tag: 'Structure & a11y', verifiedIn: 'All Web Implementations' },
  { name: 'CSS3 & Modern Layouts', category: 'frontend', tag: 'Flexbox, Grid & Keyframes', verifiedIn: 'Responsive Portfolios & Interfaces' },
  { name: 'Tailwind CSS', category: 'frontend', tag: 'Utility-First Styling', verifiedIn: 'Rapid UI Component Design' },
  { name: 'GSAP Animation', category: 'frontend', tag: 'Timeline & ScrollTrigger', verifiedIn: 'Interactive Web Animations' },

  // 3. Backend Development
  { name: 'Node.js', category: 'backend', tag: 'JavaScript Runtime', verifiedIn: 'Full-Stack API Orchestration' },
  { name: 'Express.js', category: 'backend', tag: 'Web Framework', verifiedIn: 'RESTful Endpoint Architectures' },
  { name: 'RESTful API Design', category: 'backend', tag: 'Client-Server Contracts', verifiedIn: 'AI Skill Twin & Data Services' },
  { name: 'JSON Data Pipelines', category: 'backend', tag: 'State Ingestion', verifiedIn: 'Meteorological & Profile Schemas' },

  // 4. AI / ML
  { name: 'Scikit-learn', category: 'aiml', tag: 'Machine Learning', verifiedIn: 'Disaster Classification Models' },
  { name: 'Pandas & NumPy', category: 'aiml', tag: 'Data Transformation', verifiedIn: 'Meteorological Data Cleaning' },
  { name: 'Weather Prediction Models', category: 'aiml', tag: 'Hazard Modeling', verifiedIn: 'Rainfall & Storm Surge Analysis' },
  { name: 'Google Gemini API', category: 'aiml', tag: 'Generative AI', verifiedIn: 'AI Skill Twin Resume Extraction' },
  { name: 'Prompt Engineering', category: 'aiml', tag: 'Structured Output', verifiedIn: 'Skill Gap Synthesis Protocols' },

  // 5. Tools & Technologies
  { name: 'Git & GitHub', category: 'tools', tag: 'Version Control', verifiedIn: 'Open-Source Repositories & CI' },
  { name: 'VS Code', category: 'tools', tag: 'Primary IDE', verifiedIn: 'Daily Development Workflow' },
  { name: 'Vercel', category: 'tools', tag: 'Edge Deployment', verifiedIn: 'Live Application Hosting' },
  { name: 'Postman', category: 'tools', tag: 'API Testing', verifiedIn: 'REST Endpoint Verification' },
  { name: 'Figma', category: 'tools', tag: 'UI Prototyping', verifiedIn: 'Interface & Layout Ideation' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Disciplines', icon: Sparkles },
  { id: 'languages', label: 'Programming Languages', icon: Code },
  { id: 'frontend', label: 'Frontend Development', icon: Layout },
  { id: 'backend', label: 'Backend Development', icon: Server },
  { id: 'aiml', label: 'AI & Machine Learning', icon: Terminal },
  { id: 'tools', label: 'Tools & Technologies', icon: Wrench },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? ALL_SKILLS
      : ALL_SKILLS.filter((s) => s.category === activeTab);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-header-block',
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
      id="skills"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="skills-header-block mb-14 flex flex-col items-start border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            03 // Technical Competencies
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mt-4 leading-relaxed">
            Technologies and frameworks verified through real-world software projects, hackathons, and web internships.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-850/90 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                    {skill.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-3">
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-cyan-400" />
                  {skill.verifiedIn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
