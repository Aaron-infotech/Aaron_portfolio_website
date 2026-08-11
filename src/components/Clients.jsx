import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, CheckCircle2, Award, Zap } from 'lucide-react';
import { clientsData, statsData } from '../data/portfolioData';

// Component for smooth count-up number animation when visible on screen
const AnimatedStatValue = ({ value }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  // Parse target number and suffix (e.g. "10+" -> 10 and "+", "100%" -> 100 and "%", "24/7" -> 24 and "/7")
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasAnimated || !target) return;

    let startTimestamp = null;
    const duration = 1800; // 1.8 seconds duration

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth ease-out cubic animation formula
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, target]);

  return (
    <span ref={elementRef} className="stat-value">
      {hasAnimated ? count : 0}{suffix}
    </span>
  );
};

const Clients = () => {
  return (
    <section id="clients" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">Happy Clients</h2>
          <p className="section-subtitle">
            Trusted by businesses and organizations.
          </p>
        </div>

        {/* Collaborative Partners Logo Grid */}
        <div className="clients-grid reveal-on-scroll reveal-scale" style={{ marginBottom: '3.5rem' }}>
          {clientsData.map((client) => (
            <a
              key={client.id}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="client-logo-card"
              title={`Visit ${client.fullTitle}`}
            >
              <div className="client-logo-wrapper">
                <img
                  src={client.logo}
                  alt={`${client.fullTitle} Logo`}
                  className="client-logo-img"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="client-logo-fallback" style={{ display: 'none' }}>
                  {client.name}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Performance Stats Banner with Smooth Number Count-Up Animation */}
        <div className="stats-banner reveal-on-scroll">
          <div className="stat-item">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Award size={24} style={{ color: '#fef08a' }} />
              <AnimatedStatValue value={statsData[0].value} />
            </div>
            <span className="stat-label">{statsData[0].label}</span>
          </div>

          <div className="stat-item">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <CheckCircle2 size={24} style={{ color: '#86efac' }} />
              <AnimatedStatValue value={statsData[1].value} />
            </div>
            <span className="stat-label">{statsData[1].label}</span>
          </div>

          <div className="stat-item">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Zap size={24} style={{ color: '#bae6fd' }} />
              <AnimatedStatValue value={statsData[2].value} />
            </div>
            <span className="stat-label">{statsData[2].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
