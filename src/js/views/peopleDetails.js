import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export const PeopleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(
		() => {
			actions.setDetails("people", params.id);
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
							<h4>Gender</h4>
							<p>{data.result.properties.gender}</p>
						</Col>
						<Col>
							<h4>Height</h4>
							<p>{data.result.properties.height}</p>
						</Col>
						<Col>
							<h4>Hair Color</h4>
							<p>{data.result.properties.hair_color}</p>
						</Col>
						<Col>
							<h4>Eye Color</h4>
							<p>{data.result.properties.eye_color}</p>
						</Col>
						<Col>
							<h4>Birth Year</h4>
							<p>{data.result.properties.birth_year}</p>
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
};

PeopleDetails.propTypes = {
	match: PropTypes.object
};
