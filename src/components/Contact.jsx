import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = ({ onOpenContact }) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Get in touch to discuss your next web development project, website upgrade, or technical training.
          </p>
        </div>

        <div className="contact-card-box reveal-on-scroll reveal-scale">
          {/* Left Details */}
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Direct Contact
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginTop: '0.25rem', marginBottom: '1.5rem', color: '#0f172a' }}>
              {personalInfo.name}
            </h3>

            <div className="contact-info-list">
              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-detail-title">Phone Number</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="contact-detail-value"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-detail-title">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="contact-detail-value"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-detail-title">Location</div>
                  <div className="contact-detail-value">{personalInfo.address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right CTA Panel */}
          <div className="contact-cta-panel">
            <h4 className="contact-cta-title" style={{ color: '#0f172a' }}>
              Have a project in mind?
            </h4>
            <p className="contact-cta-text">
              Let's build something amazing together. Reach out for custom web solutions or skill training programs.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={onOpenContact}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>Contact Me</span>
              </button>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
