import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h4>Pranav M</h4>
            <p>
              Frontend developer & AI/ML practitioner exploring thoughtful design, modern web architecture, and applied intelligence.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--color-espresso)' }}
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--color-espresso)' }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <Link
                to="/resume"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: '#C63D2F', fontWeight: 700 }}
              >
                Resume
              </Link>
              <a
                href="mailto:pranav.m.cst.2024@snsce.ac.in"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--color-espresso)' }}
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h5>Navigation</h5>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Technical Skills</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Credentials</h5>
              <ul>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Pranav M. Coastal Editorial × Modern Developer Portfolio.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <button
              type="button"
              onClick={() => {
                sessionStorage.removeItem('pranav_portfolio_intro_seen');
                window.location.reload();
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-rusty-orange, #C66A3D)',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
              title="Re-run the cinematic intro animation"
            >
              Replay Intro ↺
            </button>
            <span style={{ fontFamily: 'var(--font-mono)' }}>Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
