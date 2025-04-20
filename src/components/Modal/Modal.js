import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    // Lock body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Stop propagation to prevent shaking and duplicate triggers
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      data-testid="modal-overlay"
    >
      <div 
        className="modal-container" 
        onClick={handleContainerClick}
        data-testid="modal-content"
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;