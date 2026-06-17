import React from 'react';
import './Clients.css';

const clientNames = [
  'Robbins Tunneling and Trenchless Technology India',
  'Hira Steels Limited, Raipur',
  'Bensups Hospital',
  'Delhi University',
  'Kalinga University, Raipur',
  'Capital Builders',
  'Manchanda & Manchanda Builders',
  'Mahananda Spa and Resorts Pvt. Ltd.',
  'Algol Business System Pvt. Ltd.',
  'Tata Finance Ltd.',
  'Delhi Development Authority',
  'India Bulls',
  'Pehchan Advertisement & Marketing',
  'Marvel Power Project Pvt. Ltd.',
  'Tanya Finance',
  'Real Time System Ltd.',
  'U.S. Shopee',
  'Chawla Electronics',
  'Nice Foundation Public School',
  'Kamal Model Public School',
  'Rosewood Public School',
  'Good Link Pvt. Ltd.',
];

const duplicatedClients = [...clientNames, ...clientNames];

export default function Clients() {
  return (
    <section id="clients">
      <h2>Our Prominent Clients</h2>
      <p className="section-subtitle">Trusted by leading organizations and institutions</p>

      <div className="clients-carousel">
        <div className="clients-track track-left">
          {duplicatedClients.map((name, index) => (
            <div className="client-card" key={`left-${index}`}>
              <div className="client-name">{name}</div>
            </div>
          ))}
        </div>

        <div className="clients-track track-right">
          {duplicatedClients.map((name, index) => (
            <div className="client-card" key={`right-${index}`}>
              <div className="client-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
