import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-20 border-t border-slate-800 bg-slate-950/90 text-slate-400 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold text-lg tracking-tight">PRANAV M.</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
          </div>
          <p className="text-sm text-slate-400 max-w-sm">
            Frontend Developer | AI/ML Practitioner. Building responsive, intelligent web software.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-cyan-400 text-cyan-300 font-bold transition-colors">Projects</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
          <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Back to Top & Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pranav-m2006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-m2006/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:pranav.m2006.aiml@gmail.com"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/80 transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 text-center gap-4">
        <p>&copy; {new Date().getFullYear()} Pranav M. All verified rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Designed &amp; Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> &amp; Three.js
        </p>
      </div>
    </footer>
  );
}
