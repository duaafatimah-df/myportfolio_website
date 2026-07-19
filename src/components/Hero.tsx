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
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    const fullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
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
      <div className="glow-blur glow-cyan" style={{ top: '10%', left: '-5%' }}></div>
      
      <div className="hero-info">
        <span className="hero-subtitle">Welcome to my space</span>
        <h1 className="hero-title">
          Hi, I'm <br />
          <span className="gradient-text">Duaa Fatimah</span>
          <br />
          {/* clamp: min 1.1rem on tiny phones → scales with screen → max 2.5rem on desktop */}
          <span className="typing-line">
            I am a <span className="typing-cursor">{currentText}</span>
          </span>
        </h1>
        
        <p className="hero-desc">
          An ambitious Software Engineering graduate and experienced Freelance Frontend Developer with 1 year of hands-on experience translating complex Figma designs into highly responsive, pixel-perfect, and user-centric web applications.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary" style={{ cursor: 'pointer', font: 'inherit' }} onClick={() => onNavClick('projects')}>
            View My Work
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button className="btn btn-secondary" style={{ cursor: 'pointer', font: 'inherit' }} onClick={() => onNavClick('contact')}>
            Let's Connect
          </button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="decor-circle decor-1"></div>
        <div className="decor-circle decor-2"></div>
        
        <div className="hero-img-wrapper glass animate-float">
          <img src={profileImg} className="hero-img" alt="Duaa Fatimah" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
