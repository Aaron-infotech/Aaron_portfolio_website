import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active link highlight detection
      const sections = ['home', 'about', 'projects', 'services', 'skills', 'clients', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Clients', href: '#clients', id: 'clients' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#home" className="logo" aria-label="Aaron Logo">
            <span>{personalInfo.name}</span>
            <span className="logo-dot"></span>
          </a>

          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onOpenContact}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.92rem' }}
            >
              <MessageSquare size={16} />
              <span>Let's Talk</span>
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <aside className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div className="mobile-nav-header">
            <a href="#home" className="logo" onClick={() => setMobileMenuOpen(false)}>
              <span>{personalInfo.name}</span>
              <span className="logo-dot"></span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'none', border: 'none', color: '#0f172a' }}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={activeSection === item.id ? 'text-purple' : ''}
                >
                  <ArrowRight size={16} style={{ color: '#7c3aed' }} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ paddingTop: '2rem' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <MessageSquare size={18} />
            <span>Let's Talk</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
