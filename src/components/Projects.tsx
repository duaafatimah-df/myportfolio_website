import React, { useState } from 'react';
import spareshareImg from '../assets/project_spareshare.png';
import deenncoImg from '../assets/project_deennco.png';
import nexusImg from '../assets/project_nexus.png';
import growthagencyImg from '../assets/project_growthagency.png';
import movieverseImg from '../assets/1.JPG';
import ecommerceImg from '../assets/project_ecommerce.jpg';
import vocHome from '../assets/all projects/voc/01-home.png';

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  liveLink?: string;
}

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsList: Project[] = [
    {
      id: 'vocweb',
      title: 'VOC-WEB (Multi-Page Organizational Website)',
      category: 'react',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'React Router', 'Admin CMS'],
      description: 'Multi-page React site with Programs, Bootcamp, Traffic Park, Contact routes, sticky nav, and an Admin CMS for editable content.',
      image: vocHome,
    },
    {
      id: 'growthagency',
      title: 'Growth Agency (Digital Marketing & AI Platform)',
      category: 'react',
      tags: ['React.js', 'Meta CAPI', 'AI Automation', 'Tailwind CSS'],
      description: 'High-conversion marketing platform combining performance campaigns, AI automation, and fast React web engineering.',
      image: growthagencyImg,
    },
    {
      id: 'spareshare',
      title: 'SpareShare AI (Community Platform)',
      category: 'react',
      tags: ['React.js', 'Node.js', 'MongoDB', 'AI APIs'],
      description: 'AI-driven community platform for food and essential donations with smart item recognition and matching.',
      image: spareshareImg,
      liveLink: 'https://spareshare-ai.netlify.app/',
    },
    {
      id: 'deennco',
      title: 'Deen&Co (Skin Care E-commerce)',
      category: 'wordpress',
      tags: ['WordPress', 'WooCommerce', 'PHP'],
      description: 'Live WordPress store on a custom domain for a skin care brand with catalog, cart, and hosting setup.',
      image: deenncoImg,
      liveLink: 'https://deennco.com/',
    },
    {
      id: 'nexus',
      title: 'Business Nexus (Investor Platform)',
      category: 'react',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'Vercel'],
      description: 'Collaboration platform connecting entrepreneurs and investors with role-based dashboards.',
      image: nexusImg,
      liveLink: 'https://nexus-seven-smoky-51.vercel.app/',
    },
    {
      id: 'movieverse',
      title: 'MovieVerse (Flutter Movie App)',
      category: 'flutter',
      tags: ['Flutter', 'Dart', 'TMDb API'],
      description: 'Cross-platform movie discovery app with search, details, and personalized browsing via TMDb.',
      image: movieverseImg,
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website (Django Store)',
      category: 'django',
      tags: ['Django', 'Python', 'HTML', 'CSS'],
      description: 'Database-driven storefront with catalog views, cart flow, auth, and admin inventory controls.',
      image: ecommerceImg,
    },
  ];

  const filters = ['all', 'react', 'wordpress', 'flutter', 'django'];
  const filteredProjects =
    activeFilter === 'all'
      ? projectsList
      : projectsList.filter((proj) => proj.category === activeFilter);

  return (
    <section id="projects">
      <div className="section-head reveal">
        <span className="section-kicker">Selected Work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-copy">
          From organizational sites and AI platforms to WordPress stores and mobile apps product-minded builds with clear UX.
        </p>
      </div>

      <div className="projects-toolbar reveal">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            className="project-card panel"
            key={project.id}
            onClick={() => onSelectProject(project.id)}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-body">
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span className={`project-tag ${tIdx % 2 ? 'alt' : ''}`} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links" onClick={(e) => e.stopPropagation()}>
                <button className="project-link" onClick={() => onSelectProject(project.id)}>
                  View Details
                </button>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Link
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
