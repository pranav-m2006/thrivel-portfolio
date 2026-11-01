import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorDot from './components/CursorDot';
import RouteTransition from './components/RouteTransition';
import Dark3DBackground from './components/Dark3DBackground';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="site-wrapper bg-[#07080B] text-slate-100 min-h-screen relative selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      {/* Global Atmospheric 3D Neural Particle Field */}
      <Dark3DBackground />

      {/* Cyber Route Transition Curtain */}
      <RouteTransition />

      {/* Custom Desktop Magnetic Cursor */}
      <CursorDot />

      <ScrollToTop />
      <Navbar />

      <main className="main-content relative z-10 flex-1">
        <Routes>
          {/* SIX CORE PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />

          {/* Subsections of About & Aliases (Graceful Redirects) */}
          <Route path="/experience" element={<Navigate to="/about" replace />} />
          <Route path="/journey" element={<Navigate to="/about" replace />} />
          <Route path="/education" element={<Navigate to="/about" replace />} />
          <Route path="/milestones" element={<Navigate to="/achievements" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
