import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">Completed Projects</h2>
          <p className="section-subtitle">
            Some of the projects I have developed for businesses and organizations.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card reveal-on-scroll delay-${(index % 3) + 1}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="project-card-header" style={{ marginBottom: 0 }}>
                {/* Top Row: Direct Large Logo on Left, Pulsing Live Dot on Right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', height: '48px' }}>
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      style={{
                        height: '46px',
                        maxWidth: '170px',
                        objectFit: 'contain',
                        objectPosition: 'left center'
                      }}
                    />
                  ) : (
                    <div style={{ height: '46px' }} />
                  )}

                  {/* Pulsing Live Green Dot Only */}
                  <span className="live-dot" title="Live Project"></span>
                </div>

                {/* Title */}
                <h3 className="project-title" style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {project.title}
                </h3>

                {/* Bottom Row: Tech Stack on Left, Visit Project on Right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div className="project-tech" style={{ marginTop: 0 }}>
                    <Layers size={16} style={{ color: '#7c3aed', flexShrink: 0 }} />
                    <span>Tech Stack: <strong style={{ color: '#0f172a' }}>{project.techStack}</strong></span>
                  </div>

                  <span className="project-visit-text">
                    <span>Visit Project</span>
                    <ExternalLink size={14} className="project-link-icon" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
