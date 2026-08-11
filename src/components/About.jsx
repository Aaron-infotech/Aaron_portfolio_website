import React from 'react';
import {
  Code2,
  Palette,
  Atom,
  Building2,
  LayoutDashboard,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  Code2: <Code2 size={18} />,
  Palette: <Palette size={18} />,
  Atom: <Atom size={18} />,
  Building2: <Building2 size={18} />,
  LayoutDashboard: <LayoutDashboard size={18} />,
  Cpu: <Cpu size={18} />,
  GraduationCap: <GraduationCap size={18} />,
  Sparkles: <Sparkles size={18} />
};

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#fdfdfd' }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Delivering high-performance digital experiences and technical guidance
          </p>
        </div>

        <div className="about-grid">
          {/* Main bio text card with premium layout */}
          <div className="about-card-premium reveal-on-scroll reveal-fade-left">
            <div className="about-card-header">
              <span className="about-experience-badge">
                <Sparkles size={15} /> 5+ Years Experience
              </span>
              <Quote size={36} className="about-quote-mark" />
            </div>

            <p className="about-lead-text">
              I’m a <strong>Freelance Web Developer</strong> creating modern, responsive websites, Web applications, Management Software, and digital solutions that help businesses grow. 🚀
            </p>
            
            <p className="about-secondary-text">
              I help businesses, startups, and brands establish a strong digital presence with high-performance websites that drive growth, build credibility, and generate meaningful results.
            </p>

            <div className="about-pillars-grid">
              <div className="pillar-badge">
                <div className="pillar-icon-box">
                  <Zap size={15} />
                </div>
                <span>Responsive Design</span>
              </div>

              <div className="pillar-badge">
                <div className="pillar-icon-box">
                  <Layers size={15} />
                </div>
                <span>Modern Stack</span>
              </div>

              <div className="pillar-badge">
                <div className="pillar-icon-box">
                  <ShieldCheck size={15} />
                </div>
                <span>Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* Core Specializations Grid */}
          <div className="about-specializations-container reveal-on-scroll reveal-fade-right">
            <h3 className="specializations-title">
              Core Specializations
            </h3>
            <div className="highlights-grid">
              {aboutHighlights.map((item, index) => (
                <div key={index} className="highlight-item-card">
                  <span className="highlight-icon-wrapper">
                    {iconMap[item.icon] || <CheckCircle2 size={18} />}
                  </span>
                  <span className="highlight-item-text">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
