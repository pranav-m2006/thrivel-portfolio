import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import SkillsSection from '../components/SkillsSection';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function Skills() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper skills-page-container">
      <PageHeroHeadline
        eyebrow="02 / TECHNICAL COMPETENCIES"
        blackText="Tools chosen for"
        accentText="predictable execution."
        arrowHref="#skills"
        leadParagraph={
          <>
            A structured breakdown of my technical competencies across programming languages, frontend engineering, backend fundamentals, and applied machine learning.
          </>
        }
        tags={[
          'Java & C++',
          'React.js & TypeScript',
          'Node.js & REST APIs',
          'Applied Machine Learning',
          'Git & GitHub',
        ]}
      />

      <LuxuryMarquee
        theme="dark"
        items={[
          'JAVA',
          'JAVASCRIPT ES6+',
          'C & C++',
          'REACT.JS',
          'HTML5 & CSS3',
          'NODE.JS',
          'GIT & GITHUB',
          'APPLIED AI / ML',
        ]}
      />

      <SkillsSection />
    </div>
  );
}
