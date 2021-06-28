import React, { useEffect, useContext, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const VehicleCard = props => {
	const { store, actions } = useContext(Context);
	const [check, setCheck] = useState(false);

	useEffect(
		() => {
			const checkFav = () => {
				const findfav = store.favorites.find(fav => fav.result._id === props.data.result._id);
				return findfav ? setCheck(true) : setCheck(false);
			};
			checkFav();
		},
		[store.favorites]
	);

	const handleFav = (cat, id) => {
		actions.setFavorites(cat, id);
	};

	return (
		<Card>
			<Card.Img variant="top" src="https://via.placeholder.com/400x200" alt="Card image cap" />
			<Card.Body>
				<Card.Title>{props.data.result.properties.model}</Card.Title>
				<Card.Text>{`Class: ${props.data.result.properties.vehicle_class}`}</Card.Text>
				<Card.Text>{`Cost: ${props.data.result.properties.cost_in_credits}`}</Card.Text>
				<Row>
					<Col md={5}>
						<Link to={"/vehicles/" + props.data.result._id}>
							<Button variant="outline-primary">Learn more</Button>
						</Link>
					</Col>
					<Col md={{ offset: 4 }}>
						<Button variant="outline-warning" onClick={() => handleFav("vehicles", props.data.result._id)}>
							{check ? "♥" : "♡"}
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

VehicleCard.propTypes = {
	data: PropTypes.object
};
