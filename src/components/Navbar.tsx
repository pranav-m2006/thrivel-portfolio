import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Track active section via IntersectionObserver on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

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

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    setMobileOpen(false);
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <>
      <header className={`nav-header ${isScrolled ? 'nav-scrolled' : ''}`} role="banner">
        <div className="container nav-inner">
          {/* Brand Mark */}
          <a
            href="/#home"
            onClick={(e) => handleNavClick('home', e)}
            className="nav-brand"
            aria-label="Pranav M — Home"
          >
            <span className="brand-name">Pranav M</span>
            <span className="nav-badge" aria-label="Discipline">Frontend × AI/ML</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-nav" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              const href = isHomePage ? `#${item.id}` : `/#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}

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
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="mobile-nav-drawer" id="mobile-navigation" role="dialog" aria-modal="true">
          <div className="mobile-nav-backdrop" onClick={() => setMobileOpen(false)} />
          <div className="mobile-nav-panel">
            <div className="mobile-nav-header">
              <span className="brand-name">Pranav M</span>
              <button
                type="button"
                className="mobile-nav-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {NAV_ITEMS.map((item) => {
                const isActive = isHomePage && activeSection === item.id;
                const href = isHomePage ? `#${item.id}` : `/#${item.id}`;
                return (
                  <a
                    key={item.id}
                    href={href}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mobile-nav-footer">
              <Link to="/resume" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
                <FileText size={15} />
                <span>View Full Resume</span>
              </Link>
              <div className="mobile-social-row">
                <a href="https://github.com/pranav-m2006" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/pranav-m-23153a32b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
