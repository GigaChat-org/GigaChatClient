import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';  // Import Heroicons

const Landing = () => {
  const [theme, setTheme] = useState('dark');  // Default theme is dark
  const [isOpen, setIsOpen] = useState(false);  // Burger menu state

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);  // Set saved theme on load
    }
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar */}
      <header className="w-full py-4 px-6 border-b-2">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Giga Chat</h1>

          {/* Navbar Links (Visible on all screens) */}
          <ul className="hidden lg:flex space-x-8">
            <li><a href="#home" className="text-lg hover:text-cyan-400 transition-all">Home</a></li>
            <li><a href="#blog" className="text-lg hover:text-cyan-400 transition-all">Blog</a></li>
            <li><a href="#about" className="text-lg hover:text-cyan-400 transition-all">About</a></li>
            <li><a href="#support" className="text-lg hover:text-cyan-400 transition-all">Support</a></li>
          </ul>


          {/* Other Navbar Buttons */}
          <div className="hidden lg:flex space-x-4">
          
          {/* Theme Toggle Button (Visible on all screens) */}
          <button
  className="px-4 py-2 text-sm font-semibold rounded-md focus:outline-none hidden lg:block"
  onClick={toggleTheme}
>
  {theme === 'light' ? (
    <SunIcon className="h-6 w-6 text-yellow-500" />
  ) : (
    <MoonIcon className="h-6 w-6 text-gray-400" />
  )}
</button>

            <a
              href="#login"
              className="px-2 py-2 text-lg font-semibold border-2 border-white rounded-md hover:bg-white hover:text-gray-900 transition-all"
            >
              Login
            </a>
            <a
              href="#start-chat"
              className="px-6 py-2 text-lg font-semibold bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
            >
              Start Chat
            </a>
          </div>

          {/* Burger Button for Small Screens */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Theme Toggle Button placed just left of Burger Button */}
            <button
              className="px-4 py-2 text-sm font-semibold rounded-md focus:outline-none"
              onClick={toggleTheme}
            >
              {theme === 'light' ? (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-400" />
              )}
            </button>

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
          <li><a href="#home" className="text-lg hover:text-cyan-400 transition-all">Home</a></li>
          <li><a href="#blog" className="text-lg hover:text-cyan-400 transition-all">Blog</a></li>
          <li><a href="#about" className="text-lg hover:text-cyan-400 transition-all">About</a></li>
          <li><a href="#support" className="text-lg hover:text-cyan-400 transition-all">Support</a></li>
          <li>
            <a
              href="#login"
              className="px-4 py-2 text-lg font-semibold border-2 border-white rounded-md hover:bg-white hover:text-gray-900 transition-all"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#start-chat"
              className="px-4 py-2 text-lg font-semibold bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
            >
              Start Chat
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center p-8 space-y-6">
        <section className="text-center space-y-4 max-w-xl">
          <h2 className="text-2xl font-semibold">Welcome to Giga Chat</h2>
          <p>Get ready for an anonymous chat experience!</p>
          <p>Click on the "Start Chatting" button to join a random chat room. No sign-up required, just start chatting anonymously!</p>
          <p>Your privacy is our priority. Chat with strangers freely and securely.</p>
        </section>

        {/* Start Chat Button */}
        <button className="px-6 py-3 text-xl text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none">
          Start Chatting
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t-2">
        <p>© 2025 Giga Chat | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Landing;
