import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Award, Code2, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import Hero3DVisual from './Hero3DVisual';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge-wrap', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-title-reveal', { y: 35, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-role-reveal', { y: 25, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-sub-position', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-intro-text', { y: 25, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('.hero-supporting-text', { y: 25, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-action-buttons', { y: 25, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('.hero-social-strip', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-cred-pill', { scale: 0.9, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-two-column-section" ref={heroRef} id="home">
      <div className="container hero-container-grid">
        {/* LEFT COLUMN: Structured Personal Identity & Editorial Positioning */}
        <div className="hero-content-col" ref={leftColRef}>
          
          {/* Status Indicator */}
          <div className="hero-badge-wrap">
            <span className="hero-status-pill">
              <span className="status-live-dot" aria-hidden="true" />
              <span>Available for Internships &amp; Collaborative Projects</span>
            </span>
          </div>

          {/* Name & Primary Headline */}
          <h1 className="hero-title-reveal">
            Pranav M<span className="hero-period">.</span>
          </h1>

          {/* Professional Title */}
          <p className="hero-role-reveal">
            Frontend Developer <span className="hero-role-divider">|</span> AI/ML Practitioner
          </p>

          {/* Additional Positioning */}
          <p className="hero-sub-position">
            Computer Science Engineering Student <span className="hero-sep-dot">·</span> Full-Stack Development Learner
          </p>

          {/* Hero Introduction Quote */}
          <blockquote className="hero-intro-text">
            “I build responsive web experiences and explore AI-powered solutions to real-world problems.”
          </blockquote>

          {/* Supporting Statement */}
          <p className="hero-supporting-text">
            From intelligent career-development platforms to disaster-management solutions, I enjoy turning ideas into practical software.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-action-buttons">
            <a href="#projects" className="btn-hero-primary">
              <Sparkles size={16} />
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-hero-secondary">
              <Mail size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Profiles & Direct Connection */}
          <div className="hero-social-strip">
            <span className="hero-social-label">Connect:</span>
            <div className="hero-social-links">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile (opens in new tab)"
                title="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile (opens in new tab)"
                title="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:pranav.m.cst.2024@snsce.ac.in"
                className="hero-social-link"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Verified Credibility Micro-Pills */}
          <div className="hero-credentials-row">
            <span className="hero-cred-pill">
              <GraduationCap size={13} />
              <span>SNSCE · CGPA 8.00</span>
            </span>
            <span className="hero-cred-pill">
              <Award size={13} />
              <span>SIH '25 National Finalist</span>
            </span>
            <span className="hero-cred-pill">
              <Code2 size={13} />
              <span>HackMatrix 3rd Place</span>
            </span>
            <span className="hero-cred-pill">
              <span>2 Product Patents</span>
            </span>
          </div>

        </div>

        {/* RIGHT COLUMN: Lightweight Interactive 3D Neural Software Lattice */}
        <div className="hero-visual-col" aria-hidden="true">
          <Hero3DVisual />
        </div>
      </div>
    </section>
  );
}

