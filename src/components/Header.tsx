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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(false);
    onNavClick(sectionId);
  };

  return (
    <div className={`nav-container ${isScrolled ? 'glass-nav' : ''}`}>
      <nav className="nav-content">
        {/* Logo */}
        <button
          className="logo"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => onNavClick('home')}
        >
          Duaa Fatimah
          <span className="logo-dot"></span>
        </button>

        {/* Desktop Links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                onClick={() => onNavClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              className="btn btn-secondary"
              style={{ padding: '8px 20px', borderRadius: '30px', cursor: 'pointer', font: 'inherit' }}
              onClick={() => onNavClick('contact')}
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="nav-toggle-bar" style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}></span>
          <span className="nav-toggle-bar" style={isMobileMenuOpen ? { opacity: 0 } : {}}></span>
          <span className="nav-toggle-bar" style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -7px)' } : {}}></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <ul className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit', width: '100%', textAlign: 'left', padding: '8px 0' }}
              onClick={(e) => handleLinkClick(e, id)}
            >
              {label}
            </button>
          </li>
        ))}
        <li style={{ marginTop: '10px' }}>
          <button
            className="btn btn-primary"
            style={{ display: 'flex', width: '100%', justifyContent: 'center', cursor: 'pointer', font: 'inherit' }}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Hire Me
          </button>
        </li>
      </ul>
    </div>
  );
};
