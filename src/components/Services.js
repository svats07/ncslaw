import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <p className="section-subtitle">Comprehensive Legal Solutions</p>
      <div className="services-grid container">
        <div className="service-card">
          <div className="service-icon">⚖️</div>
          <h3>Corporate Law</h3>
          <p>Expert guidance on business formations, mergers, acquisitions, contracts, and corporate governance matters.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🏛️</div>
          <h3>Civil Litigation</h3>
          <p>Strategic representation in complex civil disputes, ensuring your rights are protected in court.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🏠</div>
          <h3>Real Estate Law</h3>
          <p>Comprehensive services for property transactions, title issues, and real estate litigation.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">👨‍👩‍👧</div>
          <h3>Family Law</h3>
          <p>Compassionate representation in divorce, custody, adoption, and other family matters.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">💼</div>
          <h3>Employment Law</h3>
          <p>Protecting employee rights and advising employers on workplace compliance and disputes.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">📋</div>
          <h3>Estate Planning</h3>
          <p>Thoughtful planning for wills, trusts, probate, and wealth preservation strategies.</p>
        </div>
      </div>
    </section>
  );
}
