import React from 'react';
import { Phone } from 'lucide-react';
import { GithubIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const FloatingActionBar = () => {
  return (
    <div className="floating-dock-bar">
      <div className="floating-dock-inner">
        {/* GitHub Account Link */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item item-github"
          title="GitHub Account"
          aria-label="GitHub"
        >
          <GithubIcon size={19} />
          <span className="dock-tooltip">GitHub</span>
        </a>

        {/* LinkedIn Profile */}
        <a
          href={socialLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item item-linkedin"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedInIcon size={19} />
          <span className="dock-tooltip">LinkedIn</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item item-whatsapp"
          title="WhatsApp Chat"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={19} />
          <span className="dock-tooltip">WhatsApp</span>
        </a>

        {/* Phone Direct Call */}
        <a
          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
          className="dock-item item-call"
          title="Call Aaron"
          aria-label="Call Aaron"
        >
          <Phone size={19} />
          <span className="dock-tooltip">Call</span>
        </a>

        {/* Instagram Profile */}
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item item-instagram"
          title="Instagram"
          aria-label="Instagram"
        >
          <InstagramIcon size={19} />
          <span className="dock-tooltip">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingActionBar;
