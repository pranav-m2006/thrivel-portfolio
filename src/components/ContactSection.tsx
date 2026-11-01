import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DisciplineOrigin from './DisciplineOrigin';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('pranav.m.cst.2024@snsce.ac.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-master-section bg-cream" id="contact" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-intro-header">
          <span className="section-eyebrow-stamp">07 / INITIATE CONVERSATION</span>
          <h2 className="section-main-heading">
            Connect &amp; Collaborate.
          </h2>
          <p className="section-lead-paragraph">
            I am always interested in discussing web development internships, full-stack projects, or applied AI research. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Catchy Collaboration Manifesto in Dark Theme */}
        <div className="contact-reveal-item" style={{ marginBottom: '56px' }}>
          <DisciplineOrigin
            theme="dark"
            badge="COMMUNICATION &amp; COLLABORATION"
            lines={[
              { text: 'CURIOSITY SPARKS', pop: 'CONNECTION.', popBg: 'crimson' },
              { text: 'CLARITY DRIVES', pop: 'COLLABORATION.', popBg: 'black', isMiddle: true },
              { text: 'CONSISTENCY EARNS', pop: 'TRUST.', popBg: 'crimson' },
            ]}
            flow={['Connection', 'Collaboration', 'Trust']}
            headline="HOW WE BUILD TOGETHER."
            subtext="Whether discussing an engineering internship, architecting an applied AI system, or building a responsive web experience—the standard remains: communicate with clarity, execute with discipline, and deliver real human value."
          />
        </div>

        {/* Direct Channels Grid */}
        <div className="contact-channels-grid contact-reveal-item">
          
          {/* Email Channel Card */}
          <div className="contact-card-box">
            <div className="contact-card-top">
              <div className="contact-icon-pill">
                <Mail size={20} />
              </div>
              <span className="contact-channel-type">Institutional Email</span>
            </div>
            <h3 className="contact-card-title">pranav.m.cst.2024@snsce.ac.in</h3>
            <p className="contact-card-desc">Best for internship inquiries, project specifications, and formal engineering communications.</p>
            <div className="contact-card-footer">
              <button
                type="button"
                className="btn-primary"
                onClick={handleCopyEmail}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

          {/* Direct Phone / Call Card */}
          <div className="contact-card-box">
            <div className="contact-card-top">
              <div className="contact-icon-pill">
                <Phone size={20} />
              </div>
              <span className="contact-channel-type">Direct Phone Line</span>
            </div>
            <h3 className="contact-card-title">+91 96009 46253</h3>
            <p className="contact-card-desc">Available during standard business hours (IST UTC+5:30) for urgent technical or recruiter inquiries.</p>
            <div className="contact-card-footer">
              <a
                href="tel:+919600946253"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={15} />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Location & Timezone Card */}
          <div className="contact-card-box">
            <div className="contact-card-top">
              <div className="contact-icon-pill">
                <MapPin size={20} />
              </div>
              <span className="contact-channel-type">Base Location</span>
            </div>
            <h3 className="contact-card-title">Coimbatore, Tamil Nadu</h3>
            <p className="contact-card-desc">India (IST UTC+5:30). Open to remote internships, hybrid roles, and travel for hackathons.</p>
            <div className="contact-card-footer">
              <div className="location-status-badge">
                <span className="status-dot-emerald" />
                <span>Open for Remote &amp; On-Site Work</span>
              </div>
            </div>
          </div>

        </div>

        {/* Professional Profiles Grid */}
        <div className="contact-social-grid contact-reveal-item" style={{ marginTop: '28px' }}>
          <a
            href="https://www.linkedin.com/in/pranav-m-23153a32b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-profile-card"
          >
            <div className="social-card-left">
              <div className="social-icon-box">
                <Linkedin size={22} />
              </div>
              <div>
                <h4 className="social-name">LinkedIn Profile</h4>
                <span className="social-handle">linkedin.com/in/pranav-m-23153a32b</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="social-arrow" />
          </a>

          <a
            href="https://github.com/pranav-m2006"
            target="_blank"
            rel="noopener noreferrer"
            className="social-profile-card"
          >
            <div className="social-card-left">
              <div className="social-icon-box">
                <Github size={22} />
              </div>
              <div>
                <h4 className="social-name">GitHub Repositories</h4>
                <span className="social-handle">github.com/pranav-m2006</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="social-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
}
