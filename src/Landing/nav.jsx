import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Nav = () => {
     const [isOpen, setIsOpen] = useState(false);  // Burger menu state
    
      const navigate = useNavigate();
    
      function handleClick() {
        navigate("/chat");
      }

  return (
    <div className='bg-gray-900 text-white'>
    {/* Navbar */}
    <header className="w-full py-4 px-6 border-b-2">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">GigaChat</h1>

          {/* Navbar Links (Visible on all screens) */}
          <ul className="hidden lg:flex space-x-8">
            <li><a href="/" className="text-lg hover:text-cyan-400 transition-all">Home</a></li>
            <li><a href="#blog" className="text-lg hover:text-cyan-400 transition-all">Blog</a></li>
            <li><a href="/about-us" className="text-lg hover:text-cyan-400 transition-all">About</a></li>
            <li><a href="/support" className="text-lg hover:text-cyan-400 transition-all">Support</a></li>
          </ul>

          {/* Other Navbar Buttons */}
          <div className="hidden lg:flex space-x-4">
  <button
    className="px-2 py-2 text-lg font-semibold border-2 border-white rounded-md hover:bg-white hover:text-gray-900 transition-all"
    onClick={() => window.location.href = '#login'}
  >
    Login
  </button>
  <button
    className="px-6 py-2 text-lg font-semibold bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
    onClick={handleClick}
  >
    Start Chat
  </button>
</div>


          {/* Burger Button for Small Screens */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Burger Button */}
            <button
              className="text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'X' : '☰'}
            </button>
          </div>
        </nav>
      </header>

      {/* Burger Menu Dropdown (Below 1000px) */}
      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-6 space-y-6 text-center`}
      >
        <ul className="space-y-4">
          <li><a href="/" className="text-lg hover:text-cyan-400 transition-all">Home</a></li>
          <li><a href="#blog" className="text-lg hover:text-cyan-400 transition-all">Blog</a></li>
          <li><a href="/about-us" className="text-lg hover:text-cyan-400 transition-all">About</a></li>
          <li><a href="/support" className="text-lg hover:text-cyan-400 transition-all">Support</a></li>
          <li>
  <button
    className="px-4 py-2 text-lg font-semibold border-2 border-white rounded-md hover:bg-white hover:text-gray-900 transition-all"
    onClick={() => window.location.href = '#login'}
  >
    Login
  </button>
</li>
<li>
  <button
    className="px-4 py-2 text-lg font-semibold bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
    onClick={handleClick}
  >
    Start Chat
  </button>
</li>

        </ul>
      </div>
</div>
  );
};

export default Nav;
