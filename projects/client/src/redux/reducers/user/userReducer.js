import { createSlice } from "@reduxjs/toolkit";

const setUserNearestBranch = (state, action) => {
	return { ...state, branch: { name: action.payload.name, id: action.payload.id } };
};

const setUserLocation = (state, action) => {
	const { granted, pending, latitude, longitude } = action.payload || null;

	return {
		...state,
		location: {
			granted,
			pending,
			latitude,
			longitude,
		},
	};
};

const switchBranch = (state, action) => {
	return { ...state, branch: { ...action.payload } };
};

const setUserLogin = (state, action) => {
	const { hasLogged, avatar, username } = action.payload || null;
	return { ...state, hasLogged, avatar, username };
};

const setCartUpdate = (state, action) => {
	const { cartUpdate } = action.payload || null;
	return { ...state, cartUpdate };
};

export const user = createSlice({
	name: "user",
	initialState: {
		hasLogged: false,
		avatar: "",
		username: "",
		branch: { name: "", id: null },
		location: { granted: false, pending: true, latitude: null, longitude: null },
		cartUpdate: false,
	},
	reducers: {
		setUserNearestBranch,
		setUserLocation,
		switchBranch,
		setUserLogin,
		setCartUpdate,
	},
});
