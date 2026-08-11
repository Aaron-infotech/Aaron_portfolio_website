import React from 'react';
import { Globe, ShoppingCart, LayoutDashboard, Lightbulb } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconComponents = {
  Globe: <Globe size={28} />,
  ShoppingCart: <ShoppingCart size={28} />,
  LayoutDashboard: <LayoutDashboard size={28} />,
  Lightbulb: <Lightbulb size={28} />
};

const Services = () => {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Tailored digital services to transform ideas into reliable digital products.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className={`service-card reveal-on-scroll delay-${(index % 4) + 1}`}>
              <div className="service-icon-box">
                {iconComponents[service.iconName] || <Globe size={28} />}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
