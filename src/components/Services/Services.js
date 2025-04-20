import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Services.css';

// Import icons from react-icons package
import { FaBalanceScale, FaHome, FaBriefcase, FaHandshake, FaUsers, FaGavel } from 'react-icons/fa';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      id: 1,
      title: "Civil Litigation",
      icon: <FaBalanceScale />,
      shortDesc: "Expert representation in civil disputes and litigation matters.",
      fullDesc: `Our civil litigation practice covers a wide range of disputes including contract disputes, 
                property disputes, personal injury claims, and more. With a strategic approach to litigation, 
                we work to achieve the best possible outcome while minimizing costs and stress.
                
                Our team has successfully handled cases at all levels of court, including:
                • State and federal trial courts
                • Appellate courts
                • Alternative dispute resolution forums
                
                We begin each case with a thorough evaluation to determine the most effective strategy for resolution, 
                whether that involves negotiation, mediation, arbitration, or trial.`
    },
    {
      id: 2,
      title: "Real Estate Law",
      icon: <FaHome />,
      shortDesc: "Comprehensive legal services for all real estate transactions.",
      fullDesc: `Our real estate practice provides guidance through all aspects of real property transactions and disputes.
                From residential purchases to complex commercial developments, we ensure your interests are protected.
                
                Our real estate services include:
                • Residential and commercial transactions
                • Lease negotiations and reviews
                • Title examinations
                • Zoning and land use matters
                • Construction disputes
                • Landlord-tenant issues
                
                Our attorneys have extensive experience in real estate law and can help navigate the complexities of property ownership, 
                transfers, and disputes.`
    },
    {
      id: 3,
      title: "Corporate Law",
      icon: <FaBriefcase />,
      shortDesc: "Legal guidance for businesses of all sizes.",
      fullDesc: `Our corporate law practice provides businesses with the legal foundation and ongoing support they need to thrive. 
                From formation to dissolution and everything in between, we offer practical legal solutions tailored to your business objectives.
                
                Our corporate services include:
                • Business formation and structuring
                • Corporate governance
                • Mergers and acquisitions
                • Contract drafting and review
                • Regulatory compliance
                • Business dissolution and reorganization
                
                We work with startups, small businesses, and established corporations to provide strategic legal counsel that aligns with business goals.`
    },
    {
      id: 4,
      title: "Contract Law",
      icon: <FaHandshake />,
      shortDesc: "Drafting, reviewing, and enforcing contracts for all scenarios.",
      fullDesc: `Contracts form the foundation of business and personal transactions. Our contract law practice ensures that your agreements 
                are clear, enforceable, and protect your interests.
                
                Our contract services include:
                • Contract drafting and negotiation
                • Contract review and analysis
                • Contract dispute resolution
                • Breach of contract litigation
                • Non-disclosure and confidentiality agreements
                • Employment contracts
                
                Whether you need a single contract reviewed or a comprehensive set of agreements for your business, 
                our attorneys provide detailed attention to ensure your contracts serve their intended purpose.`
    },
    {
      id: 5,
      title: "Family Law",
      icon: <FaUsers />,
      shortDesc: "Compassionate legal support for family matters.",
      fullDesc: `Our family law practice provides sensitive and strategic guidance through some of life's most challenging transitions. 
                We focus on achieving resolutions that protect your interests while minimizing conflict.
                
                Our family law services include:
                • Divorce proceedings
                • Child custody and support
                • Spousal support/alimony
                • Property division
                • Prenuptial and postnuptial agreements
                • Adoption
                • Guardianship
                
                We understand the emotional nature of family law matters and provide compassionate representation focused on 
                achieving the best possible outcome for you and your family.`
    },
    {
      id: 6,
      title: "Criminal Defense",
      icon: <FaGavel />,
      shortDesc: "Vigorous defense against criminal charges.",
      fullDesc: `Our criminal defense practice provides strong advocacy for clients facing charges at all levels of severity. 
                We believe everyone deserves a robust defense and work tirelessly to protect your rights throughout the legal process.
                
                Our criminal defense services include:
                • Felony and misdemeanor defense
                • White collar crime defense
                • DUI/DWI defense
                • Drug offenses
                • Violent crimes
                • Federal criminal defense
                • Appeals
                
                Our defense attorneys have extensive courtroom experience and a track record of successful outcomes for our clients.`
    }
  ];

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Legal expertise tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <button 
                className="btn-learn-more" 
                onClick={() => openModal(service.id)}
              >
                Learn More
              </button>
              
              <Modal 
                isOpen={activeModal === service.id}
                onClose={closeModal}
                title={service.title}
              >
                <div className="service-detail">
                  <div className="service-detail-icon">{service.icon}</div>
                  <div className="service-detail-content">
                    {service.fullDesc.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;