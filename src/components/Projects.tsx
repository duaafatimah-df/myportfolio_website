import React, { useState } from 'react';
import spareshareImg from '../assets/project_spareshare.png';
import deenncoImg from '../assets/project_deennco.png';
import nexusImg from '../assets/project_nexus.png';
import mfaImg from '../assets/project_mfa.jpg';
import movieverseImg from '../assets/1.JPG';
import ecommerceImg from '../assets/project_ecommerce.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
}

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsList: Project[] = [
    {
      id: 'spareshare',
      title: 'SpareShare AI — AI-Powered Community Platform',
      category: 'react',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'AI APIs'],
      description: 'An AI-driven community support platform designed to reduce food waste and distribute essential household items to people in need.',
      image: spareshareImg,
      liveLink: 'https://spareshare-ai.netlify.app/'
    },
    {
      id: 'deennco',
      title: 'Deen&Co — Skin Care & Pharmaceutical E-commerce',
      category: 'wordpress',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'Domain & Hosting Management'],
      description: 'Successfully architected, designed, and deployed a live, fully functional WordPress website on a custom .com domain for a Skin Care and minimal products brand.',
      image: deenncoImg,
      liveLink: 'https://deennco.com/'
    },
    {
      id: 'nexus',
      title: 'Business Nexus — Investor & Entrepreneur Collaboration Platform',
      category: 'react',
      tags: ['React.js', 'Tailwind CSS', 'Vercel', 'Vite'],
      description: 'Project Nexus – Investor & Entrepreneur Collaboration Platform in React. Connects entrepreneurs with venture capitalists using dashboards and matching profiles.',
      image: nexusImg,
      liveLink: 'https://nexus-seven-smoky-51.vercel.app/'
    },
    {
      id: 'mfa',
      title: 'Facial Recognition Based Multi-Factor Authentication',
      category: 'security',
      tags: ['Python', 'OpenCV', 'DeepFace', 'Bootstrap', 'SQLite'],
      description: 'A secure authentication system combining traditional password verification with a second biometric facial recognition factor using OpenCV.',
      image: mfaImg
    },
    {
      id: 'movieverse',
      title: 'MovieVerse — Mobile App using Flutter & API Integration',
      category: 'flutter',
      tags: ['Flutter', 'Dart', 'REST API', 'TMDb API', 'UI/UX Design'],
      description: 'MovieVerse is a Flutter-based mobile application integrating with the TMDb API to provide users with detailed movie database information and personalized reviews.',
      image: movieverseImg
    },
    {
      id: 'ecommerce',
      title: 'Web Engineering Project — E-commerce Website',
      category: 'django',
      tags: ['HTML', 'CSS', 'Django', 'Python', 'SQLite'],
      description: 'Created a responsive, database-driven e-commerce store using Django’s backend framework, featuring product search grids, user login states, and administrative console dashboards.',
      image: ecommerceImg
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsList 
    : projectsList.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects">
      <div className="glow-blur glow-purple" style={{ top: '20%', left: '-5%' }}></div>
      
      <div className="section-header">
        <span className="section-tag">Portfolio Showcase</span>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-desc">
          Explore a selection of my mobile apps, full-stack React systems, WordPress sites, and security modules.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="projects-filter">
        {['all', 'react', 'wordpress', 'flutter', 'django', 'security'].map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div className="project-card glass glass-hover" key={idx} style={{ cursor: 'pointer' }} onClick={() => onSelectProject(project.id)}>
            <div className="project-img-box">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span className={`project-tag ${tIdx % 2 === 0 ? 'teal' : ''}`} key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-links" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => onSelectProject(project.id)} className="project-link" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', padding: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  View Details
                </button>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Link
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
