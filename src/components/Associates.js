import React from 'react';

const Associate = ({name, title, bio, img}) => (
  <div className="associate-card">
    <div className="associate-image">
      <img src={`${process.env.PUBLIC_URL}/${img}`} alt={name} />
    </div>
    <div className="associate-info">
      <div className="associate-name">{name}</div>
      <div className="associate-title">{title}</div>
      <p>{bio}</p>
    </div>
  </div>
);

export default function Associates(){
  return (
    <section id="associates">
      <h2>Our Associates</h2>
      <p className="section-subtitle">Meet Our Expert Legal Team</p>
      <div className="associates-grid container">
        <Associate name="Dr. N C Sharma" title="Managing Partner" img="mosaji.jpg" bio="25 years specializing in criminal law." />
        <Associate name="Ajay Sharma" title="Partner" img="tinu.jpg" bio="Civil litigation expert with 18 years experience. Known for strategic courtroom excellence." />
        <Associate name="Anand Lochave" title="Senior Associate" img="Anand.jpg" bio="Criminal Law specialist with extensive experience in commercial transactions." />
        <Associate name="Pankaj Bhardwaj" title="Senior Associate" img="pankaj.jpg" bio="Family law attorney dedicated to compassionate representation in sensitive matters." />
        <Associate name="Anshul Vats" title="Associate" img="Anshul.jpg" bio="Family law attorney dedicated to compassionate representation in sensitive matters." />
        <Associate name="Mukul Vats" title="Associate" img="Mukul.jpg" bio="Criminal law attorney dedicated to compassionate representation in sensitive matters." />
      </div>
    </section>
  );
}
