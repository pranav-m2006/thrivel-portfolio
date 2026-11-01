import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import ExperienceSection from '../components/ExperienceSection';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function Experience() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper experience-page-container">
      <PageHeroHeadline
        eyebrow="04 / PRACTICAL INDUSTRY ENGAGEMENTS"
        blackText="Work shaped by"
        accentText="real responsibilities."
        arrowHref="#experience"
        leadParagraph={
          <>
            A chronological timeline of web development internships at Thrivels, CodSoft, and InternPe. Demonstrating practical application of frontend engineering, interface usability, and collaborative Git version control.
          </>
        }
        tags={[
          'Web Development Internships',
          'Thrivels (Current)',
          'CodSoft',
          'InternPe',
          'Git Version Control',
        ]}
      />

      <LuxuryMarquee
        theme="dark"
        items={[
          'THRIVELS INTERNSHIP',
          'CODSOFT INTERNSHIP',
          'INTERNPE INTERNSHIP',
          'RESPONSIVE INTERFACES',
          'ACCESSIBLE WEB STANDARDS',
          'GIT COLLABORATION',
        ]}
      />

      <ExperienceSection />
    </div>
  );
}
