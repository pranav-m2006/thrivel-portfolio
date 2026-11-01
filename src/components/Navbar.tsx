import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Sparkles, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'projects', label: 'Projects', path: '/projects', isFeatured: true },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'achievements', label: 'Achievements', path: '/achievements' },
  { id: 'education', label: 'Education', path: '/education' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          onClick={() => {
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-slate-950 text-sm shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base tracking-tight flex items-center gap-1.5">
              PRANAV M.
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-widest -mt-0.5">
              FRONTEND // AI/ML
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage
              ? activeSection === item.id
              : location.pathname === item.path;

            return (
              <a
                key={item.id}
                href={isHomePage ? `#${item.id}` : item.path}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-cyan-300 bg-slate-800 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
                {item.isFeatured && (
                  <span className="px-1.5 py-0.2 rounded-full bg-cyan-400 text-slate-950 text-[9px] font-bold">
                    HOT
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button & Social */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/pranav-m2006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-m2006/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick('contact', e)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let&apos;s Connect
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-slate-950/95 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between border-t border-slate-800">
          <div className="space-y-3 pt-4">
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage
                ? activeSection === item.id
                : location.pathname === item.path;

              return (
                <a
                  key={item.id}
                  href={isHomePage ? `#${item.id}` : item.path}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`block px-4 py-3 rounded-xl font-mono text-base uppercase tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-900 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.isFeatured && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-bold">
                        FEATURED
                      </span>
                    )}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold font-mono text-xs uppercase"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
