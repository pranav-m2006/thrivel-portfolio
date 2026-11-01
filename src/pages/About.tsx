import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import AboutSection from '../components/AboutSection';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function About() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper about-page-container">
      <PageHeroHeadline
        eyebrow="01 / DEVELOPMENT JOURNEY &amp; FOUNDATION"
        blackText="Calm interfaces."
        accentText="Intelligent ideas."
        arrowHref="#about"
        leadParagraph={
          <>
            I am a Computer Science and Technology student at SNS College of Engineering with practical experience in frontend engineering and applied AI/ML systems. I focus on turning complex technical concepts into clear, responsive, and reliable software.
          </>
        }
        tags={[
          'SNSCE · B.E. CST',
          'CGPA: 8.00/10',
          'SIH \'25 National Finalist',
          'HackMatrix 3rd Place',
          '2 Product Patents',
        ]}
      />

      <LuxuryMarquee
        theme="dark"
        items={[
          'B.E. COMPUTER SCIENCE & TECHNOLOGY',
          'SNS COLLEGE OF ENGINEERING',
          'RESPONSIVE REACT INTERFACES',
          'APPLIED MACHINE LEARNING',
          'LEETCODE 100-DAY STREAK',
          'COIMBATORE TAMIL NADU',
        ]}
      />

      <AboutSection />
    </div>
  );
}
