import React, { useState, useEffect } from 'react';

export default function About() {
  const publicUrl = process.env.PUBLIC_URL || '';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const backgroundImage = `url('${publicUrl}/${images[currentImageIndex]}')`;
  
  return (
    <section id="about" style={{backgroundImage: backgroundImage}}>
      <div className="about-overlay"></div>
      <div className="about-section-content">
        <h2>About Our Firm</h2>
        <p className="section-subtitle">A Legacy of Legal Excellence</p>
        
        <div className="about-text-box">
          <p>N. C. Sharma & Company LLP is a New Delhi based litigation law firm with a distinguished legacy since 1995, led by seasoned legal professionals and supported by an experienced team of advocates. The firm delivers practical, result-oriented legal solutions with the highest standards of professionalism and integrity, appearing before the Supreme Court of India, various High Courts, Tribunals, and statutory authorities across India.</p>
        </div>
        
        <div className="about-text-box">
          <p>The firm has represented several prominent clients, including Delhi Development Authority, Delhi University, Tata Finance Ltd., Indiabulls, and Kalinga University, along with leading infrastructure companies, hospitals, educational institutions, and private enterprises across diverse sectors, underscoring its strong institutional credibility and trusted legal standing.</p>
        </div>
        
        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-number">25+</div>
            <div>Years of Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">2000+</div>
            <div>Cases Won</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div>Client Satisfaction</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">30+</div>
            <div>Expert Attorneys</div>
          </div>
        </div>
      </div>
    </section>
  );
}
