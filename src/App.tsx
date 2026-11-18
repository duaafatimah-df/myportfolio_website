import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { useReveal } from './hooks/useReveal';
import './App.css';

const SECTIONS = ['home', 'skills', 'experience', 'projects', 'contact'];
const HEADER_H = 80;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [glow, setGlow] = useState({ x: -999, y: -999 });

  useReveal([selectedProjectId]);

  useEffect(() => {
    window.history.replaceState(null, '', window.location.pathname);
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      if (selectedProjectId) {
        setActiveSection('');
        return;
      }

      let current = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - HEADER_H - 10 <= window.scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [selectedProjectId]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setGlow({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    window.scrollTo({ top: Math.max(0, el.offsetTop - HEADER_H), behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    if (selectedProjectId) {
      setSelectedProjectId(null);
      setActiveSection(sectionId);
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      setActiveSection(sectionId);
      scrollToSection(sectionId);
    }
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="pointer-glow" style={{ left: glow.x, top: glow.y }} aria-hidden="true" />

      <Header
        activeSection={selectedProjectId ? '' : activeSection}
        onNavClick={handleNavClick}
      />

      {selectedProjectId ? (
        <main>
          <ProjectDetail
            projectId={selectedProjectId}
            onBack={() => setSelectedProjectId(null)}
          />
        </main>
      ) : (
        <main>
          <Hero onNavClick={handleNavClick} />
          <Skills />
          <Experience />
          <Projects onSelectProject={handleSelectProject} />
          <Contact />
        </main>
      )}

      <footer className="footer">
        <div className="footer-content">
          <div className="logo" style={{ fontSize: '1.1rem' }}>
            Duaa Fatimah
            <span className="logo-dot"></span>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Duaa Fatimah. Built with care.
          </p>
          <button className="back-to-top" onClick={() => handleNavClick('home')}>
            Back to Top
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default App;
