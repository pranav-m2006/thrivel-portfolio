import { useState, useEffect } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Terminal, 
  Wrench, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'aiml' | 'tools';
  roleTag: string;
  appliedIn: string;
  description: string;
}

const SKILL_CATALOG: SkillItem[] = [
  // Programming Languages
  {
    name: 'Java',
    category: 'languages',
    roleTag: 'Object-Oriented Architecture',
    appliedIn: 'Data Structures & Algorithms Coursework',
    description: 'Applied for class-based software architecture, algorithmic logic, and fundamental data structures.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'languages',
    roleTag: 'Modern Web Standard',
    appliedIn: 'Thrivels, CodSoft & Full-Stack Projects',
    description: 'Extensive use in modern asynchronous programming, DOM lifecycle manipulation, and API contracts.',
  },
  {
    name: 'C',
    category: 'languages',
    roleTag: 'Systems & Memory Foundations',
    appliedIn: 'Undergraduate Computer Science Foundations',
    description: 'Foundational programming in memory allocation, pointers, and low-level algorithmic efficiency.',
  },
  {
    name: 'C++',
    category: 'languages',
    roleTag: 'Competitive Programming & OOP',
    appliedIn: 'LeetCode Problem-Solving Practice',
    description: 'Used for high-speed algorithmic problem solving, Standard Template Library (STL), and competitive contests.',
  },
  {
    name: 'Python',
    category: 'languages',
    roleTag: 'Data & Machine Learning',
    appliedIn: 'Disaster Management ML Models',
    description: 'Primary scripting language for model training, data preprocessing, and automated scientific pipelines.',
  },

  // Frontend Development
  {
    name: 'React.js',
    category: 'frontend',
    roleTag: 'Component Architecture',
    appliedIn: 'AI Skill Twin & Thrivels Internship',
    description: 'Building modular declarative interfaces, custom hooks, predictable state management, and reusable components.',
  },
  {
    name: 'HTML5',
    category: 'frontend',
    roleTag: 'Semantic Web Structure',
    appliedIn: 'All Web Implementations',
    description: 'Semantic markup, accessible structure (a11y), form validations, and clean SEO hierarchy.',
  },
  {
    name: 'CSS3 / Modern CSS',
    category: 'frontend',
    roleTag: 'Responsive Layouts & Styling',
    appliedIn: 'All Portfolios & Design Systems',
    description: 'Advanced Flexbox, CSS Grid, custom properties (tokens), CSS animations, and modern utility classes.',
  },

  // Backend Development
  {
    name: 'Node.js',
    category: 'backend',
    roleTag: 'JavaScript Server Runtime',
    appliedIn: 'AI Skill Twin Backend & API Services',
    description: 'Handling server-side runtime operations, RESTful endpoints, file parsing, and external API requests.',
  },

  // AI / ML
  {
    name: 'AI / ML Fundamentals',
    category: 'aiml',
    roleTag: 'Theoretical Foundations',
    appliedIn: 'SNSCE Coursework & Research',
    description: 'Supervised and unsupervised learning principles, cost function optimization, and model evaluation metrics.',
  },
  {
    name: 'Machine Learning Concepts & Projects',
    category: 'aiml',
    roleTag: 'Applied Data Modeling',
    appliedIn: 'Disaster Management System',
    description: 'Trained predictive classification models for rainfall patterns and hazard severity using Scikit-learn and Pandas.',
  },
  {
    name: 'Google Gemini API',
    category: 'aiml',
    roleTag: 'Generative AI Orchestration',
    appliedIn: 'AI Skill Twin Platform',
    description: 'Automated resume competency parsing, prompt engineering, and intelligent milestone recommendation generation.',
  },

  // Tools & Technologies
  {
    name: 'Git',
    category: 'tools',
    roleTag: 'Distributed Version Control',
    appliedIn: 'Daily Development Workflow',
    description: 'Branching strategies, collaborative workflows, commit histories, and code conflict resolution.',
  },
  {
    name: 'GitHub',
    category: 'tools',
    roleTag: 'Code Collaboration & CI/CD',
    appliedIn: 'Open-Source Projects & Deployments',
    description: 'Repository hosting, continuous deployment triggers, pull request reviews, and issue tracking.',
  },
  {
    name: 'FlutterFlow',
    category: 'tools',
    roleTag: 'Rapid Low-Code Prototyping',
    appliedIn: 'Mobile UI Ideation & Prototypes',
    description: 'Rapid design iteration and multi-platform prototyping for application user flows.',
  },
  {
    name: 'VS Code',
    category: 'tools',
    roleTag: 'Primary IDE',
    appliedIn: 'Full-Stack Development',
    description: 'Configured with TypeScript linters, Git extensions, and debuggers for rapid web development.',
  },
  {
    name: 'Vercel',
    category: 'tools',
    roleTag: 'Edge Deployment Platform',
    appliedIn: 'AI Skill Twin & Live Deployments',
    description: 'Production hosting, automated branch previews, serverless routing, and edge performance optimization.',
  },
  {
    name: 'Postman',
    category: 'tools',
    roleTag: 'API Inspection & Testing',
    appliedIn: 'RESTful Endpoint Verification',
    description: 'Validating JSON payload structures, status codes, query parameters, and API error states.',
  },
  {
    name: 'Figma',
    category: 'tools',
    roleTag: 'UI/UX Design & Wireframing',
    appliedIn: 'Interface Ideation',
    description: 'Wireframing layouts, component variants, spacing grids, and design handoff specifications.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Technologies', icon: Sparkles },
  { id: 'languages', label: 'Programming Languages', icon: Code },
  { id: 'frontend', label: 'Frontend Development', icon: Layout },
  { id: 'backend', label: 'Backend Development', icon: Server },
  { id: 'aiml', label: 'AI & Machine Learning', icon: Terminal },
  { id: 'tools', label: 'Tools & Technologies', icon: Wrench },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredSkills =
    activeTab === 'all'
      ? SKILL_CATALOG
      : SKILL_CATALOG.filter((s) => s.category === activeTab);

  return (
    <div className="skills-page-view min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-slate-800 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            03 // Technical Competencies
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Skills &amp; Technology Stack
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Technologies and engineering workflows verified through academic projects, open-source repositories, and web development internships.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 5 Distinct Category Highlights (when 'all' is active) */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <Code className="w-6 h-6 text-cyan-400 mb-3" />
              <div>
                <h3 className="text-white font-bold text-base mb-1">Languages</h3>
                <p className="text-xs text-slate-400">Java, JavaScript, C, C++, Python</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <Layout className="w-6 h-6 text-sky-400 mb-3" />
              <div>
                <h3 className="text-white font-bold text-base mb-1">Frontend</h3>
                <p className="text-xs text-slate-400">React.js, HTML5, CSS3, Modern UI</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <Server className="w-6 h-6 text-violet-400 mb-3" />
              <div>
                <h3 className="text-white font-bold text-base mb-1">Backend</h3>
                <p className="text-xs text-slate-400">Node.js, RESTful APIs, JSON</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <Terminal className="w-6 h-6 text-emerald-400 mb-3" />
              <div>
                <h3 className="text-white font-bold text-base mb-1">AI / ML</h3>
                <p className="text-xs text-slate-400">Scikit-learn, Weather Models, Gemini</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <Wrench className="w-6 h-6 text-amber-400 mb-3" />
              <div>
                <h3 className="text-white font-bold text-base mb-1">Tools</h3>
                <p className="text-xs text-slate-400">Git, GitHub, FlutterFlow, Vercel</p>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850/90 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-full">
                    {skill.roleTag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-2">
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-slate-500">Applied in:</span> {skill.appliedIn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
