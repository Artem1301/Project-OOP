import React from "react"
import { Container } from "react-bootstrap"

const Parallax = () => {
	return (
		<div className="parallax mb-5">
			<Container className="text-center px-5 py-5 justify-content-center">
				<div className="animated-texts bounceIn">
					<h1>
						<span className="hotel-color">Experience</span> the Best hospitality at <span className="hotel-color">our Hotel</span>
					</h1>
					<h3>
						<span className="hotel-color">We offer</span> the best services for all <span className="hotel-color">your needs.</span>
					</h3>
				</div>
			</Container>
		</div>
	)
}

export default Parallax
