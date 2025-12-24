import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
              Job<span className="text-gray-800">Portal</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Companies</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Salaries</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Post a Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#" className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md">Home</a>
            <a href="#" className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md">Find Jobs</a>
            <a href="#" className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md">Companies</a>
            <a href="#" className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md">Salaries</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Post a Job
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;