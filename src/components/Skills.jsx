import React from 'react';
import {
  Html5Logo,
  Css3Logo,
  JavaScriptLogo,
  ReactLogo,
  BackendLogo,
  AiCodeLogo
} from './TechLogos';
import { skillsData } from '../data/portfolioData';

const logoMap = {
  "HTML": <Html5Logo size={28} />,
  "CSS": <Css3Logo size={28} />,
  "JavaScript": <JavaScriptLogo size={28} />,
  "React JS": <ReactLogo size={30} />,
  "Backend Development": <BackendLogo size={28} />,
  "AI Code Generation": <AiCodeLogo size={28} />
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Core tech stack and tools I specialize in to build fast, scalable applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className={`skill-card reveal-on-scroll delay-${(index % 3) + 1}`}>
              <div className="skill-icon-wrapper" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                {logoMap[skill.name] || <ReactLogo size={28} />}
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
