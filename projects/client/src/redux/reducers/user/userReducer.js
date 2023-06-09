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

export const user = createSlice({
	name: "user",
	initialState: {
		hasLogged: false,
		branch: { name: "", id: null },
		location: { granted: false, pending: true, latitude: null, longitude: null },
	},
	reducers: {
		setUserNearestBranch,
		setUserLocation,
		switchBranch,
	},
});
