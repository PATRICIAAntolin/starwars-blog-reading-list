import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peopleCard";
import { VehicleCard } from "../component/vehicleCard";
import { PlanetCard } from "../component/planetCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="mt-5">
			<Container className="testimonial-group">
				<h1>Characters</h1>
				<Row>
					{store.people.map(data => (
						<Col xs={4} key={data.result._id}>
							<PeopleCard data={data} />
						</Col>
					))}
				</Row>
			</Container>

			<Container className="testimonial-group">
				<h1>Vehicles</h1>
				<Row>
					{store.vehicles.map(data => (
						<Col xs={4} key={data.result._id}>
							<Card>
								<VehicleCard data={data} />
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			<Container className="testimonial-group">
				<h1>Planets</h1>
				<div className="row">
					{store.planets.map(data => (
						<Col xs={4} key={data.result._id}>
							<PlanetCard data={data} />
						</Col>
					))}
				</div>
			</Container>
		</Container>
	);
};
