import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <div className="about-content-wrapper">
        <h1 className="about-header">
          Transforming Requirements into User Stories
        </h1>

        {/* Stats Section */}
        <div className="stats-container ">
          <div className="stat-card">
            <div className="stat-number">Only 17/436</div>
            <div className="stat-label">Projects in Requirements Engineering</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">AI-Powered Solution</div>
          </div>
        </div>

        <p className="about-paragraph">
          Development teams face a vast amount of challenges converting requirements into user
          stories. And in this AI powered generation, there has been little work in speeding this pro-
          cess up. According to a research paper that checked the involvement of LLMs in Software
          Engineering found that only 17 of 436 projects[11] tackled requirements engineering, with
          none targeting user stories.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-title">Automated Conversion</h3>
            <p className="text-gray-300">
              Our AI-powered system streamlines the conversion of requirements into precise user stories.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Quality Assurance</h3>
            <p className="text-gray-300">
              Built-in evaluation system ensures consistent, high-quality user stories.
            </p>
          </div>
        </div>

        <p className="about-paragraph">
          A task as complex as this needed some LLM enrichment and that is what this project 
          hopes to achieve. The conversion process is an arduous one as it requires manually 
          converting those requirements to user stories in order to be worked on for the sprints.
        </p>

        <p className="about-paragraph">
          By developing this project, we aim to address these problems and increase the quality 
          and consistency of the user story generation process using a robust self-evaluation 
          system that ensures only the highest quality of user stories are passed to the developers 
          to work on.
        </p>

        <div className="text-center mt-8">
          <button className="cta-button" onClick={()=>navigate('/signup')}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
