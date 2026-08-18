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
                {/* Top Row: Circular Logo + Title on Left, Pulsing Live Dot on Right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {project.logo && (
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        padding: '4px',
                        flexShrink: 0
                      }}>
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                    )}
                    <h3 className="project-title" style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, lineHeight: 1.25 }}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Pulsing Live Red Dot */}
                  <span className="live-dot" title="Live Project"></span>
                </div>

                {/* Tech Stack */}
                <div className="project-tech" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                  <Layers size={16} style={{ color: '#7c3aed', flexShrink: 0 }} />
                  <span>Tech Stack: <strong style={{ color: '#0f172a' }}>{project.techStack}</strong></span>
                </div>

                {/* Last Row: Visit Project Text Centered */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px dashed #e2e8f0' }}>
                  <span className="project-visit-text" style={{ justifyContent: 'center' }}>
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
