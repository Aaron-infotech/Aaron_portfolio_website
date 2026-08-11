import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const FloatingActionBar = ({ onOpenContact }) => {
  return (
    <div className="floating-dock-bar">
      <div className="floating-dock-inner">
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

        {/* Email / Direct Hire Modal */}
        <button
          onClick={onOpenContact}
          className="dock-item item-contact"
          title="Email / Contact"
          aria-label="Contact"
        >
          <Mail size={19} />
          <span className="dock-tooltip">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingActionBar;
