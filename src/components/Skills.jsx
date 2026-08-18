import React from 'react';
import { Code2, Atom, Server, Database, GitBranch, Sparkles } from 'lucide-react';
import {
  Html5Logo,
  Css3Logo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  NextjsLogo,
  TailwindLogo,
  BootstrapLogo,
  NodejsLogo,
  ExpressLogo,
  RestApiIcon,
  PostgresLogo,
  MongoLogo,
  MysqlLogo,
  GitLogo,
  GithubLogo,
  DockerLogo,
  CiCdIcon,
  AiAssistantIcon,
  PromptEngIcon,
  McpIcon,
  AiDevIcon
} from './TechLogos';
import { skillsData } from '../data/portfolioData';

const categoryIconMap = {
  Code2: <Code2 size={26} />,
  Atom: <Atom size={26} />,
  Server: <Server size={26} />,
  Database: <Database size={26} />,
  GitBranch: <GitBranch size={26} />,
  Sparkles: <Sparkles size={26} />
};

const techLogoMap = {
  "HTML5": <Html5Logo size={18} />,
  "CSS3": <Css3Logo size={18} />,
  "JavaScript (ES6+)": <JavaScriptLogo size={18} />,
  "TypeScript": <TypeScriptLogo size={18} />,
  "React.js": <ReactLogo size={18} />,
  "Next.js": <NextjsLogo size={18} />,
  "Tailwind CSS": <TailwindLogo size={18} />,
  "Bootstrap": <BootstrapLogo size={18} />,
  "Node.js": <NodejsLogo size={18} />,
  "Express.js": <ExpressLogo size={18} />,
  "REST APIs": <RestApiIcon size={18} />,
  "PostgreSQL": <PostgresLogo size={18} />,
  "MongoDB": <MongoLogo size={18} />,
  "MySQL": <MysqlLogo size={18} />,
  "Git": <GitLogo size={18} />,
  "GitHub": <GithubLogo size={18} />,
  "Docker": <DockerLogo size={18} />,
  "CI/CD": <CiCdIcon size={18} />,
  "AI Code Assistants": <AiAssistantIcon size={18} />,
  "Prompt Engineering": <PromptEngIcon size={18} />,
  "MCP": <McpIcon size={18} />,
  "AI Project Development": <AiDevIcon size={18} />
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Core tech stack, frameworks, and developer tools I specialize in to build fast, scalable applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div key={skillCategory.id} className={`skill-category-card reveal-on-scroll delay-${(index % 3) + 1}`}>
              <div className="skill-card-header">
                <div className="skill-icon-box">
                  {categoryIconMap[skillCategory.iconName] || <Code2 size={26} />}
                </div>
                <h3 className="skill-category-title">{skillCategory.title}</h3>
              </div>

              <div className="skill-tech-list">
                {skillCategory.techList.map((tech, techIdx) => (
                  <span key={techIdx} className="skill-tech-pill">
                    {techLogoMap[tech] && <span className="tech-pill-icon">{techLogoMap[tech]}</span>}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
