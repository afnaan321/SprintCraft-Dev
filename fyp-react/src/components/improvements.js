import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImprovementsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="workpage1-project-container">
      <h1 className="workpage1-header">Improvements</h1>
      <div className="workpage1-subcontainer">
        <p>User story improvements/scoring will be displayed here</p>
      </div>
      <div className="text-center mt-8">
        <button className="cta-button" onClick={() => navigate('/signup')}>
          Add More
        </button>
      </div>
    </div>
  );
};

export default ImprovementsSection;
