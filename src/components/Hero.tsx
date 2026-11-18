import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

const titles = ['Software Engineer', 'Frontend Developer', 'React Specialist'];

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section id="home" className="hero-sec">
      <div className="hero-top reveal is-visible">
        <div className="hero-eyebrow">Available for work</div>
        <h1 className="hero-title">
          <span className="gradient-text">Duaa Fatimah</span>
        </h1>
        <p className="hero-typing">
          I build as a <span>{currentText}</span>
        </p>
      </div>

      <div className="hero-visual reveal is-visible reveal-delay-2">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-2" aria-hidden="true" />
        <div className="hero-frame animate-float">
          <img src={profileImg} alt="Duaa Fatimah" />
          <div className="hero-chip">Frontend Developer</div>
        </div>
      </div>

      <div className="hero-bottom reveal is-visible reveal-delay-1">
        <p className="hero-desc">
          Software Engineering graduate and frontend developer crafting responsive React and WordPress products with Frontend internship experience shipping clean, production-ready interfaces.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onNavClick('projects')}>
            View My Work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button className="btn btn-ghost" onClick={() => onNavClick('contact')}>
            Let's Connect
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>8+</strong>
            <span>Projects</span>
          </div>
          <div className="hero-stat">
            <strong>2</strong>
            <span>Internships</span>
          </div>
          <div className="hero-stat">
            <strong>React</strong>
            <span>Core Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
