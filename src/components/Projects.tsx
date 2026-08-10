import React, { useState } from 'react';
import spareshareImg from '../assets/project_spareshare.png';
import deenncoImg from '../assets/project_deennco.png';
import nexusImg from '../assets/project_nexus.png';
import growthagencyImg from '../assets/project_growthagency.png';
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
      id: 'growthagency',
      title: 'Growth Agency — Digital Marketing & AI Platform (Ongoing)',
      category: 'react',
      tags: ['React.js', 'Meta CAPI', 'AI Automation', 'Tailwind CSS', 'Ongoing Project'],
      description: 'Decoding Growth. Engineering Impact. Combining high-conversion performance marketing with custom AI automation, Meta CAPI pipelines, and fast React web engineering.',
      image: growthagencyImg
    },
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
          Explore a selection of my mobile apps, full-stack React systems, WordPress sites, digital marketing agency platforms, and security modules.
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
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass glass-hover">
            <div className="project-img-box">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <button 
                  className="btn btn-primary"
                  onClick={() => onSelectProject(project.id)}
                >
                  View Case Study
                </button>
              </div>
            </div>

            <div className="project-info">
              <div className="project-tags">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-links">
                <button 
                  className="btn-link"
                  onClick={() => onSelectProject(project.id)}
                >
                  Learn More &rarr;
                </button>
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link live-btn"
                  >
                    Live Demo ↗
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
