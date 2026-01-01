import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/nclogo.jpeg`} alt="NC Logo" className="logo-image" />
          <span className="logo-text">NC Sharma & Co. A Law Firm</span>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#associates">Associates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
