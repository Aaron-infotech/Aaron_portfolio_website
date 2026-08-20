import React from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">Completed Projects</h2>
          <p className="section-subtitle">
            Some of the key web applications and platforms I have built for clients & businesses.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card-premium reveal-on-scroll delay-${(index % 2) + 1}`}
            >
              {/* Top Row: Logo Badge + Tag Pill on Left, LIVE Badge on Right */}
              <div className="project-card-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {project.logo && (
                    <div className="project-logo-badge">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="project-logo-img"
                      />
                    </div>
                  )}
                  {project.tag && (
                    <span className="project-category-tag">
                      {project.tag}
                    </span>
                  )}
                </div>

                <div className="project-live-badge" title="Live Project">
                  <span className="live-dot-pulse"></span>
                  <span>LIVE</span>
                </div>
              </div>

              {/* Middle Row: Title & Description */}
              <div className="project-card-body">
                <h3 className="project-title-text">{project.title}</h3>
                {project.description && (
                  <p className="project-description-text">{project.description}</p>
                )}
              </div>

              {/* Bottom Row: Tech Stack Pill + Action Button */}
              <div className="project-card-footer">
                <div className="project-tech-badge">
                  <Layers size={14} style={{ color: '#7c3aed' }} />
                  <span>{project.techStack}</span>
                </div>

                <span className="project-action-btn">
                  <span>Visit Project</span>
                  <ArrowUpRight size={16} className="project-btn-icon" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
