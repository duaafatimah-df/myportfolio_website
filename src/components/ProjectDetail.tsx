import React, { useState } from 'react';

import spareshareImg from '../assets/project_spareshare.png';
import deenncoImg from '../assets/project_deennco.png';
import nexusImg from '../assets/project_nexus.png';
import ecommerceImg from '../assets/project_ecommerce.jpg';
import growthagencyImg from '../assets/project_growthagency.png';

import growth1 from '../assets/all projects/growth1.png';
import growth2 from '../assets/all projects/growth2.png';
import growth3 from '../assets/all projects/growth3.png';

import mv1 from '../assets/all projects/f1.png';
import mv2 from '../assets/all projects/f2.png';
import mv3 from '../assets/all projects/f3.png';
import mv4 from '../assets/all projects/f4.png';
import mv5 from '../assets/all projects/f5.png';
import mv6 from '../assets/all projects/f6.png';

import weMain from '../assets/all projects/web-main.jpg';
import weGrid from '../assets/all projects/web-gridview.jpg';
import weList from '../assets/all projects/web-listview.jpg';
import weDetail from '../assets/all projects/web-detail.jpg';
import weCart from '../assets/all projects/web-cart.jpg';

import voc1 from '../assets/all projects/voc/01-home.png';
import voc2 from '../assets/all projects/voc/01-home-scroll.png';
import voc3 from '../assets/all projects/voc/02-programs.png';
import voc4 from '../assets/all projects/voc/02-programs-scroll.png';
import voc5 from '../assets/all projects/voc/03-young-gardeners.png';
import voc6 from '../assets/all projects/voc/03-young-gardeners-scroll.png';
import voc7 from '../assets/all projects/voc/04-ai-workshop.png';
import voc8 from '../assets/all projects/voc/04-ai-workshop-scroll.png';
import voc9 from '../assets/all projects/voc/05-traffic-park.png';
import voc10 from '../assets/all projects/voc/05-traffic-park-scroll.png';
import voc11 from '../assets/all projects/voc/06-contact.png';
import voc12 from '../assets/all projects/voc/06-contact-scroll.png';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projectsData: Record<string, {
    title: string;
    category: string;
    tags: string[];
    longDescription: string;
    liveLink?: string;
    githubLink?: string;
    images: string[];
    techStack: Record<string, string>;
    objectives?: string[];
    features: string[];
  }> = {
    vocweb: {
      title: 'VOC-WEB (Multi-Page Organizational Website)',
      category: 'React Web Platform',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'React Router', 'Admin CMS'],
      longDescription: 'VOC-WEB is a multi-page React website for an organizational presence. Home teasers lead into dedicated pages for Programs, Young Gardeners, AI Workshop, Traffic Park, and Contact. The build includes sticky navigation, a Learning Cycle section, required contact email validation, optimized media, and an Admin CMS that stores editable content in localStorage.',
      images: [voc1, voc2, voc3, voc4, voc5, voc6, voc7, voc8, voc9, voc10, voc11, voc12],
      techStack: {
        'Frontend': 'React.js + Tailwind CSS',
        'Routing': 'React Router',
        'Build': 'Vite',
        'CMS': 'Admin portal + localStorage content store',
        'UX': 'Sticky header, responsive layouts, section teasers',
      },
      features: [
        'Dedicated routes for Programs, Bootcamp pages, Traffic Park, and Contact.',
        'Home-page teasers with clear CTAs into deeper content.',
        'Admin CMS for editing site copy without redeploying every change.',
        'Sticky navigation and responsive layouts across desktop and mobile.',
        'Required contact email validation and smoother Traffic Park media playback.',
      ],
    },
    growthagency: {
      title: 'Growth Agency (Digital Marketing & AI Platform)',
      category: 'React & Marketing Engineering',
      tags: ['React.js', 'Meta CAPI', 'AI Automation', 'Tailwind CSS'],
      longDescription: 'Growth Agency is a digital marketing and web engineering platform built with React.js. It combines performance marketing surfaces with AI automation workflows, Meta CAPI data pipelines, and fast frontend engineering for brand scaling.',
      images: [growthagencyImg, growth1, growth2, growth3],
      techStack: {
        'Frontend': 'React.js + Tailwind CSS',
        'Data Pipelines': 'Meta CAPI & GA4',
        'AI Automation': 'Lead qualifier workflows',
        'Status': 'Ongoing development',
      },
      features: [
        'Campaign-focused hero and service storytelling.',
        'Live metrics dashboard styling for spend, match rate, and leads.',
        'Service grid for performance marketing, AI automation, and SEO.',
        'Responsive modern UI built for conversion clarity.',
      ],
    },
    spareshare: {
      title: 'SpareShare AI (AI-Powered Community Platform)',
      category: 'React & AI',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'AI'],
      longDescription: 'SpareShare AI applies image recognition, matching, and forecasting ideas to food waste reduction and community resource distribution. Donors and receivers are paired through a full-stack web experience with AI-assisted categorization.',
      liveLink: 'https://spareshare-ai.netlify.app/',
      githubLink: 'https://github.com/duaafatimah',
      images: [spareshareImg],
      techStack: {
        'Frontend': 'React.js + Tailwind CSS',
        'Backend': 'Node.js + Express',
        'Database': 'MongoDB',
        'AI': 'Image recognition & matching helpers',
      },
      features: [
        'Smart suggestions for item categorization.',
        'Donation listing and receiver request matching.',
        'Responsive community-facing UI.',
        'Deployed frontend experience for demos and walkthroughs.',
      ],
    },
    deennco: {
      title: 'Deen&Co (Skin Care & Pharmaceutical E-commerce)',
      category: 'WordPress',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'Hosting'],
      longDescription: 'A live WordPress commerce site on a custom domain for a skin care brand, with product catalogs, cart workflows, responsive layouts, and hosting/domain setup.',
      liveLink: 'https://deennco.com/',
      images: [deenncoImg],
      techStack: {
        'CMS': 'WordPress',
        'Commerce': 'WooCommerce',
        'Styling': 'Custom CSS / theme customization',
        'Hosting': 'Custom domain + caching setup',
      },
      features: [
        'Product catalog tailored to brand collections.',
        'Checkout and cart flows via WooCommerce.',
        'Responsive storefront across devices.',
        'Admin-ready content and inventory management.',
      ],
    },
    nexus: {
      title: 'Business Nexus (Investor & Entrepreneur Platform)',
      category: 'React Web App',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'Vercel'],
      longDescription: 'Business Nexus connects entrepreneurs and investors through role-based dashboards, pitch surfaces, and matching-oriented browsing.',
      liveLink: 'https://nexus-seven-smoky-51.vercel.app/',
      githubLink: 'https://github.com/duaafatimah',
      images: [nexusImg],
      techStack: {
        'Frontend': 'React.js',
        'Build': 'Vite',
        'Styling': 'Tailwind CSS',
        'Deploy': 'Vercel',
      },
      features: [
        'Role-based investor and entrepreneur views.',
        'Startup detail dashboards and profile browsing.',
        'Search/filter patterns for deal matching.',
        'Clean form flows with validation.',
      ],
    },
    movieverse: {
      title: 'MovieVerse (Flutter Movie App)',
      category: 'Mobile Development',
      tags: ['Flutter', 'Dart', 'TMDb API'],
      longDescription: 'MovieVerse is a Flutter app that pulls live movie data from TMDb for browsing, search, details, and recommendation-style discovery across mobile screens.',
      images: [mv1, mv2, mv3, mv4, mv5, mv6],
      techStack: {
        'Framework': 'Flutter',
        'Language': 'Dart',
        'API': 'TMDb REST API',
        'UI': 'Material widgets + custom cards',
      },
      features: [
        'Home, search, details, and genre-style screens.',
        'Live search against TMDb data.',
        'Detail views with ratings and metadata.',
        'Mobile-first interaction patterns.',
      ],
    },
    ecommerce: {
      title: 'E-Commerce Storefront (Django Store)',
      category: 'Django Web App',
      tags: ['Python', 'Django', 'HTML5', 'CSS3', 'SQLite'],
      longDescription: 'A course project storefront using Django with product grids, cart actions, authentication, and an admin console for inventory and orders.',
      images: [weMain, weGrid, weList, weDetail, weCart, ecommerceImg],
      techStack: {
        'Backend': 'Django (Python)',
        'Database': 'SQLite',
        'Frontend': 'HTML5 / CSS3',
        'Auth': 'Django user auth',
      },
      features: [
        'Catalog grid and list views.',
        'Cart add/remove/quantity updates.',
        'User registration and login.',
        'Admin inventory and order management.',
      ],
    },
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <section className="project-detail-section" style={{ textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <button onClick={onBack} className="btn btn-primary" style={{ marginTop: 20 }}>Back to Home</button>
      </section>
    );
  }

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % project.images.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <section className="project-detail-section">
      <button onClick={onBack} className="btn btn-ghost" style={{ marginBottom: 28 }}>
        ← Back to Portfolio
      </button>

      <div>
        <span className="section-kicker">{project.category}</span>
        <h1 className="detail-title">{project.title}</h1>
        <div className="project-tags" style={{ marginBottom: 8 }}>
          {project.tags.map((tag, idx) => (
            <span className={`project-tag ${idx % 2 ? 'alt' : ''}`} key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="detail-carousel">
        <img src={project.images[activeSlide]} alt={`${project.title} screenshot ${activeSlide + 1}`} />
        {project.images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous">‹</button>
            <button className="carousel-btn next" onClick={nextSlide} aria-label="Next">›</button>
            <div className="carousel-dots">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="detail-grid">
        <div>
          <h2 style={{ color: 'var(--accent)', marginBottom: 12, fontSize: '1.5rem' }}>Overview</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>{project.longDescription}</p>

          {project.objectives && (
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ marginBottom: 10 }}>Objectives</h3>
              <ul className="exp-points">
                {project.objectives.map((obj) => <li key={obj}>{obj}</li>)}
              </ul>
            </div>
          )}

          <h2 style={{ color: 'var(--accent)', marginBottom: 12, fontSize: '1.5rem' }}>Key Features</h2>
          <ul className="exp-points">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>

        <div className="detail-side">
          <div className="panel">
            <h3 style={{ marginBottom: 14 }}>Access</h3>
            <div style={{ display: 'grid', gap: 10 }}>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit Live Site
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Source Repository
                </a>
              )}
              {!project.liveLink && !project.githubLink && (
                <span style={{ color: 'var(--faint)', fontSize: '0.9rem' }}>Private / local project</span>
              )}
            </div>
          </div>

          <div className="panel">
            <h3 style={{ marginBottom: 14 }}>Tech Profile</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <tbody>
                {Object.entries(project.techStack).map(([label, val], idx, arr) => (
                  <tr key={label} style={{ borderBottom: idx === arr.length - 1 ? 'none' : '1px solid var(--line)' }}>
                    <td style={{ padding: '10px 0', color: 'var(--muted)', fontWeight: 700 }}>{label}</td>
                    <td style={{ padding: '10px 0', textAlign: 'right' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
