import React from "react";

const Associate = ({ name, title, bio, img }) => (
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
					img="tinu.JPG"
					bio="A senior legal professional with over a decade of practice, with leadership and courtroom expertise established before the Supreme Court, Delhi High Court, and all Courts & Tribunals across Delhi–NCR in complex criminal and matrimonial matters."
				/>
				<Associate
					name="Anand Lochave"
					title="Senior Associate"
					img="Anand.JPG"
					bio="Criminal Law specialist with extensive experience in commercial transactions."
				/>
				<Associate
					name="Pankaj Bhardwaj"
					title="Senior Associate"
					img="pankaj.JPG"
					bio="Family law attorney dedicated to compassionate representation in sensitive matters."
				/>
				<Associate
					name="Anshul Vats"
					title="Associate"
					img="Anshul.JPG"
					bio="Family law attorney dedicated to compassionate representation in sensitive matters."
				/>
				<Associate
					name="Mukul Vats"
					title="Associate"
					img="Mukul.JPG"
					bio="Criminal law attorney dedicated to compassionate representation in sensitive matters."
				/>
			</div>
		</section>
	);
}
