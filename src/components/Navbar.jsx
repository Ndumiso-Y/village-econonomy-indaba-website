import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/optimized/logo.png"; // Adjust if your logo path differs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className="bg-[#0c3b2e] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">Village Economy Indaba</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" onClick={scrollToTop} className="hover:text-yellow-400">Home</Link>
            <Link to="/about" onClick={scrollToTop} className="hover:text-yellow-400">About</Link>
            <Link to="/foreword" onClick={scrollToTop} className="hover:text-yellow-400">Foreword</Link>
            <Link to="/sectors" onClick={scrollToTop} className="hover:text-yellow-400">Sectors</Link>
            <Link to="/framework" onClick={scrollToTop} className="hover:text-yellow-400">Framework</Link>
            <Link to="/associations" onClick={scrollToTop} className="hover:text-yellow-400">Associations</Link>
            <Link to="/gallery" onClick={scrollToTop} className="hover:text-yellow-400">Gallery</Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c3b2e] px-4 pt-2 pb-4 space-y-2">
          <Link to="/" onClick={scrollToTop} className="block hover:text-yellow-400">Home</Link>
          <Link to="/about" onClick={scrollToTop} className="block hover:text-yellow-400">About</Link>
          <Link to="/foreword" onClick={scrollToTop} className="block hover:text-yellow-400">Foreword</Link>
          <Link to="/sectors" onClick={scrollToTop} className="block hover:text-yellow-400">Sectors</Link>
          <Link to="/framework" onClick={scrollToTop} className="block hover:text-yellow-400">Framework</Link>
          <Link to="/associations" onClick={scrollToTop} className="block hover:text-yellow-400">Associations</Link>
          <Link to="/gallery" onClick={scrollToTop} className="block hover:text-yellow-400">Gallery</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
