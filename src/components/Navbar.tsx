import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/journey', label: 'Journey' },
    { path: '/milestones', label: 'Milestones' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="nav-header" role="banner">
        <div className="container nav-inner">
          {/* Studio Brand Mark */}
          <Link to="/" className="nav-brand" aria-label="Pranav M — Home">
            <span className="brand-name">Pranav M</span>
            <span className="nav-badge" aria-label="Discipline">Frontend × AI/ML</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Prominent Quick Actions: GitHub, LinkedIn & Resume */}
            <div className="nav-quick-actions">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                title="GitHub Profile"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin size={16} />
              </a>
              <Link
                to="/resume"
                className="nav-resume-btn"
                title="View Pranav's Resume"
              >
                <FileText size={13} />
                <span>Resume</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Drawer Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div 
        id="mobile-navigation" 
        className={`mobile-fullscreen-drawer ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Navigation</span>
            <span className="meta-tag">SNSCE · CST</span>
          </div>

          <nav className="mobile-drawer-links" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
                end={item.path === '/'}
              >
                <span className="mobile-nav-text">{item.label}</span>
              </NavLink>
            ))}

            <div className="mobile-drawer-divider" />

            {/* Mobile Quick Action Buttons: Resume, GitHub, LinkedIn */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
              <Link
                to="/resume"
                className="btn-primary"
                onClick={() => setMobileOpen(false)}
                style={{ justifyContent: 'center' }}
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </Link>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <a
                  href="https://github.com/pranav-m2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.8rem' }}
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.8rem' }}
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <NavLink
              to="/style-guide"
              className={({ isActive }) => `mobile-nav-link-secondary ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              <span>Design System Spec (/style-guide)</span>
            </NavLink>
          </nav>

          <div className="mobile-drawer-footer">
            <p className="mobile-contact-line">pranav.m.cst.2024@snsce.ac.in</p>
            <p className="mobile-loc-line">Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </>
  );
}
