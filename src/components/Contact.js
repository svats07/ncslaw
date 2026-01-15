import React from "react";

export default function Contact() {
	return (
		<section id="contact">
			<h2>Contact Us</h2>
			<p className="section-subtitle">Get In Touch With Our Team</p>
			<div className="contact-container container">
				<div className="contact-info">
					<h3>Office Information</h3>
					<div className="contact-detail">
						<span className="contact-icon">📍</span>
						<div>
							<strong>Address</strong>
							<br />
							B, 336, Sector 19, Pocket 2 <br />
							Dwarka, New Delhi, Delhi, 110075
						</div>
					</div>
					<div className="contact-detail">
						<span className="contact-icon">📞</span>
						<div>
							<strong>Phone</strong>
							<br />
							+91 11 4163 5282
						</div>
					</div>
					<div className="contact-detail">
						<span className="contact-icon">✉️</span>
						<div>
							<strong>Email</strong>
							<br />
							info@sterlinglaw.com
						</div>
					</div>
					<div className="contact-detail">
						<span className="contact-icon">🕒</span>
						<div>
							<strong>Hours</strong>
							<br />
							Monday - Friday: 9:00 AM - 6:00 PM
							<br />
							Saturday: 10:00 AM - 2:00 PM
						</div>
					</div>
				</div>
				<div className="contact-form">
					<img
						src={`${process.env.PUBLIC_URL}/Location.svg`}
						alt="Refer to Address"
						className="location-image"
					/>
				</div>
			</div>
		</section>
	);
}
