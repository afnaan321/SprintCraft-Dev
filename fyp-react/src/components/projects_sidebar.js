import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="workpage1-project-container w-[15%] min-w-[200px]"> {/* Adjusted width */}
      <h1 className="workpage1-header text-lg">Your Projects</h1> {/* Reduced font size */}
      <div className="workpage1-subcontainer p-4"> {/* Adjusted padding */}
        <p className="text-sm">All previous/current projects will be displayed here</p>
        {/* Example projects (Replace with dynamic data) */}
        <div className="workpage1-subcontainer p-4">
          <div className="text-base font-semibold">Project Name</div>
          <div className="text-xs text-gray-300">Date Created</div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="cta-button text-sm px-4 py-2" onClick={() => navigate('/signup')}>
          Add More
        </button>
      </div>
    </div>
  );
};

export default ProjectsSidebar;
