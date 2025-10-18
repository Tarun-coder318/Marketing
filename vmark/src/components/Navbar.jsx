import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-600">Digital Vmark Marketing</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Services
            </Link>
            <Link to="/why-us" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Why Us
            </Link>
            <Link to="/clients" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Clients
            </Link>
            <Link to="/career" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Career
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/why-us" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>
              Why Us
            </Link>
            <Link to="/clients" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>
              Clients
            </Link>
            <Link to="/career" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>
              Career
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default  Navbar ;
