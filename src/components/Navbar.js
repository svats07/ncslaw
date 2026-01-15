import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="container nav-container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/nclogo.jpeg`} alt="NC Logo" className="logo-image" />
          <span className="logo-text">NC Sharma & Co. A Law Firm</span>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#associates" onClick={closeMenu}>Associates</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
