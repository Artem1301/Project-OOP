import React from "react"

const MainHeader = () => {
	return (
		<header className="header-banner">
			<div className="overlay"></div>
			<div className="animated-texts overlay-content">
				<h1>
					Welcome to <span className="hotel-color"> Hotel</span>
				</h1>
				<h4 className="UnderTheText">The Future is <span className="hotel-color"> Here</span></h4>
			</div>
		</header>
	)
}

export default MainHeader
