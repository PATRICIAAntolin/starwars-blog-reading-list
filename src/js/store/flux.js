import { peopleUrls, planetsUrls, vehiclesUrls } from "./urls";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			detail: [],
			favorites: []
		},
		actions: {
			setFavorites: (cat, id) => {
				const store = getStore();
				const favorite = store[cat].filter(fav => fav.result._id === id);
				setStore({ ...store, favorites: [...store.favorites, { ...favorite[0], category: cat }] });
			},
			removeFavorites: id => {
				const store = getStore();
				const favoritesFilt = store.favorites.filter(fav => fav.result._id !== id);
				setStore({ ...store, favorites: [...favoritesFilt] });
			},
			setDetails: (cat, id) => {
				const store = getStore();
				const details = store[cat].filter(fav => fav.result._id === id);
				setStore({ ...store, detail: [...details] });
			},
			loadSomeData: () => {
				const store = getStore();
				// fetch people
				peopleUrls.map(url =>
					fetch(url)
						.then(resp => resp.json())
						.then(json => {
							const people = json;
							setStore({ ...store, people: [...store.people, people] });
						})
				);

				// fetch vehicles
				vehiclesUrls.map(url =>
					fetch(url)
						.then(resp => resp.json())
						.then(json => {
							const vehicles = json;
							setStore({ ...store, vehicles: [...store.vehicles, vehicles] });
						})
				);
				// fetch planets
				planetsUrls.map(url =>
					fetch(url)
						.then(resp => resp.json())
						.then(json => {
							const planets = json;
							setStore({ ...store, planets: [...store.planets, planets] });
						})
				);
			}
		}
	};
};

export default getState;
