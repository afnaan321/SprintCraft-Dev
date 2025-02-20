import React from 'react';
import './contact.css'; 

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="Contact-content-wrapper">
        <h1 className="Contact-header">
          Get to Know us
        </h1>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">Email</div>
            <div className="stat-label">SprintCraft@fast.com</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Phone</div>
            <div className="stat-label">+92123123123</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
