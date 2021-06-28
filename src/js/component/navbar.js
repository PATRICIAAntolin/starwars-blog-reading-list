import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/starwars.jpg";
import trash from "../../img/trash.jpg";
import { Container, Navbar, Dropdown, Badge } from "react-bootstrap";

import { Context } from "../store/appContext";

export const Nav = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Navbar className="bg-light justify-content-between">
				<Link to={"/"}>
					<img src={logo} alt="star wars" />
				</Link>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						{"Favorites "} <Badge variant="light">{store.favorites.length}</Badge>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{store.favorites.length > 0 ? (
							store.favorites.map(data => (
								<div className="favoritesMenu" key={data.result._id}>
									<Link to={`/${data.category}/${data.result._id}`}>
										<p>{data.result.properties.name}</p>
									</Link>
									<img src={trash} alt="X" onClick={() => actions.removeFavorites(data.result._id)} />
								</div>
							))
						) : (
							<div className="favoritesMenu">
								<p>{"(empty)"}</p>
							</div>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		</Container>
	);
};
