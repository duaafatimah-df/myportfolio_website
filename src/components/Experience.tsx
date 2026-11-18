import React from 'react';

interface Job {
  role: string;
  company: string;
  duration: string;
  badge: string;
  highlights: string[];
}

export const Experience: React.FC = () => {
  const experiences: Job[] = [

    {
      role: 'Frontend Developer Intern',
      company: 'DevelopersHub Corporation',
      duration: '6 Weeks · Summer Internship',
      badge: 'Internship',
      highlights: [
        'Collaborated to build modular, reusable, and interactive user interfaces using modern frontend standards.',
        'Translated design requirements into responsive layouts with cross-browser compatibility.',
        'Used Git and GitHub for team version control and production-ready code quality.',
      ],
    },
    {
      role: 'Full Stack Intern',
      company: 'SolaceBit ',
      duration: '6 Weeks · Oct 2026',
      badge: 'Internship',
      highlights: [
        'Built full-stack web features for scalable applications using modern frontend and backend practices.',
        'Delivered responsive, production-ready UI while collaborating remotely with the engineering team.',
        'Maintained clean Git/GitHub workflows and met timelines under professional review.',
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="section-head reveal">
        <span className="section-kicker">Career</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-copy">
          Full-stack and frontend internships focused on shipping usable interfaces under real team workflows.
        </p>
      </div>

      <div className="exp-list">
        {experiences.map((exp, idx) => (
          <article className={`exp-card panel reveal reveal-delay-${(idx % 3) + 1}`} key={exp.role}>
            <div className="exp-meta">
              <div className="exp-date">{exp.duration}</div>
              <span className="exp-badge">{exp.badge}</span>
            </div>
            <div>
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <ul className="exp-points">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
