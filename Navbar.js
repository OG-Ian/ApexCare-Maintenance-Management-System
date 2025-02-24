// src/components/Navbar.js 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Assuming user is stored in localStorage after login
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <Link to="/" className="text-xl font-bold">ApexCare</Link>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {user ? (
          <div className="hidden md:flex space-x-6">
            {/* Conditional links based on user role */}
            {user.userType === "Client" && (
              <>
                <Link to="/dashboard" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Dashboard</Link>
                <Link to="/service-request" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Service Requests</Link>
                <Link to="/notifications" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Notifications</Link>
              </>
            )}
            {user.userType === "Technician" && (
              <>
                <Link to="/dashboard" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Dashboard</Link>
                <Link to="/job-assignments" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Job Assignments</Link>
                <Link to="/notifications" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Notifications</Link>
              </>
            )}
            {user.userType === "Administrator" && (
              <>
                <Link to="/dashboard" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Dashboard</Link>
                <Link to="/admin-management" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Admin Management</Link>
                <Link to="/notifications" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Notifications</Link>
              </>
            )}
            <Link to="/" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded" onClick={() => localStorage.removeItem('user')}>Logout</Link>
          </div>
        ) : (
          <>
            <Link to="/login" className="hover:bg-white hover:text-black px-3 py-2 transition duration-200 rounded">Login</Link>
            <Link to="/signup" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200">Sign Up</Link>
          </>
        )}
      </div>

      {/* Dropdown Menu for mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 bg-black p-4 rounded shadow-md">
          {user && (
            <>
              {user.userType === "Client" && (
                <>
                  <Link to="/dashboard" className="hover:bg-white hover:text-black">Dashboard</Link>
                  <Link to="/service-request" className="hover:bg-white hover:text-black">Service Requests</Link>
                  <Link to="/notifications" className="hover:bg-white hover:text-black">Notifications</Link>
                </>
              )}
              {user.userType === "Technician" && (
                <>
                  <Link to="/dashboard" className="hover:bg-white hover:text-black">Dashboard</Link>
                  <Link to="/job-assignments" className="hover:bg-white hover:text-black">Job Assignments</Link>
                  <Link to="/notifications" className="hover:bg-white hover:text-black">Notifications</Link>
                </>
              )}
              {user.userType === "Administrator" && (
                <>
                  <Link to="/dashboard" className="hover:bg-white hover:text-black">Dashboard</Link>
                  <Link to="/admin-management" className="hover:bg-white hover:text-black">Admin Management</Link>
                  <Link to="/notifications" className="hover:bg-white hover:text-black">Notifications</Link>
                </>
              )}
              <Link to="/" className="hover:bg-white hover:text-black" onClick={() => localStorage.removeItem('user')}>Logout</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
