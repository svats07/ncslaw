import React from 'react';

export default function About() {
  return (
    <section id="about">
      <h2>About Our Firm</h2>
      <p className="section-subtitle">A Legacy of Legal Excellence</p>
      <div className="about-content container">
        <p>N. C. Sharma & Company LLP is a New Delhi 0based law firm with a distinguished legacy since 1995. The firm is led by seasoned legal professionals and supported by a strong team of experienced advocates, delivering practical, result-oriented legal solutions with the highest standards of professionalism and integrity.</p>
        <p style={{marginTop: '1.5rem'}}>The firm represents multinational corporations, financial institutions, government bodies, educational institutions, and individuals before the Supreme Court of India, High Courts, Tribunals, and statutory authorities across India. Its core practice areas include litigation, corporate and commercial laws, arbitration, banking and debt recovery, regulatory matters, and dispute resolution, offering comprehensive legal support across complex and high-stakes matters.</p>
      </div>
      <div className="about-stats container">
        <div className="stat-box">
          <div className="stat-number">25+</div>
          <div>Years of Experience</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">1000+</div>
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
