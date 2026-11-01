import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  BrainCircuit, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Terminal
} from 'lucide-react';

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
      'Specialized focus in Applied AI/ML algorithms and modern Web Technologies',
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
      'Rigorous foundation in Mathematics, Computer Science, Physics, and Chemistry',
      'Built early programming foundations in algorithmic problem solving and logic',
      'Graduated with academic distinction and high scholastic honors',
    ],
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-view min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section 1: Editorial Introduction (NO PROFILE IMAGE) */}
        <section className="border-b border-slate-800 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-400 font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            02 // About Me
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            Engineering Systems with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Discipline &amp; Curiosity.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                I am <strong className="text-white">Pranav M.</strong>, a Computer Science and Technology student at <strong className="text-cyan-400 font-semibold">SNS College of Engineering</strong> with an active focus on modern frontend engineering, interactive web applications, and applied AI/ML systems.
              </p>
              <p className="text-slate-400">
                Rather than treating artificial intelligence and frontend architecture as disconnected fields, I focus on integrating them: taking predictive machine learning algorithms and wrapping them in clean, responsive, human-respectful web interfaces.
              </p>
              <p className="text-slate-400">
                Whether architecting dynamic career roadmaps for students in <em>AI Skill Twin</em> or modeling meteorological disaster risks in the <em>Disaster Management System</em>, I build software that addresses real problems with predictable execution.
              </p>
            </div>

            {/* Quick Metadata Spec Panel */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 uppercase">Specialization</span>
                <span className="text-sm font-semibold text-white">Frontend &amp; Applied AI/ML</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 uppercase">Degree</span>
                <span className="text-sm font-semibold text-cyan-400">B.E. Computer Science &amp; Tech</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 uppercase">Current CGPA</span>
                <span className="text-sm font-mono font-bold text-white">8.00 / 10.0</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
                <span className="text-sm text-slate-300">Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-mono text-slate-400 uppercase">Status</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Available for Internships
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Engineering Pillars */}
        <section className="space-y-8">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Core Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <Code2 className="w-7 h-7 text-cyan-400 mb-5" />
              <h3 className="text-xl font-bold text-white mb-2">Disciplined Architecture</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clean component trees, strict TypeScript typing, predictable state transitions, and zero unnecessary re-renders.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 transition-all">
              <BrainCircuit className="w-7 h-7 text-violet-400 mb-5" />
              <h3 className="text-xl font-bold text-white mb-2">Applied AI Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Grounding complex predictive algorithms and large language model APIs in real, accessible, and fast web tools.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all">
              <ShieldCheck className="w-7 h-7 text-emerald-400 mb-5" />
              <h3 className="text-xl font-bold text-white mb-2">Human Respect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prioritizing real utility, fast load times, and intuitive design over superficial animations and vanity metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Professional Experience (Sub-section of About) */}
        <section className="space-y-8 border-t border-slate-800 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Work History
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Professional Experience
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-500">
              [ 03 Industry Internships ]
            </span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.company}
                className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition-all"
              >
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
                    <p className="text-base text-cyan-400 font-semibold mt-1">
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

                <div className="space-y-2 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

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
            ))}
          </div>
        </section>

        {/* Section 4: Education (Sub-section of About) */}
        <section className="space-y-8 border-t border-slate-800 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                Scholastic Foundations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Education
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION_HISTORY.map((edu) => (
              <div
                key={edu.institution}
                className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-cyan-400 font-mono block">
                        {edu.score}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        {edu.scoreLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {edu.institution}
                  </h3>

                  <p className="text-base text-cyan-300 font-medium mb-3">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {edu.highlights.map((h, i) => (
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
        </section>

        {/* Bottom Callout to Projects */}
        <section className="p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Want to inspect my code and case studies?
            </h3>
            <p className="text-slate-400 text-sm">
              Discover AI Skill Twin and the Disaster Management System in full technical detail.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>View Selected Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
