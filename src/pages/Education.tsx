import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import EducationSection from '../components/EducationSection';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function Education() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper education-page-container">
      <PageHeroHeadline
        eyebrow="06 / ACADEMIC BACKGROUND"
        blackText="Foundations built"
        accentText="step by step."
        arrowHref="#education"
        leadParagraph={
          <>
            Academic milestones and verified coursework grounding my engineering discipline in computer science and technology at SNS College of Engineering (CGPA 8.00/10).
          </>
        }
        tags={[
          'SNS College of Engineering',
          'B.E. Computer Science & Technology',
          'CGPA: 8.00 / 10',
          'Presentation Convent MHSS',
          'Coimbatore · Tamil Nadu',
        ]}
      />

      <LuxuryMarquee
        theme="dark"
        items={[
          'SNS COLLEGE OF ENGINEERING',
          'B.E. COMPUTER SCIENCE & TECHNOLOGY',
          'CGPA 8.00 / 10',
          'DATA STRUCTURES & ALGORITHMS',
          'OBJECT-ORIENTED ARCHITECTURE',
          'COIMBATORE TAMIL NADU',
        ]}
      />

      <EducationSection />
    </div>
  );
}

