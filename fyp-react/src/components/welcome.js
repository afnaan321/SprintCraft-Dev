import React, { useState, useEffect } from "react";
// import logo from "images/Logo_sprintcraft.jpg";
const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsExiting(true); 
    }, 1000); 

    // Fully hide the component after the fade-out finishes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); 

    return () => {

      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null; // Completely unmount after animation ends

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-1000 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* <h1 className="text-6xl font-bold text-white">Welcome to SprintCraft</h1> */}
      <img src="images/Logo_sprintcraft.jpg" alt="Logo" style={{width:"250px"}}/>
      <h1
        className={`text-4xl font-bold text-white transition-transform duration-1000 ${
          isExiting
            ? "translate-x-full opacity-100" : "" // Slide out to the right
          //  "translate-x-0 opacity-100" // Fully visible after sliding in
        }`}
        style={{
          transform: isExiting ? "" : "translateX(0%)", // Slide in from left
        }}
      >
        Welcome to SprintCraft
      </h1>

    </div>
  );
};

export default Welcome;
// import React, { useState, useEffect } from "react";

// const Welcome = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isExiting, setIsExiting] = useState(false);

//   useEffect(() => {
//     // Check if the welcome animation has already been shown
//     const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

//     if (!hasSeenWelcome) {
//       setIsVisible(true);

//       // Start fade-out after 1 second
//       const fadeOutTimer = setTimeout(() => {
//         setIsExiting(true);
//       }, 1000);

//       // Completely hide after fade-out
//       const hideTimer = setTimeout(() => {
//         setIsVisible(false);
//         localStorage.setItem("hasSeenWelcome", "true"); // Store in localStorage
//       }, 2000);

//       return () => {
//         clearTimeout(fadeOutTimer);
//         clearTimeout(hideTimer);
//       };
//     }
//   }, []);

//   if (!isVisible) return null; // Hide after animation runs once

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-1000 ${
//         isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       <img src="images/Logo_sprintcraft.jpg" alt="Logo" style={{ width: "250px" }} />
//       <h1
//         className={`text-4xl font-bold text-white transition-transform duration-1000 ${
//           isExiting ? "translate-x-full opacity-100" : ""
//         }`}
//         style={{
//           transform: isExiting ? "" : "translateX(0%)", // Slide in from left
//         }}
//       >
//         Welcome to SprintCraft
//       </h1>
//     </div>
//   );
// };

// export default Welcome;

