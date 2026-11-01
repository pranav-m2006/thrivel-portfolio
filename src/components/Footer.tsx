import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h4 className="footer-brand-title">Pranav M<span className="brand-dot">.</span></h4>
            <p className="footer-brand-desc">
              Frontend Developer | AI/ML Practitioner. Building responsive web experiences and exploring AI-powered solutions to real-world problems.
            </p>
            <div className="footer-social-row">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:pranav.m.cst.2024@snsce.ac.in"
                className="footer-social-pill"
                aria-label="Send direct email"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
              <Link
                to="/resume"
                className="footer-social-pill resume-pill"
              >
                <span>Resume ↗</span>
              </Link>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h5>Navigation</h5>
              <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#skills">Skills</a></li>
                <li><a href="/#projects">Projects</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Experience &amp; Work</h5>
              <ul>
                <li><a href="/#experience">Experience</a></li>
                <li><a href="/#achievements">Achievements</a></li>
                <li><a href="/#education">Education</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Pranav M · Designed &amp; Engineered with React, GSAP &amp; Three.js.</span>
          <div className="footer-bottom-right">
            <span className="footer-location">Coimbatore, Tamil Nadu, India</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
