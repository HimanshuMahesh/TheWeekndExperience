import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold font-syne">
            TheWeeknd Experience
          </h1>
          <button
            onClick={toggleMenu}
            className="text-red-600 focus:outline-none md:hidden"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <a href="#biography" className="text-red-600 hover:text-gray-400">
                Biography
              </a>
            </li>
            <li>
              <a href="#breakthrough" className="text-red-600 hover:text-gray-400">
                Breakthrough
              </a>
            </li>
            <li>
              <a href="#superstardom" className="text-red-600 hover:text-gray-400">
                Superstardom
              </a>
            </li>
            <li>
              <a href="#starboy" className="text-red-600 hover:text-gray-400">
                Starboy
              </a>
            </li>
            <li>
              <a href="#afterhours" className="text-red-600 hover:text-gray-400">
                AfterHours
              </a>
            </li>
            <li>
              <a href="#dawnfm" className="text-red-600 hover:text-gray-400">
                DawnFM
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
