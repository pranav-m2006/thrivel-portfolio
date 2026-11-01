import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import AchievementsSection from '../components/AchievementsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function Home() {
  // Synchronize smooth scroll
  useLenisScroll();

  // Scroll to hash on initial load if present (e.g. #projects)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="home-master-container relative z-10">
      {/* 1. CINEMATIC DARK 3D HERO */}
      <HeroSection />

      {/* 2. HIGHEST PRIORITY: SELECTED PROJECTS SHOWCASE (Immediately follows Hero!) */}
      <ProjectsSection />

      {/* SUBTLE HIGH-TECH CREDENTIALS MARQUEE */}
      <LuxuryMarquee
        theme="dark"
        items={[
          'FRONTEND ARCHITECTURE',
          'APPLIED MACHINE LEARNING',
          'AI SKILL TWIN (LIVE APP)',
          'DISASTER MANAGEMENT SYSTEM',
          'HACKMATRIX 3RD PLACE',
          'SIH 2025 NATIONAL FINALIST',
          '2 PUBLISHED PATENTS',
          'LEETCODE 100-DAY STREAK',
          'OPEN FOR INTERNSHIPS',
        ]}
      />

      {/* 3. ABOUT ME & ENGINEERING PHILOSOPHY */}
      <AboutSection />

      {/* 4. TECHNICAL COMPETENCIES & CATEGORIZED SKILLS */}
      <SkillsSection />

      {/* 5. PROFESSIONAL EXPERIENCE TIMELINE */}
      <ExperienceSection />

      {/* 6. VERIFIED ACHIEVEMENTS & HONORS */}
      <AchievementsSection />

      {/* 7. SCHOLASTIC EDUCATION */}
      <EducationSection />

      {/* 8. COLLABORATION MANIFESTO & CONTACT */}
      <ContactSection />
    </div>
  );
}
