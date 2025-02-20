// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserStoriesMain = () => {
//   const navigate = useNavigate();
//   const [file, setFile] = useState(null);
//   const [userStory, setUserStory] = useState('');

//   const handleFileUpload = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <div className="workpage1-project-container">
//       <h1 className="workpage1-header">User Stories</h1>
//       <div className="workpage1-subcontainer">
//         <p>The generated user stories will be displayed here</p>
//       </div>
//       <div className="workpage1-inputspace mt-6">
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Enter your user story"
//             className="fancy-input"
//             value={userStory}
//             onChange={(e) => setUserStory(e.target.value)}
//           />
//           <input type="file" className="input-field" onChange={handleFileUpload} />
//           <button className="cta-button" onClick={() => navigate('/signup')}>
//             Generate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserStoriesMain;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserStoriesMain = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [userStory, setUserStory] = useState('');

  // Dummy data (User Stories)
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "As a customer, I want to add products to my cart so that I can purchase them later.",
      status: "In Progress",
      priority: "High",
      createdAt: "2025-02-16",
    },
    {
      id: 2,
      title: "As a user, I want to receive email notifications so that I stay updated on my order status.",
      status: "Completed",
      priority: "Medium",
      createdAt: "2025-02-14",
    },
    {
      id: 3,
      title: "As an admin, I want to manage user accounts so that I can ensure platform security.",
      status: "Pending",
      priority: "High",
      createdAt: "2025-02-15",
    },
    {
      id: 4,
      title: "As a seller, I want to view sales reports so that I can track my earnings.",
      status: "In Progress",
      priority: "Low",
      createdAt: "2025-02-12",
    }
  ]);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="workpage1-project-container">
      <h1 className="workpage1-header">User Stories</h1>

      {/* Displaying user stories */}
      <div className="workpage1-subcontainer">
        {stories.length > 0 ? (
          stories.map((story) => (
            <div key={story.id} className="mb-4 p-4 bg-black/30 rounded-xl border border-purple-800/30">
              <h2 className="text-lg font-semibold">{story.title}</h2>
              <p className="text-sm text-gray-300">Status: {story.status}</p>
              <p className="text-sm text-gray-300">Priority: {story.priority}</p>
              <p className="text-sm text-gray-500">Created: {story.createdAt}</p>
            </div>
          ))
        ) : (
          <p>No user stories available.</p>
        )}
      </div>

      {/* Input section */}
      <div className="workpage1-inputspace mt-6">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your user story"
            className="fancy-input"
            value={userStory}
            onChange={(e) => setUserStory(e.target.value)}
          />
          <input type="file" className="input-field" onChange={handleFileUpload} />
          <button className="cta-button" onClick={() => navigate('/signup')}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserStoriesMain;
