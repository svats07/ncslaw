import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <p className="section-subtitle">Comprehensive Legal Solutions</p>
      <div className="services-grid container">
        <div className="service-card">
          <div className="service-icon">⚖️</div>
          <h3>Litigation & Court Representation</h3>
          <p>Representation before the Supreme Court of India, High Courts, District Courts, Tribunals, NCLT, NCLAT, DRT, DRAT, and Consumer Forums across India.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🏛️</div>
          <h3>Corporate & Company Law Advisory</h3>
          <p>Legal services relating to company law matters, insolvency, recoveries, compliance, and proceedings before NCLT and NCLAT.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🏠</div>
          <h3>Banking, Debt Recovery & SARFAESI Matters</h3>
          <p>Recovery proceedings under SARFAESI Act, RDDB Act, arbitration, civil recovery suits, and enforcement of security interests for banks and financial institutions.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">👨‍👩‍👧</div>
          <h3>Arbitration & Alternative Dispute Resolution</h3>
          <p>Handling domestic arbitration proceedings, tribunal matters, and related court proceedings.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">💼</div>
          <h3>Criminal & Economic Offences Litigation</h3>
          <p>Matters involving ED, CBI, SFIO, MCOCA, NSA, and proceedings under the Negotiable Instruments Act.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">📋</div>
          <h3>Labour, Service & Employment Laws</h3>
          <p>Advisory and litigation for employers and employees, including labour courts, industrial disputes, and service/departmental matters.</p>
        </div>
      </div>
    </section>
  );
}
