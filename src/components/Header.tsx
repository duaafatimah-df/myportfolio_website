import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-container nav-shell ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-content">
        <button className="logo" onClick={() => onNavClick('home')}>
          Duaa Fatimah
          <span className="logo-dot"></span>
        </button>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={() => onNavClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button className="btn btn-primary" style={{ padding: '9px 16px' }} onClick={() => onNavClick('contact')}>
              Hire Me
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
