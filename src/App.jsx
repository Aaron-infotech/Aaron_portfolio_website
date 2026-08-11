import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import FloatingActionBar from './components/FloatingActionBar';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        } else {
          entry.target.classList.remove('reveal-active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Initial attach
    const attachObserver = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    };

    attachObserver();
    // Re-check after DOM renders
    const timer = setTimeout(attachObserver, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="portfolio-app">
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Clients />
        <Contact onOpenContact={handleOpenContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContact} />
      <FloatingActionBar onOpenContact={handleOpenContact} />
    </div>
  );
}

export default App;
