import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image } from "react-bootstrap";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(
		() => {
			actions.setDetails("planets", params.id);
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
							<h1>{data.result.properties.name}</h1>
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
							<h4>Name</h4>
							<p>{data.result.properties.name}</p>
						</Col>
						<Col>
							<h4>Diameter</h4>
							<p>{data.result.properties.diameter}</p>
						</Col>
						<Col>
							<h4>Gravity</h4>
							<p>{data.result.properties.gravity}</p>
						</Col>
						<Col>
							<h4>Population</h4>
							<p>{data.result.properties.population}</p>
						</Col>
						<Col>
							<h4>Climate</h4>
							<p>{data.result.properties.climate}</p>
						</Col>
						<Col>
							<h4>Terrain</h4>
							<p>{data.result.properties.terrain}</p>
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
};

PlanetDetails.propTypes = {
	match: PropTypes.object
};
