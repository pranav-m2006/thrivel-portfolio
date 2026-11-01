import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, ArrowRight, Bot } from 'lucide-react';

const NAV_PAGES = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 flex items-center justify-center font-bold text-slate-950 text-base shadow-[0_0_18px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
            <Bot className="w-5 h-5 text-slate-950" />
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

        {/* Desktop 6-Page Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/80 border border-slate-800/90 rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_PAGES.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              end={page.path === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-slate-800 font-bold shadow-[0_0_15px_rgba(0,240,255,0.25)] border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`
              }
            >
              {page.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Social & Connect Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/pranav-m2006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-m-23153a32b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all transform hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-slate-950/98 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between border-t border-slate-800">
          <div className="space-y-3 pt-4">
            {NAV_PAGES.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                end={page.path === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-3.5 rounded-xl font-mono text-base uppercase tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-900 text-cyan-400 border border-cyan-500/40 font-bold'
                      : 'text-slate-300 hover:bg-slate-900/60'
                  }`
                }
              >
                <span>{page.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold font-mono text-xs uppercase shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
