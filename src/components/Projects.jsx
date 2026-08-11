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
            <div key={project.id} className={`project-card reveal-on-scroll delay-${(index % 3) + 1}`}>
              <div className="project-card-header">
                <span className="project-badge">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>

                <div className="project-tech">
                  <Layers size={16} style={{ color: '#7c3aed' }} />
                  <span>Tech Stack: <strong style={{ color: '#0f172a' }}>{project.techStack}</strong></span>
                </div>
              </div>

              <div className="project-card-footer">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-visit"
                >
                  <span>Visit Site</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
