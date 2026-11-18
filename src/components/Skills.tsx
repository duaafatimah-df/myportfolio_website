import React from 'react';

const categories = [
  {
    title: 'Frontend Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: ['React.js', 'JavaScript ', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite'],
  },
  {
    title: 'CMS & Web Builders',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    skills: ['WordPress', 'Theme Customization', 'Plugin Integrations', 'Site Management'],
  },
  {
    title: 'Tools & Workflow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
  {
    title: 'Core Competencies',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    skills: ['Responsive Web Design', 'Mobile-First Development', 'UI/UX Principles', 'Software Testing', 'System Documentation'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="section-head reveal">
        <span className="section-kicker">Capabilities</span>
        <h2 className="section-title">Skills that ship</h2>
        <p className="section-copy">
          Interactive interfaces, clean component systems, and CMS craft tuned for speed, clarity, and real product delivery.
        </p>
      </div>

      <div className="skills-grid">
        {categories.map((category, idx) => (
          <article className={`skill-card panel reveal reveal-delay-${(idx % 3) + 1}`} key={category.title}>
            <div className="skill-icon">{category.icon}</div>
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-chips">
              {category.skills.map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
