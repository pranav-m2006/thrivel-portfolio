import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import ProjectsSection from '../components/ProjectsSection';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function Projects() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper projects-page-container">
      {/* Editorial Headline */}
      <PageHeroHeadline
        eyebrow="03 / VERIFIED FEATURED SYSTEMS"
        blackText="Ideas that earned"
        accentText="a real screen."
        arrowHref="#projects"
        leadParagraph={
          <>
            Two substantial engineering case studies built to address concrete challenges in career intelligence and environmental disaster preparedness.
            Each project is documented with: <strong>Problem Statement</strong>,{' '}
            <strong>Architectural Solution</strong>,{' '}
            <strong>Verified Codebase</strong>, and{' '}
            <strong>Technical Contributions</strong>.
          </>
        }
        tags={[
          'AI Skill Twin',
          'Disaster Management System',
          'Offline-First IndexedDB',
          'Random Forest Prediction',
          'Verified GitHub Repositories',
        ]}
      />

      <LuxuryMarquee
        theme="dark"
        items={[
          'AI SKILL TWIN',
          'DISASTER MANAGEMENT SYSTEM',
          'OFFLINE-FIRST ARCHITECTURE',
          'RANDOM FOREST ML',
          'GEMINI AI INTEGRATION',
          'LEAFLET GIS MAPPING',
          'VERIFIED CODEBASES',
        ]}
      />

      {/* Featured Projects Showcase with Case Study Modal */}
      <ProjectsSection />
    </div>
  );
}
