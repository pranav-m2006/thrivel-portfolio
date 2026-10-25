import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
            
            <NavLink
              to="/style-guide"
              className={({ isActive }) => `nav-link style-guide-tag ${isActive ? 'active' : ''}`}
              title="Design System & Token Inspector"
            >
              Style Guide
            </NavLink>
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
            <span className="meta-tag">Coastal Studio</span>
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
