import React from 'react';
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span>{personalInfo.name}</span>
              <span className="logo-dot"></span>
            </a>
            <p className="footer-role">
              Front-End Developer | Skill Trainer | Web Developer
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1rem' }}>
              Connect
            </h4>
            <div className="footer-socials">
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
