import { useEffect } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import ContactSection from '../components/ContactSection';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';

export default function Contact() {
  useLenisScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper contact-page-container">
      <PageHeroHeadline
        eyebrow="07 / CONNECT &amp; COLLABORATE"
        blackText="Have an idea"
        accentText="worth building?"
        arrowHref="#contact"
        leadParagraph={
          <>
            I am always interested in connecting with people who enjoy building{' '}
            <strong>useful software</strong>, exploring <strong>technology</strong>, and solving{' '}
            <strong>practical problems</strong>. Whether you have an internship role, collaborative project, or engineering question, my inbox is open.
          </>
        }
        tags={[
          'pranav.m.cst.2024@snsce.ac.in',
          'GitHub: pranav-m2006',
          'LinkedIn: pranav-m-23153a32b',
          'Coimbatore · Tamil Nadu',
          'Open for Internships',
        ]}
      />

      <LuxuryMarquee
        theme="dark"
        items={[
          'OPEN FOR INTERNSHIPS',
          'COIMBATORE TAMIL NADU',
          'FRONTEND ENGINEERING',
          'APPLIED AI COLLABORATION',
          'VERIFIED GITHUB',
          'ACTIVE LINKEDIN',
          'DIRECT INQUIRIES WELCOME',
        ]}
      />

      <ContactSection />
    </div>
  );
}
