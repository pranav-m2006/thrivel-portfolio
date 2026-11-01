import { useEffect, useRef, useState } from 'react';
import { Code, Layout, Server, Wrench, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  icon: typeof Code;
  accent: string;
  skills: {
    name: string;
    tag: string;
    desc: string;
  }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming',
    category: 'Programming Languages',
    subtitle: 'Core systems & object-oriented programming foundations',
    icon: Terminal,
    accent: '#A84432',
    skills: [
      { name: 'Java', tag: 'OOP & DSA', desc: 'Object-oriented architecture, data structures, algorithms, and modular design patterns.' },
      { name: 'JavaScript', tag: 'ES6+ & Web APIs', desc: 'Modern async execution, DOM APIs, event loop, functional programming, and promises.' },
      { name: 'C', tag: 'Systems Logic', desc: 'Manual memory pointers, structural procedural logic, and low-level computing principles.' },
      { name: 'C++', tag: 'Competitive & STL', desc: 'Standard Template Library (STL), memory management, and high-performance algorithmic execution.' },
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend Engineering',
    subtitle: 'Modern reactive web interfaces with clean ergonomics',
    icon: Layout,
    accent: '#C63D2F',
    skills: [
      { name: 'React.js', tag: 'Component Architecture', desc: 'Declarative component design, custom hooks, virtual DOM synchronization, and unidirectional state.' },
      { name: 'HTML5', tag: 'Semantic Structure', desc: 'Accessible document landmarks, WCAG AA compliance, and clean markup hierarchy.' },
      { name: 'CSS3', tag: 'Layouts & Animation', desc: 'CSS Grid, Flexbox, custom design tokens, container queries, and hardware-accelerated transitions.' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & Data',
    subtitle: 'Server runtimes, REST APIs & data modeling',
    icon: Server,
    accent: '#75685D',
    skills: [
      { name: 'Node.js', tag: 'Runtime Environment', desc: 'Asynchronous event-driven server programming, package management, and microservice APIs.' },
    ],
  },
  {
    id: 'tools',
    category: 'Developer Tools & Platforms',
    subtitle: 'Version control, collaborative workflows & rapid prototyping',
    icon: Wrench,
    accent: '#A84432',
    skills: [
      { name: 'Git', tag: 'Version Control', desc: 'Branching strategies, atomic commit histories, merging, and distributed revision control.' },
      { name: 'GitHub', tag: 'Collaboration', desc: 'Remote repositories, issue tracking, continuous integration, and open-source contributions.' },
      { name: 'FlutterFlow', tag: 'Rapid Prototyping', desc: 'Visual mobile interface construction, state logic mapping, and rapid proof-of-concept iteration.' },
    ],
  },
  {
    id: 'interests',
    category: 'Core Focus & Areas of Interest',
    subtitle: 'Active intellectual exploration & applied engineering research',
    icon: Sparkles,
    accent: '#C66A3D',
    skills: [
      { name: 'Artificial Intelligence & Machine Learning', tag: 'Applied ML', desc: 'Predictive modeling (Random Forest), model evaluation, and LLM API integrations for practical user challenges.' },
      { name: 'Data Structures & Algorithms', tag: 'Problem Solving', desc: 'Array manipulation, linked lists, trees, graphs, sorting algorithms, and space-time complexity optimization.' },
      { name: 'Full-Stack Development', tag: 'End-to-End', desc: 'Connecting client interfaces to server APIs, database schema synchronization, and cohesive system architecture.' },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.skill-card-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredGroups = activeCategory === 'all'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.id === activeCategory);

  return (
    <section className="skills-master-section bg-ivory" id="skills" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-intro-header">
          <span className="section-eyebrow-stamp">02 / TECHNICAL COMPETENCIES</span>
          <h2 className="section-main-heading">
            Verified Stack &amp; Architectural Tools.
          </h2>
          <p className="section-lead-paragraph">
            A grounded overview of my technical toolset. Categorized directly from demonstrated project implementations and verified coursework, without arbitrary proficiency ratings.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-row">
          <button
            type="button"
            className={`skill-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span>All Technologies</span>
          </button>
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.id}
              type="button"
              className={`skill-filter-btn ${activeCategory === group.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(group.id)}
            >
              <span>{group.category}</span>
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="skills-groups-grid">
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.id} className="skill-card-item">
                <div className="skill-group-top">
                  <div className="skill-group-icon-wrap" style={{ color: group.accent }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="skill-group-title">{group.category}</h3>
                    <p className="skill-group-subtitle">{group.subtitle}</p>
                  </div>
                </div>

                <div className="skill-items-list">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-tech-badge">
                      <div className="skill-badge-header">
                        <span className="skill-tech-name">{skill.name}</span>
                        <span className="skill-tech-tag">{skill.tag}</span>
                      </div>
                      <p className="skill-tech-desc">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Standards Stamp */}
        <div className="skills-standards-banner">
          <div className="skills-banner-item">
            <CheckCircle2 size={16} color="var(--color-terracotta)" />
            <span>Strictly verified skills from academic coursework &amp; repositories</span>
          </div>
          <div className="skills-banner-item">
            <CheckCircle2 size={16} color="var(--color-terracotta)" />
            <span>Active daily LeetCode practice across Java and C++</span>
          </div>
          <div className="skills-banner-item">
            <CheckCircle2 size={16} color="var(--color-terracotta)" />
            <span>Zero exaggerated percentages or arbitrary expertise claims</span>
          </div>
        </div>

      </div>
    </section>
  );
}
