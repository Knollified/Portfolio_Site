// components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-800 text-white">
      <nav className="container mx-auto py-4 sm:flex sm:justify-between sm:items-center">
        <ul className="flex sm:flex-row sm:space-x-4 sm:justify-end">
          <li><a href="#hero" className="px-4 py-2">Home</a></li>
          <li><a href="#projects" className="px-4 py-2">Projects</a></li>
          <li><a href="#blog" className="px-4 py-2">Blog</a></li>
          <li><a href="#contact" className="px-4 py-2">Contact</a></li>
        </ul>
      <title>Justin Torres</title>
      </nav>
    </header>
  );
};

export default Header;