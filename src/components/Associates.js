import React from "react";

const publicUrl = process.env.PUBLIC_URL || '';

const Associate = ({ name, title, bio, img }) => (
	<div className="associate-card">
		<div className="associate-image">
			<img src={`${publicUrl}/${img}`} alt={name} />
		</div>
		<div className="associate-info">
			<div className="associate-name">{name}</div>
			<div className="associate-title">{title}</div>
			<p>{bio}</p>
		</div>
	</div>
);

export default function Associates() {
	return (
		<section id="associates">
			<h2>Our Associates</h2>
			<p className="section-subtitle">Meet Our Expert Legal Team</p>
			<div className="associates-grid container">
				<Associate
					name="Dr. N C Sharma"
					title="Managing Partner"
					img="mosaji.JPG"
					bio="A formidable legal authority with over three decades of distinguished practice, whose leadership has shaped high-impact litigation across India’s courts and tribunals.Represented government bodies, leading corporates, universities, and public figures in complex and precedent setting matters."
				/>
				<Associate
					name="Ajay Sharma"
					title="Partner"
					img="tinu.jpeg"
					bio="A distinguished criminal law practitioner with over eleven years of extensive trial experience, having represented high-profile accused in multiple murder and MCOCA matters. Specializing in criminal litigation and cybercrime cases, with appearances before all District Courts of Delhi, various High Courts across states, and the Supreme Court of India."
				/>
				<Associate
					name="Om Prakash Sharma"
					title="Senior Associate"
					img="op.jpeg"
					bio="A former Station House Officer across multiple Police Stations in Delhi, who retired as an Assistant Commissioner of Police from Delhi Police before transitioning into criminal litigation. Possessing extensive experience in criminal law with comprehensive knowledge across a wide spectrum of criminal cases."
				/>
				<Associate
					name="Anand Lochave"
					title="Senior Associate"
					img="Anand.JPG"
					bio="A seasoned legal professional with over eleven years of extensive experience in civil matters, representing clients before District Courts, High Courts, and the Supreme Court, while also handling civil disputes and arbitration proceedings."
				/>
				<Associate
					name="Pankaj Bhardwaj"
					title="Senior Associate"
					img="pankaj.JPG"
					bio="A legal professional engaged in civil law practice, with continued experience in comprehensive family case representation before competent courts."
				/>
				<Associate
					name="Anshul Vats"
					title="Associate"
					img="Anshul.JPG"
					bio="A legal practitioner drafting and filing petitions, handling family law and matrimonial matters, and actively representing clients in related proceedings since 2021."
				/>
				<Associate
					name="Mukul Vats"
					title="Associate"
					img="Mukul.JPG"
					bio="A legal professional handling matters under the Negotiable Instruments Act, including Section 138 cheque dishonour cases, along with representation in diverse criminal proceedings before competent courts."
				/>
			</div>
		</section>
	);
}
