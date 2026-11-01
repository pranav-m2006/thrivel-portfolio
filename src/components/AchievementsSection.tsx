import { useEffect, useRef } from 'react';
import { Trophy, Award, BookOpen, Flame, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AchievementItem {
  id: string;
  category: string;
  title: string;
  organization: string;
  detail: string;
  metrics?: string;
  icon: typeof Trophy;
  accent: string;
}

const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'sih-2025',
    category: 'National Innovation Hackathon',
    title: 'Smart India Hackathon 2025 Finalist',
    organization: 'Ministry of Education & AICTE · National Level',
    detail: 'Participated at the national level, advancing through competitive evaluation stages with an applied software solution for disaster management and community safety.',
    metrics: 'National Level Finalist',
    icon: Award,
    accent: '#C63D2F',
  },
  {
    id: 'patents',
    category: 'Intellectual Property',
    title: 'Two Certified Product Patents',
    organization: 'Intellectual Property India · Co-Inventor',
    detail: 'Co-invented two certified product patents addressing applied technical methodologies and real-world system implementations as documented in professional engineering filings.',
    metrics: '2 Granted / Published Patents',
    icon: BookOpen,
    accent: '#A84432',
  },
  {
    id: 'leetcode',
    category: 'Algorithmic Problem Solving',
    title: '150+ LeetCode Problems Solved',
    organization: 'LeetCode · Java & C++ Consistent Track',
    detail: 'Achieved an unbroken 100-day consistency streak solving algorithmic challenges across arrays, binary trees, dynamic programming, and graph traversals.',
    metrics: '100-Day Unbroken Streak',
    icon: Flame,
    accent: '#C66A3D',
  },
  {
    id: 'paper-presentation',
    category: 'Academic Research & Presentation',
    title: 'Technical Research Paper Presentation',
    organization: 'College-Level Technical Symposium',
    detail: 'Delivered an academic presentation analyzing technical computing concepts and software architectures before faculty and peer review panels.',
    metrics: 'Symposium Presenter',
    icon: FileText,
    accent: '#75685D',
  },
  {
    id: 'competitions',
    category: 'Technical Hackathons & Contests',
    title: 'GPTathon, CodeSprint & Code O\'Clock',
    organization: 'Institutional Technical Competitions',
    detail: 'Demonstrated rapid software prototyping and algorithmic problem solving under strict time constraints across multiple college-level coding events.',
    metrics: 'Multi-Event Participant',
    icon: Sparkles,
    accent: '#A84432',
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.achieve-hero-banner', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
        },
        scale: 0.96,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
      });

      gsap.from('.achieve-card-item', {
        scrollTrigger: {
          trigger: '.achieve-grid-stack',
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

  return (
    <section className="achievements-master-section bg-cream" id="achievements" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-intro-header">
          <span className="section-eyebrow-stamp">05 / COMPETITIVE &amp; RESEARCH RECOGNITION</span>
          <h2 className="section-main-heading">
            Verified Milestones &amp; Achievements.
          </h2>
          <p className="section-lead-paragraph">
            A documented record of competitive programming achievements, hackathon placements, and patent co-inventions achieved through disciplined technical practice.
          </p>
        </div>

        {/* PROMINENT SPOTLIGHT: HackMatrix 3rd Place */}
        <div className="achieve-hero-banner">
          <div className="achieve-hero-trophy-badge">
            <Trophy size={36} color="#D9C2A3" />
          </div>

          <div className="achieve-hero-content">
            <div className="achieve-hero-top-row">
              <span className="achieve-pill-gold">HACKMATRIX · ERODE</span>
              <span className="achieve-pill-sub">Shortlisted after Review 2 · Podium Finish</span>
            </div>
            <h3 className="achieve-hero-headline">Secured Third Place — HackMatrix</h3>
            <p className="achieve-hero-sub">
              Competed through multi-stage technical reviews, advancing past Round 2 and securing Third Place overall in the flagship Erode regional hackathon with a demonstrated working software prototype.
            </p>
            <div className="achieve-hero-tags">
              <span className="hero-tag-item"><CheckCircle2 size={13} /> Review 2 Defense Shortlist</span>
              <span className="hero-tag-item"><CheckCircle2 size={13} /> Podium Placement (3rd Place)</span>
              <span className="hero-tag-item"><CheckCircle2 size={13} /> Working Technical Prototype</span>
            </div>
          </div>
        </div>

        {/* Secondary Achievements Grid */}
        <div className="achieve-grid-stack">
          {ACHIEVEMENTS_LIST.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="achieve-card-item">
                <div className="achieve-card-topbar">
                  <div className="achieve-icon-wrap" style={{ color: item.accent }}>
                    <Icon size={20} />
                  </div>
                  <span className="achieve-category-tag">{item.category}</span>
                </div>

                <h4 className="achieve-card-title">{item.title}</h4>
                <div className="achieve-org-name">{item.organization}</div>
                <p className="achieve-card-detail">{item.detail}</p>

                {item.metrics && (
                  <div className="achieve-metrics-pill">
                    <span className="metrics-dot" />
                    <span>{item.metrics}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

