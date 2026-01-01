import React from 'react';

export default function About() {
  return (
    <section id="about">
      <h2>About Our Firm</h2>
      <p className="section-subtitle">A Legacy of Legal Excellence</p>
      <div className="about-content container">
        <p>NC Sharma & Co. A Law Firm has grown to become one of the most respected law firms in the region. Our commitment to providing exceptional legal services is matched only by our dedication to our clients' success.</p>
        <p style={{marginTop: '1.5rem'}}>We believe in building lasting relationships based on trust, transparency, and results. Our team of experienced attorneys brings decades of combined experience across multiple practice areas, ensuring comprehensive legal support for all your needs.</p>
      </div>
      <div className="about-stats container">
        <div className="stat-box">
          <div className="stat-number">25+</div>
          <div>Years of Experience</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">100+</div>
          <div>Cases Won</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">98%</div>
          <div>Client Satisfaction</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">15+</div>
          <div>Expert Attorneys</div>
        </div>
      </div>
    </section>
  );
}
