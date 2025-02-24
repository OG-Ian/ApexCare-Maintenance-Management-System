// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-16">
      <h1 className="text-5xl font-bold mb-4 text-center lg:text-6xl sm:text-4xl">Welcome to ApexCare Solutions</h1>
      <p className="text-lg mb-8 text-center">Your partner in effective service management.</p>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 transition">Login</Link>
        <Link to="/signup" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 transition">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;
