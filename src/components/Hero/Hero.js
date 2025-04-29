import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa';

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
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1>John Smith <span>Law Firm</span></h1>
            <h2>Trusted Legal Counsel for Complex Matters</h2>
            
            <div className="hero-features">
              <div className="feature">
                <div className="feature-icon"><FaBalanceScale /></div>
                <p>Strategic Legal Solutions</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><FaGavel /></div>
                <p>Aggressive Advocacy</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><FaHandshake /></div>
                <p>Client-Centered Approach</p>
              </div>
            </div>
            
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
          
          <div className="hero-image">
            <div className="hero-image-inner">
              <img src="https://images.unsplash.com/photo-1594761046251-4d9133c0134a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Professional attorney" />
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
        </div>
      </div>
    </section>
  );
};

export default Hero;