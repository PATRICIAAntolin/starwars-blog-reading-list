import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image } from "react-bootstrap";

export const VehiclesDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(
		() => {
			actions.setDetails("vehicles", params.id);
		},
		[params.id]
	);

	return (
		<>
			{store.detail.map(data => (
				<Container key={data.result._id}>
					<Row className="mt-5">
						<Col>
							<Image src="https://via.placeholder.com/600x400" />
						</Col>
						<Col className="text-center">
							<h1>{data.result.properties.model}</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales lorem at
								posuere venenatis. Curabitur euismod mauris nisi. Sed feugiat malesuada lobortis. Proin
								feugiat facilisis venenatis. Nulla fermentum ligula et libero accumsan pulvinar.
								Praesent vehicula nulla elementum metus suscipit, eu lobortis mauris consectetur.
							</p>
						</Col>
					</Row>
					<hr className="col-xs-12 mt-5" />
					<Row className="mt-5 text-center details">
						<Col>
							<h4>Model</h4>
							<p>{data.result.properties.model}</p>
						</Col>
						<Col>
							<h4>Class</h4>
							<p>{data.result.properties.vehicle_class}</p>
						</Col>
						<Col>
							<h4>Manufacturer</h4>
							<p>{data.result.properties.manufacturer}</p>
						</Col>
						<Col>
							<h4>Cost</h4>
							<p>{data.result.properties.cost_in_credits}</p>
						</Col>
						<Col>
							<h4>Crew</h4>
							<p>{data.result.properties.crew}</p>
						</Col>
						<Col>
							<h4>Cargo Capacity</h4>
							<p>{data.result.properties.cargo_capacity}</p>
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
};

VehiclesDetails.propTypes = {
	match: PropTypes.object
};
