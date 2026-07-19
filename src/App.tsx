import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import './App.css';

const SECTIONS = ['home', 'skills', 'experience', 'projects', 'contact'];
const HEADER_H = 80;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // On mount: start at the very top, remove any leftover hash
  useEffect(() => {
    window.history.replaceState(null, '', window.location.pathname);
    document.documentElement.scrollTop = 0;
  }, []);

  // ScrollSpy: detect which section is visible and highlight the correct nav item
  useEffect(() => {
    if (selectedProjectId) { setActiveSection(''); return; }

    const onScroll = () => {
      const scrollY = window.scrollY;
      let current = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - HEADER_H - 10 <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [selectedProjectId]);

  // Scroll to a section using its absolute offsetTop — always accurate
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.offsetTop - HEADER_H;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    if (selectedProjectId) {
      setSelectedProjectId(null);
      setActiveSection(sectionId);
      // Wait for main page to re-render, then scroll
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
          <div className="logo" style={{ fontSize: '1.2rem' }}>
            Duaa Fatimah
            <span className="logo-dot"></span>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Duaa Fatimah. All rights reserved.
          </p>
          <button
            className="back-to-top"
            onClick={() => handleNavClick('home')}
          >
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
