import React from 'react';
import { FiSearch, FiSun, FiGithub } from 'react-icons/fi';

export default function Nav() {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-700">
        {/* Left Side - Logo and Links */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-lg font-semibold flex items-center space-x-2">
            <span className="text-white">shadcn/ui</span>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-200">Docs</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Components</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Blocks</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Charts</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Themes</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Examples</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Colors</a>
          </div>
        </div>

        {/* Right Side - Search, GitHub, and Theme Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="bg-gray-800 text-white text-sm rounded-full px-4 py-2 focus:outline-none placeholder-gray-400"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">⌘ K</span>
          </div>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <FiGithub size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <FiSun size={20} />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-start pt-5 px-10">
        <a href="#" className="text-gray-400 hover:text-gray-200 text-sm mb-2">
          New sidebar component →
        </a>
        <h1 className="text-5xl font-bold mb-4">Check out some examples</h1>
        <p className="text-lg text-gray-300 mb-8">
          Dashboard, cards, authentication. Some examples built using the components.
          <br />
          Use this as a guide to build your own.
        </p>
        <div className="flex space-x-4 mb-8"> {/* Added mb-8 for spacing */}
          <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200">
            Get Started
          </button>
          <button className="border border-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800">
            Components
          </button>
        </div>
      </div>
    </div>
  );
}
