import React, { useState, useLayoutEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight, X } from 'lucide-react';
import gsap from 'gsap';
import PageHeroHeadline from '../components/PageHeroHeadline';
import LuxuryMarquee from '../components/LuxuryMarquee';
import DarkExplanationSection from '../components/DarkExplanationSection';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.25,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pranav.m.cst.2024@snsce.ac.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div ref={containerRef} className="page-wrapper">
      {/* 1. HERO: Big Bold Black-to-Red Interactive Transition Heading */}
      <PageHeroHeadline
        eyebrow="08 / CONNECT & COLLABORATE"
        blackText="Have an idea"
        accentText="worth building?"
        arrowHref="#direct-channels"
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
          'SNSCE · Coimbatore',
          'Open for Internships',
        ]}
      />

      {/* 2. CONTINUOUS LUXURY MARQUEE */}
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

      {/* 3. DARK THEME EXPLANATION SECTION */}
      <DarkExplanationSection
        badge="COMMUNICATION PROTOCOL & RIGOR"
        title="Direct, Candid & High-Signal Communication."
        quote="“Clear expectations, prompt turnaround, and high-integrity collaboration without unnecessary meetings or bureaucracy.”"
        leftColumn={{
          title: 'COMMUNICATION BOUNDARIES',
          pillText: 'UNSUITABLE',
          variant: 'blocked',
          items: [
            {
              title: 'Unstructured Mass Inquiries',
              desc: 'Generic solicitations, marketing blasts, or automated recruiter spam without relevant context.',
              icon: <X size={15} color="#e05244" />,
            },
            {
              title: 'Uncompensated Speculative Work',
              desc: 'Requests for free proprietary architecture, unpaid test projects, or unaligned design sprints.',
              icon: <X size={15} color="#e05244" />,
            },
            {
              title: 'Vague Briefs & Ghosting',
              desc: 'Projects lacking defined scope, decision-maker presence, or transparent accountability.',
              icon: <X size={15} color="#e05244" />,
            },
          ],
        }}
        rightColumn={{
          title: 'COLLABORATIONS I WELCOME',
          pillText: 'PRIORITY',
          variant: 'verified',
          items: [
            {
              title: 'Engineering Internships & Roles',
              desc: 'Frontend development, React/TypeScript architecture, web performance, and applied AI systems.',
              icon: <Check size={15} color="#4ade80" />,
            },
            {
              title: 'Applied Research & Open-Source',
              desc: 'Collaborative systems, real-time analytics, and open-source contributions with clear milestones.',
              icon: <Check size={15} color="#4ade80" />,
            },
            {
              title: 'Direct Technical Discussions',
              desc: 'Deep dives on distributed systems, modern web ergonomics, and questions on published repos.',
              icon: <Check size={15} color="#4ade80" />,
            },
          ],
        }}
      />

      {/* 4. DIRECT CONTACT METHODS */}
      <section id="direct-channels" className="page-section bg-ivory">
        <div className="container-narrow">
          
          <div className="contact-reveal-item editorial-card" style={{ marginBottom: '40px', background: 'var(--color-beach-cream)' }}>
            <span className="editorial-eyebrow">Direct Line</span>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--color-espresso)' }}>
              Let's turn a good idea into something useful.
            </h2>
            <p style={{ color: 'var(--color-warm-grey)', lineHeight: '1.7', marginBottom: '32px' }}>
              Whether you are looking to hire a frontend engineer, collaborate on an applied AI project, or discuss research, feel free to reach out directly through any of the channels below.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              
              {/* Email Card */}
              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '6px', border: '1px solid var(--color-sand-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
                    <Mail size={18} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Email Address</span>
                  </div>
                  <a
                    href="mailto:pranav.m.cst.2024@snsce.ac.in"
                    style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-espresso)', wordBreak: 'break-all' }}
                  >
                    pranav.m.cst.2024@snsce.ac.in
                  </a>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', padding: '8px 14px', fontSize: '0.85rem' }}
                  >
                    {copied ? <Check size={14} color="green" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '6px', border: '1px solid var(--color-sand-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
                    <Phone size={18} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Phone Contact</span>
                  </div>
                  <a
                    href="tel:+919600946253"
                    style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-espresso)' }}
                  >
                    +91 96009 46253
                  </a>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <a
                    href="tel:+919600946253"
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', padding: '8px 14px', fontSize: '0.85rem' }}
                  >
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '6px', border: '1px solid var(--color-sand-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
                    <MapPin size={18} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Base Location</span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-espresso)' }}>
                    Coimbatore, Tamil Nadu
                  </div>
                </div>
                <div style={{ marginTop: '16px', fontSize: '0.825rem', color: 'var(--color-warm-grey)', fontFamily: 'var(--font-mono)' }}>
                  India (IST UTC+5:30)
                </div>
              </div>

            </div>
          </div>

          {/* Social Profiles */}
          <div className="contact-reveal-item" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <a
              href="https://www.linkedin.com/in/pranav-m-23153a32b/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Linkedin size={22} color="var(--color-terracotta)" />
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-espresso)', marginBottom: '2px' }}>LinkedIn</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-warm-grey)' }}>linkedin.com/in/pranav-m-23153a32b</span>
                </div>
              </div>
              <ArrowUpRight size={18} color="var(--color-warm-grey)" />
            </a>

            <a
              href="https://github.com/pranav-m2006"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Github size={22} color="var(--color-terracotta)" />
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-espresso)', marginBottom: '2px' }}>GitHub</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-warm-grey)' }}>github.com/pranav-m2006</span>
                </div>
              </div>
              <ArrowUpRight size={18} color="var(--color-warm-grey)" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
