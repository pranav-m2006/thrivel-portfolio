import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import AchievementsSection from '../components/AchievementsSection';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function Achievements() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper achievements-page-container">
      <PageHeroHeadline
        eyebrow="05 / COMPETITIVE &amp; RESEARCH RECOGNITION"
        blackText="Proof of showing up"
        accentText="consistently."
        arrowHref="#achievements"
        leadParagraph={
          <>
            A verified record of competitive hackathon placements, national innovation finals, co-invented product patents, and disciplined algorithmic practice.
          </>
        }
        tags={[
          'HackMatrix 3rd Place',
          'SIH \'25 National Finalist',
          '2 Product Patents',
          'LeetCode 100-Day Streak',
          '150+ Solved Challenges',
        ]}
      />

      <LuxuryMarquee
        theme="dark"
        items={[
          'HACKMATRIX 3RD PLACE',
          'SIH 2025 NATIONAL FINALIST',
          '2 CO-INVENTED PRODUCT PATENTS',
          '150+ LEETCODE PROBLEMS',
          '100-DAY CONSISTENCY STREAK',
          'TECHNICAL SYMPOSIUM SPEAKER',
        ]}
      />

      <AchievementsSection />
    </div>
  );
}
