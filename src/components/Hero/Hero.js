import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { FaBalanceScale, FaGavel, FaHandshake, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="hero">
      <div className="hero-container" ref={heroRef}>
        <div className="hero-headline">
          <h1>John Smith <span>Law Firm</span></h1>
          <h2>Trusted Legal Counsel for Complex Matters</h2>
        </div>
        
        <div className="hero-content-wrapper">
          <div className="hero-description-block">
            <p className="hero-description">
              Providing exceptional legal services with a modern approach for businesses and individuals since 2003.
            </p>
            
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Free Consultation
              </button>
              <button onClick={() => scrollToSection('services')} className="btn btn-secondary">
                Our Services
              </button>
            </div>
          </div>
          
          <div className="hero-credentials">
            <div className="credential">
              <span className="number">20+</span>
              <span className="label">Years Experience</span>
            </div>
            <div className="credential">
              <span className="number">500+</span>
              <span className="label">Cases Won</span>
            </div>
            <div className="credential">
              <span className="number">98%</span>
              <span className="label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className="hero-features-wrapper">
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon"><FaBalanceScale /></div>
              <div className="feature-content">
                <h3>Strategic Legal Solutions</h3>
                <p>Tailored strategies for your unique legal challenges</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon"><FaGavel /></div>
              <div className="feature-content">
                <h3>Aggressive Advocacy</h3>
                <p>Determined representation to protect your interests</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon"><FaHandshake /></div>
              <div className="feature-content">
                <h3>Client-Centered Approach</h3>
                <p>Personalized attention to your specific needs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Learn More</span>
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;