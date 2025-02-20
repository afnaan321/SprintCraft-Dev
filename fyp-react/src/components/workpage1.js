// import React from 'react';
// import './workpage1.css';
// import { useNavigate } from 'react-router-dom';
// const WorkPage1 = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="workpage1-container">
//       <div className="workpage1-project-container"> {/* Main projects list/ drop down*/}
//         <h1 className="workpage1-header">
//           Your Projects
//         </h1>
//         <div className='workpage1-project-container'>
//             All previous/Current Projects will be displayed here
//             {/* add a for loop to display projects ---- a sub container*/}
//             <div className='workpage1-subcontainer'> 
//                 <div className='workpage1-project-name'>
//                     Project Name
//                 </div>
//                 <div className='workpage1-project-date'>
//                     Date Created
//                 </div>
//             </div>
//         </div>
//         <div className="text-center mt-8">
//           <button className="cta-button" onClick={()=>navigate('/signup')}>
//             Add more
//           </button>
//         </div>
//       </div>
//       <div className="workpage1-project-container"> {/* Main User story Generation*/}
//         <h1 className="workpage1-header">
//           User Stories
//         </h1>
//         <div className='workpage1-project-container'>
//             <div className='workpage1-subcontainer'>
//               <p>
//                 The generated user stores will be displayed here
//               </p>
//             </div>
//         </div>
//         <div className='workpage1-inputspace'>
//             <div class='flex gap-4'>
//               <input type="text" placeholder="Enter your user story" className="fancy-input" />
//               <button className="cta-button" onClick={()=>navigate('/signup')}>
//                 Generate
//               </button>
//             </div>
//           </div>
//       </div>
//       <div className="workpage1-project-container"> {/* Improvements*/}
//         <h1 className="workpage1-header">
//           Improvements
//         </h1>
//         <div className='workpage1-project-container'>
//             User Stories improvements/scoring will be diaplayed here
//         </div>
//         <div className="text-center mt-8">
//           <button className="cta-button" onClick={()=>navigate('/signup')}>
//             Add More
//           </button>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default WorkPage1;
import React from 'react';
import ProjectsSidebar from './projects_sidebar';
import UserStoriesMain from './user_stories';
import ImprovementsSection from './improvements';
import './workpage1.css';

const WorkPage1 = () => {
  return (
    <div className="main_page">
      <div className="workpage1-container grid grid-cols-[15%_50%_30%] gap-6 justify-start">
        <ProjectsSidebar />
        <UserStoriesMain></UserStoriesMain>
        <ImprovementsSection/>
      </div>
    </div>
  );
};

export default WorkPage1;
