import React, { useState, useEffect } from 'react';
import { Code2, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/aaron-profile.png';

const Hero = ({ onOpenContact }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];

    // Typing speed vs Deleting speed
    let speed = 90; // ms per letter typed
    if (isDeleting) {
      speed = 45; // ms per letter deleted
    }

    const handleTyping = () => {
      if (!isDeleting && currentText !== currentRole) {
        // Type next letter
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      } else if (!isDeleting && currentText === currentRole) {
        // Hold full sentence for 1.8 seconds before deleting
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText !== '') {
        // Delete previous letter
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next sentence and start typing
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % personalInfo.roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Current active icon based on role
  const getRoleIcon = (roleName) => {
    if (roleName === "Front-End Developer") return <Code2 size={24} className="text-purple" />;
    if (roleName === "Skill Trainer") return <Award size={24} className="text-purple" />;
    if (roleName === "Web Developer") return <Sparkles size={24} className="text-purple" />;
    return <Code2 size={24} className="text-purple" />;
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Side Content */}
          <div className="hero-content reveal-on-scroll reveal-fade-left">
            <div className="hero-greeting">
              <span>{personalInfo.smallIntro}</span>

            </div>

            {/* Heading: Aaron J with distinct space */}
            <h1 className="hero-heading">
              <span className="text-purple">{personalInfo.name.split(' ')[0]}</span>
              <span className="hero-name-initial text-purple">
                {personalInfo.name.split(' ')[1] ? ` ${personalInfo.name.split(' ')[1]}` : ''}
              </span>
              {personalInfo.degree && (
                <span className="hero-degree-tag">{personalInfo.degree}</span>
              )}
            </h1>

            {/* Repeating Sentence Typewriter Animation */}
            <div className="hero-subtitle-typing">
              {getRoleIcon(personalInfo.roles[roleIndex])}
              <span className="typing-text">{currentText}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-description">
              {personalInfo.heroDescription}
            </p>

            <div className="hero-actions">
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Aaron, I'm interested in hiring you for a project!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={18} />
              </a>

              <a href="#projects" className="btn btn-secondary">
                <span>View Projects</span>
              </a>
            </div>


          </div>

          {/* Right Side Developer Profile Photo with Multi-Stroke Diagonal Paint Texture Backdrop */}
          <div className="hero-image-wrapper reveal-on-scroll reveal-fade-right">
            <div className="hero-paint-backdrop">
              <svg viewBox="0 0 700 700" className="paint-stroke-svg" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(-25 350 350)">
                  {/* Main wide diagonal brush stroke */}
                  <rect x="70" y="240" width="560" height="90" rx="45" fill="url(#brushGrad1)" opacity="0.85" />
                  {/* Top parallel stroke */}
                  <rect x="130" y="160" width="480" height="70" rx="35" fill="url(#brushGrad2)" opacity="0.75" />
                  {/* Bottom parallel stroke */}
                  <rect x="100" y="340" width="500" height="75" rx="37" fill="url(#brushGrad1)" opacity="0.7" />
                  {/* Topmost accent stroke */}
                  <rect x="180" y="110" width="400" height="40" rx="20" fill="url(#brushGrad3)" opacity="0.6" />
                  {/* Bottommost accent stroke */}
                  <rect x="150" y="425" width="420" height="45" rx="22" fill="url(#brushGrad2)" opacity="0.5" />
                </g>

                <defs>
                  <linearGradient id="brushGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(124, 58, 237, 0.32)" />
                    <stop offset="50%" stopColor="rgba(168, 85, 247, 0.22)" />
                    <stop offset="100%" stopColor="rgba(233, 213, 255, 0.4)" />
                  </linearGradient>
                  <linearGradient id="brushGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(192, 132, 252, 0.35)" />
                    <stop offset="100%" stopColor="rgba(124, 58, 237, 0.18)" />
                  </linearGradient>
                  <linearGradient id="brushGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.25)" />
                    <stop offset="100%" stopColor="rgba(243, 232, 255, 0.45)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <img
              src={profileImg}
              alt="Aaron - Front-End & Web Developer"
              className="hero-person-img"
            />
          </div>
        </div>
      </div>

      {/* Curved Wave Bottom Divider - Replicated from User's Reference Screenshot */}
      <div className="hero-wave-divider">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Solid White Fill */}
          <path
            d="M0,35 C320,95 680,20 1080,45 C1260,58 1380,75 1440,85 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
          {/* Defined Stroke along top wave curve */}
          <path
            d="M0,35 C320,95 680,20 1080,45 C1260,58 1380,75 1440,85"
            stroke="rgba(124, 58, 237, 0.35)"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
