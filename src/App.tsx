import { useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PaperGrain from './components/PaperGrain';
import CursorDot from './components/CursorDot';
import RouteTransition from './components/RouteTransition';
import CinematicPreloader from './components/CinematicPreloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import StyleGuide from './pages/StyleGuide';

export default function App() {
  const handleLoadingComplete = useCallback(() => {
    // Single consolidated ScrollTrigger refresh once preloader is hidden and DOM has settled
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div className="site-wrapper">
      {/* Premium Cinematic Editorial Preloader */}
      <CinematicPreloader onLoadingComplete={handleLoadingComplete} />

      {/* 0.6s Sand Curtain Page Wipe Transition */}
      <RouteTransition />

      {/* Subtle Paper Grain & Desktop Magnetic Cursor */}
      <PaperGrain />
      <CursorDot />

      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* Canonical Section 3 Routes & Aliases */}
          <Route path="/journey" element={<Experience />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/milestones" element={<Achievements />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* Phase 2 Design System Spec */}
          <Route path="/style-guide" element={<StyleGuide />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
