import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
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
    <div className="home-master-container">
      {/* 1. CINEMATIC 2-COLUMN HERO (with 3D Neural Software Lattice) */}
      <HeroSection />

      {/* SUBTLE CONTINUOUS LUXURY MARQUEE */}
      <LuxuryMarquee
        theme="dark"
        items={[
          'FRONTEND ENGINEERING',
          'APPLIED AI & MACHINE LEARNING',
          'SNS COLLEGE OF ENGINEERING',
          'SIH 2025 NATIONAL FINALIST',
          'HACKMATRIX 3RD PLACE',
          '2 PRODUCT PATENTS',
          'LEETCODE 100-DAY STREAK',
          'OPEN FOR INTERNSHIPS',
        ]}
      />

      {/* 2. ABOUT ME & DEVELOPMENT JOURNEY */}
      <AboutSection />

      {/* 3. TECHNICAL COMPETENCIES & STACK */}
      <SkillsSection />

      {/* 4. FEATURED PROJECTS: AI SKILL TWIN & DISASTER MANAGEMENT SYSTEM */}
      <ProjectsSection />

      {/* 5. PROFESSIONAL EXPERIENCE TIMELINE */}
      <ExperienceSection />

      {/* 6. VERIFIED ACHIEVEMENTS & MILESTONES */}
      <AchievementsSection />

      {/* 7. EDUCATION & SCHOLASTIC BACKGROUND */}
      <EducationSection />

      {/* 8. DIRECT CONTACT & COLLABORATION MANIFESTO */}
      <ContactSection />
    </div>
  );
}
