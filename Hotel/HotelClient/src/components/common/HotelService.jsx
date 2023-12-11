import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import {
	FaClock,
	FaParking,
	FaUtensils,
	FaWifi
} from "react-icons/fa"

const HotelService = () => {
	return (
		<>
			<div className="mb-2">
				<Row className="mt-4">
					<h4 className="text-center">
						Services that work
						<span className="gap-2">
							<span className="hotel-color">
								<span> 24-Hour a Day </span>
							</span>
						</span>
					</h4>
				</Row>
				<hr />

				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Col>
						<Card>
							<Card.Body className="Cards-Body">
								<Card.Title className="Cards-Text">
									<FaWifi /> WiFi
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body className="Cards-Body">
								<Card.Title className="Cards-Text">
									<FaUtensils /> Food
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body className="Cards-Body">
								<Card.Title className="Cards-Text">
									<FaParking /> Parking
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<hr />
		</>
	)
}

export default HotelService
