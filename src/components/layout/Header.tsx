"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-10">
      {/* Logo / Title */}
      <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-md">
        My Website
      </h1>

      {/* Hamburger Button */}
      <button
        className="z-100 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>

      {/* Sliding Menu */}
      <ul
        className={`absolute z-12 top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-700 via-pink-600 to-red-600 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li>
          <a
            href="#"
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-green-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-cyan-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-orange-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
