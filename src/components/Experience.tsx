import React from 'react';

interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  badge: string;
  highlights: string[];
}

export const Experience: React.FC = () => {
  const experiences: Job[] = [
    {
      role: 'Freelance Frontend & Web Developer',
      company: 'Kwork (Self-Employed)',
      location: 'Remote',
      duration: '2024 – Present (2 Years)',
      badge: 'Freelance',
      highlights: [
        'Successfully delivered diverse web projects for clients in React.js, HTML5/CSS3, and WordPress ecosystems.',
        'Transformed complex Figma designs into clean, responsive, and cross-browser-compatible frontend code using Tailwind CSS.',
        'Developed custom WordPress websites, executing advanced theme customization, plugin integrations, and custom styling to meet tailored business needs.',
        'Managed end-to-end project lifecycles, ensuring timely delivery, effective client communication, and post-deployment support.'
      ]
    },
    {
      role: 'Frontend Developer Intern',
      company: 'DevelopersHub Corporation',
      location: 'Pakistan',
      duration: '6 Weeks (Summer Internship)',
      badge: 'Internship',
      highlights: [
        'Collaborated within a professional ecosystem to build modular, reusable, and interactive user interfaces using modern frontend standards.',
        'Translated design requirements into highly responsive layouts, ensuring cross-browser compatibility and seamless device responsiveness.',
        'Utilized Git and GitHub for team version control, maintaining clean production-ready code under rigorous professional evaluation.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="glow-blur glow-cyan" style={{ bottom: '20%', left: '-10%' }}></div>
      
      <div className="section-header">
        <span className="section-tag">Career History</span>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-desc">
          Over 2 years of freelancing and corporate internship experience delivering functional web applications.
        </p>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-card glass glass-hover">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company-row">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-badge">{exp.badge}</span>
                  </div>
                </div>
                <div className="timeline-date">{exp.duration}</div>
              </div>
              
              <ul className="timeline-desc">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
