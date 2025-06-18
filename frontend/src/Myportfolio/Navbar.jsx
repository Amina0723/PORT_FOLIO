// components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkClass = (path) =>
    `block px-5 py-2 rounded-full text-sm md:text-base ${
      pathname === path
        ? "bg-cyan-500 text-white"
        : "bg-cyan-700 bg-opacity-20 text-cyan-300"
    } uppercase font-semibold hover:bg-cyan-500 hover:text-white transition shadow-md hover:shadow-cyan-400/70`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_6px_cyan]">
          <span className="text-blue-400 font-serif">
            Port<span className="text-white">folio</span>
          </span>
        </div>

        {/* Desktop & Tablet Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          <li><Link to="/" className={navLinkClass("/")}>Home</Link></li>
          <li><Link to="/about" className={navLinkClass("/about")}>Skills</Link></li>
          <li><Link to="/projects" className={navLinkClass("/projects")}>Projects</Link></li>
          <li><Link to="/Resume" className={navLinkClass("/Resume")}>My Education</Link></li>
          <li><Link to="/contact" className={navLinkClass("/contact")}>Contact</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-cyan-300 text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-8 pt-6 pb-10 space-y-4 text-center absolute top-16 left-0 w-full z-40">
          <Link to="/" className={navLinkClass("/")} onClick={toggleMenu}>Home</Link>
          <Link to="/about" className={navLinkClass("/about")} onClick={toggleMenu}>Skills</Link>
          <Link to="/projects" className={navLinkClass("/projects")} onClick={toggleMenu}>Projects</Link>
          <Link to="/Resume" className={navLinkClass("/Resume")} onClick={toggleMenu}>My Education</Link>
          <Link to="/contact" className={navLinkClass("/contact")} onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
}
