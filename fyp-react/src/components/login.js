import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle state
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Toggle Button */}
      <button
        className="mb-6 bg-gray-800 text-white py-2 px-6 rounded transition duration-300 hover:bg-gray-700"
        onClick={() => {
            console.log("Button clicked");
            setIsSignUp(!isSignUp);
            navigate('/signup');
          }}
      >
        {isSignUp ? "Switch to Sign Up" : "Switch to Login"}
      </button>

      {/* Form Container */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4">
          {isSignUp ? "Login" : "Sign Up"}
        </h1>

        {/* Username (Only for Sign Up) */}
        {isSignUp && (
          <input
            type="text"
            placeholder="User Name"
            className="border p-2 w-full mb-4"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
        />

        {/* Confirm Password (Only for Sign Up) */}
        {!isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 w-full mb-4"
          />
        )}

        {/* Form Button */}
        <button className="bg-green-500 text-white py-2 px-4 rounded w-full">
          {isSignUp ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LAuthForm;