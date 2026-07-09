import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="cursor-pointer text-3xl md:text-4xl font-bold">
          Web Masters<span className="text-secondary">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-lg">
          <li className="cursor-pointer hover:text-secondary transition">
            About
          </li>
          <li className="cursor-pointer hover:text-secondary transition">
            Services
          </li>
          <li className="cursor-pointer hover:text-secondary transition">
            Work
          </li>
          <li>
            <button className="bg-secondary text-white px-4 py-2 rounded-full hover:opacity-90 transition cursor-pointer">
              Contact
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 mt-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg bg-white shadow-lg rounded-xl py-6">
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-secondary transition"
          >
            About
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-secondary transition"
          >
            Services
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-secondary transition"
          >
            Work
          </li>
          <li>
            <button className="bg-secondary text-white px-4 py-2 rounded-full hover:opacity-90 transition">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;