import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p className="section-subtitle">Get In Touch With Our Team</p>
      <div className="contact-container container">
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Tell us about your legal needs"></textarea>
          <a href="#" className="btn" style={{display:'block',textAlign:'center'}}>Send Message</a>
        </div>
        <div className="contact-info">
          <h3>Office Information</h3>
          <div className="contact-detail">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Address</strong><br />
               B, 336, Sector 19, Pocket 2 <br/>
               Dwarka, New Delhi, Delhi, 110075
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone</strong><br />
              +91 11 4163 5282
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">✉️</span>
            <div>
              <strong>Email</strong><br />
              info@sterlinglaw.com
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">🕒</span>
            <div>
              <strong>Hours</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
