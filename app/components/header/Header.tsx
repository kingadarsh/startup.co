import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      {/* Logo */}
      <div className="text-3xl font-bold">Startup<span className="text-orange-500">Co</span></div>

      {/* Centered Navigation Links */}
      <nav className="flex-1 text-center space-x-6">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">How it Works</a>
        <a href="#" className="hover:text-orange-500">Explore Projects</a>
        <a href="#" className="hover:text-orange-500">Find Mentors</a>
        <a href="/sing-in" className="hover:text-orange-500">Login/Sign Up</a>
      </nav>

      {/* CTA Button */}
      <div className="ml-4">
        <button className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-400 transition">
          Start Your Project
        </button>
      </div>
    </header>
  );
};

export default Header;
