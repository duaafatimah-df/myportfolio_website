import React, { useState } from 'react';

// Import project cover/live screenshots
import spareshareImg from '../assets/project_spareshare.png';
import deenncoImg from '../assets/project_deennco.png';
import nexusImg from '../assets/project_nexus.png';
import ecommerceImg from '../assets/project_ecommerce.jpg';

// Import MovieVerse Flutter screenshots
import mv1 from '../assets/all projects/f1.png';
import mv2 from '../assets/all projects/f2.png';
import mv3 from '../assets/all projects/f3.png';
import mv4 from '../assets/all projects/f4.png';
import mv5 from '../assets/all projects/f5.png';
import mv6 from '../assets/all projects/f6.png';

// Import Django Web Engineering screenshots
import weMain from '../assets/all projects/web-main.jpg';
import weGrid from '../assets/all projects/web-gridview.jpg';
import weList from '../assets/all projects/web-listview.jpg';
import weDetail from '../assets/all projects/web-detail.jpg';
import weCart from '../assets/all projects/web-cart.jpg';

// Import MFA security project screenshots
import mfa1 from '../assets/all projects/1.JPG';
import mfa2 from '../assets/all projects/2.JPG';
import mfa3 from '../assets/all projects/3.JPG';
import mfa4 from '../assets/all projects/4.JPG';
import mfa5 from '../assets/all projects/5.JPG';

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
    description: string;
    longDescription: string;
    liveLink?: string;
    githubLink?: string;
    images: string[];
    techStack: Record<string, string>;
    objectives?: string[];
    features: string[];
  }> = {
    spareshare: {
      title: 'SpareShare AI — AI-Powered Community Platform',
      category: 'React & AI',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'AI'],
      description: 'An AI-driven community support platform designed to reduce food waste and distribute essential household items to people in need.',
      longDescription: 'SpareShare AI belongs to the domain of Artificial Intelligence, Full-Stack Web Development, and Social Impact Technology. The project applies advanced AI techniques such as image recognition, demand forecasting, fraud detection, and natural language translation to solve real-world problems in food waste reduction and community resource distribution. Edible food and usable items are saved and directed to NGOs, ensuring fast, fair, and safe matching between donors and receivers. Low-literacy users are assisted by voice translation, while predictive models forecast community shortages.',
      liveLink: 'https://spareshare-ai.netlify.app/',
      githubLink: 'https://github.com/duaafatimah',
      images: [spareshareImg],
      techStack: {
        'Frontend': 'React.js + Tailwind CSS',
        'Backend': 'Node.js + Express.js',
        'AI Microservices': 'FastAPI (Python)',
        'Database': 'MongoDB',
        'AI Libraries': 'TensorFlow, PyTorch, Tesseract OCR, Hugging Face',
        'External APIs': 'Google Maps API, Cloud Messaging',
        'Deployment': 'Railway (Backend), Netlify (Frontend)'
      },
      features: [
        'Smart suggestions for easy item categorization.',
        'Image-based food safety detection using computer vision.',
        'AI-powered matching engine to pair donation listings with active receiver requests.',
        'Intelligent fraud detection algorithms to monitor transaction safety.',
        'Real-time community need forecasting for preventative distributions.',
        'Weather-triggered local donation alerts.',
        'AI auto-translation for low-literacy and multilingual users.'
      ]
    },
    deennco: {
      title: 'Deen&Co — Skin Care & Pharmaceutical E-commerce',
      category: 'WordPress',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'Custom Styling', 'Hosting Management'],
      description: 'A fully functional WordPress e-commerce platform custom-tailored for a modern pharmaceutical and skin care brand.',
      longDescription: 'Deen&Co is a live, high-performance web platform architected and deployed on a custom domain. The system implements a full e-commerce system optimized to display skin care solutions, pharmaceutical catalog listings, and custom brand assets. The store is tailored with customized product cards, specific filters, customized cart workflows, responsive layouts, and optimization steps to handle high-volume user transactions.',
      liveLink: 'https://deennco.com/',
      images: [deenncoImg],
      techStack: {
        'CMS Platform': 'WordPress',
        'E-commerce Engine': 'WooCommerce Integration',
        'Styling': 'Custom CSS3, responsive layout overrides',
        'Backend Logic': 'PHP, WordPress Hooks & Filters',
        'Database': 'MySQL',
        'Hosting & SEO': 'Custom Domain Setup, LiteSpeed Caching, Domain Nameservers Management'
      },
      features: [
        'Complete product catalogs for skin care and pharmaceutical collections.',
        'Interactive filtering based on skin concern, product type, and active ingredients.',
        'Optimized secure checkout pipeline supporting WooCommerce payments.',
        'Responsive mobile layout adapting to tablets and phones.',
        'Integrated blog section for health and beauty articles.',
        'Admin dashboard to manage stock levels, orders, and sales analytics.'
      ]
    },
    nexus: {
      title: 'Business Nexus — Investor & Entrepreneur Collaboration Platform',
      category: 'React Web App',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'React Router', 'Vercel'],
      description: 'A secure networking dashboard where entrepreneurs pitch projects and connect with active venture capitalists.',
      longDescription: 'Business Nexus is a modern React application deployed on Vercel that streamlines startup funding and networking. The system splits profiles into Investor and Entrepreneur roles, each loading distinct panels. Entrepreneurs can showcase pitch materials, log metrics, and request consultations, while Investors scan deals using specialized sorting tools.',
      liveLink: 'https://nexus-seven-smoky-51.vercel.app/',
      githubLink: 'https://github.com/duaafatimah',
      images: [nexusImg],
      techStack: {
        'Core Library': 'React.js',
        'Build Tool': 'Vite (fast assembly)',
        'Styling': 'Tailwind CSS (utility-first components)',
        'Deployment': 'Vercel hosting',
        'State Management': 'React Context for authentication states'
      },
      features: [
        'Role-based login profiles with pre-configured investor and entrepreneur demo accounts.',
        'Interactive startup details dashboard featuring financial projections.',
        'Dynamic search filters to match startup fields with investor portfolios.',
        'Clean, accessible form inputs with real-time field validation.',
        'Vibrant UI dashboards utilizing cards and list layout grids.'
      ]
    },
    mfa: {
      title: 'Facial Recognition Based Multi-Factor Authentication System',
      category: 'Information Security & Python',
      tags: ['Python', 'OpenCV', 'DeepFace', 'JavaScript', 'Bootstrap', 'SQLite'],
      description: 'A web-based Multi-Factor Authentication System combining traditional password verification with biometric facial recognition.',
      longDescription: 'Traditional authentication methods that rely only on passwords are vulnerable to phishing and credential theft. To resolve this, this project designs and implements a secure two-stage authentication mechanism. The first stage verifies credentials using a standard hashed password match. The second stage utilizes biometric facial recognition by activating the user webcam, capturing a snapshot, and verifying the face structure against the registered database.',
      images: [mfa1, mfa2, mfa3, mfa4, mfa5],
      techStack: {
        'Frontend UI': 'HTML5, CSS3, Bootstrap 5, JavaScript',
        'Backend Server': 'Python Flask',
        'Database': 'SQLite',
        'Facial Recognition': 'OpenCV, Numpy, DeepFace library',
        'Biometric Hardware': 'Standard USB Webcam / Integrated Camera'
      },
      objectives: [
        'Develop a user registration and credential login portal.',
        'Implement password hashing mechanisms for database storage.',
        'Integrate facial recognition as a second authentication factor.',
        'Maintain secure system authentication logs and history records.'
      ],
      features: [
        'Double-factor login pipeline (Password -> Facial Verification).',
        'Biometric enrollment portal capturing facial characteristics during registration.',
        'Real-time OpenCV webcam frames capturing and cropping.',
        'Biometric verification logs displaying access timestamps, status (Success/Failure), and matched user IDs.',
        'Access control dashboard restricted to successfully verified users.'
      ]
    },
    movieverse: {
      title: 'MovieVerse — Mobile Application with TMDb API',
      category: 'Mobile Development',
      tags: ['Flutter', 'Dart', 'REST API', 'TMDb API', 'State Management'],
      description: 'A responsive cross-platform mobile application providing comprehensive movie catalogs, searches, and recommendations.',
      longDescription: 'MovieVerse is a Flutter-based mobile application designed to offer an immersive movie exploration experience. By interfacing directly with the TMDb API, the app pulls real-time details, user reviews, ratings, trailers, and personalized recommendations. The application compiles to native code, ensuring high performance on both iOS and Android platforms.',
      images: [mv1, mv2, mv3, mv4, mv5, mv6],
      techStack: {
        'Framework': 'Flutter (iOS and Android)',
        'Language': 'Dart',
        'Data API': 'TMDb REST API Integration',
        'Data Parsing': 'JSON parsing and Dart data mapping',
        'UI Design': 'Material Design Widgets, custom card views'
      },
      features: [
        'Seven distinct user screens including Home, Search, Movie Details, and Genre Listings.',
        'Real-time movie search capabilities matching dynamic user query inputs.',
        'Personalized movie suggestions based on genre matrices.',
        'Pre-built customizable widgets creating an intuitive UI layout.',
        'Fast hot-reload development iterations.'
      ]
    },
    ecommerce: {
      title: 'E-Commerce Storefront Project',
      category: 'Django Web App',
      tags: ['Python', 'Django', 'HTML5', 'CSS3', 'SQLite', 'Admin Dashboard'],
      description: 'A database-driven e-commerce platform incorporating product grids, authentication checks, and administrative control panels.',
      longDescription: 'Developed as a web engineering course project, this database-driven online storefront utilizes Django’s MVC framework. It models products, user profiles, and order tickets. The frontend provides customer catalog pages, cart selectors, and secure login portals, while Django’s admin panel serves as the inventory console for stock management.',
      images: [weMain, weGrid, weList, weDetail, weCart, ecommerceImg],
      techStack: {
        'Backend Framework': 'Django (Python)',
        'Database': 'SQLite (relational model mapping)',
        'Frontend UI': 'HTML5, CSS3, responsive flex layout components',
        'Authentication': 'Django User Auth modules'
      },
      features: [
        'Responsive product catalog grid and list view toggles.',
        'Complete shopping cart pipelines (Add, Remove, Edit Quantities).',
        'User registration, login, and profile summary views.',
        'Comprehensive Django admin dashboard controlling categories, stock quantities, and user orders.',
        'Database integrations saving order history records.'
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <section style={{ textAlign: 'center', paddingTop: '150px' }}>
        <h2>Project Not Found</h2>
        <button onClick={onBack} className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Home
        </button>
      </section>
    );
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <section className="project-detail-section" style={{ paddingTop: 'clamp(90px, 15vw, 140px)', maxWidth: '1000px', margin: '0 auto', textAlign: 'left', padding: 'clamp(90px, 15vw, 140px) 20px 40px', boxSizing: 'border-box', width: '100%' }}>
      {/* Back button */}
      <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '32px', display: 'inline-flex', alignItems: 'center' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Portfolio
      </button>

      {/* Project Title and Header */}
      <div style={{ marginBottom: '24px' }}>
        <span className="section-tag" style={{ marginBottom: '12px' }}>{project.category}</span>
        <h1 style={{ fontSize: 'clamp(1.4rem, 4vw, 3rem)', fontFamily: 'var(--display)', marginBottom: '16px', lineHeight: '1.2' }}>{project.title}</h1>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {project.tags.map((tag, idx) => (
            <span className={`project-tag ${idx % 2 === 0 ? 'teal' : ''}`} key={idx} style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshot / Carousel Section - Fixed to render active slide index directly */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        border: '1px solid var(--border)', 
        marginBottom: '40px', 
        background: '#090d16',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        padding: '20px'
      }}>
        <img
          src={project.images[activeSlide]}
          alt={`Screenshot ${activeSlide + 1}`}
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
        />

        {/* Carousel Indicators & Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(7,9,14,0.7)', border: '1px solid var(--border)', color: 'white', width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(7,9,14,0.7)', border: '1px solid var(--border)', color: 'white', width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
              {project.images.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  style={{ width: '8px', height: '8px', borderRadius: '50%', background: activeSlide === idx ? 'var(--primary)' : 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'background 0.3s' }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Main Grid: Description & Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '40px', marginBottom: '40px' }} className="project-detail-grid">
        {/* Left column: Narrative details */}
        <div>
          <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--display)', marginBottom: '16px', color: 'var(--primary)' }}>Project Overview</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
            {project.longDescription}
          </p>

          {project.objectives && (
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--display)', marginBottom: '12px' }}>Objectives</h3>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.objectives.map((obj, oIdx) => (
                  <li key={oIdx} style={{ marginBottom: '8px' }}>{obj}</li>
                ))}
              </ul>
            </div>
          )}

          <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--display)', marginBottom: '16px', color: 'var(--primary)' }}>Key Features</h2>
          <ul className="timeline-desc" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {project.features.map((feature, fIdx) => (
              <li key={fIdx} style={{ position: 'relative', paddingLeft: '24px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: Specs and links */}
        <div>
          {/* Action Links */}
          <div className="glass" style={{ padding: '24px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Access Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Visit Live Site
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Source Repository
                </a>
              )}
              {!project.liveLink && !project.githubLink && (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', display: 'block', padding: '8px' }}>
                  Private Repository (Local Environment only)
                </span>
              )}
            </div>
          </div>

          {/* Tech Specs */}
          <div className="glass" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Technical Profile</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <tbody>
                {Object.entries(project.techStack).map(([label, val], sIdx) => (
                  <tr key={sIdx} style={{ borderBottom: sIdx === Object.entries(project.techStack).length - 1 ? 'none' : '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 0', color: 'var(--text-secondary)', fontWeight: '600', width: '40%', verticalAlign: 'top' }}>{label}</td>
                    <td style={{ padding: '12px 0', color: 'var(--text-primary)', width: '60%', textAlign: 'right' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .project-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}} />
    </section>
  );
};
export default ProjectDetail;
