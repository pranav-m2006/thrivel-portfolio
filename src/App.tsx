import { Routes, Route } from 'react-router-dom';
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
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import StyleGuide from './pages/StyleGuide';

export default function App() {
  return (
    <div className="site-wrapper bg-[#07080B] text-slate-100 min-h-screen relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Global Atmospheric 3D Particle & Polyhedral Background */}
      <Dark3DBackground />

      {/* Cyber Route Transition Curtain */}
      <RouteTransition />

      {/* Custom Desktop Magnetic Cursor */}
      <CursorDot />

      <ScrollToTop />
      <Navbar />

      <main className="main-content relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<Experience />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/milestones" element={<Achievements />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/style-guide" element={<StyleGuide />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
