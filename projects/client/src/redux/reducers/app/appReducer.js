import { createSlice } from "@reduxjs/toolkit";

const setAppNearestBranch = (state, action) => {
	return { ...state, nearest_branch: { name: action.payload.name, id: action.payload.id } };
};

const setAppLocation = (state, action) => {
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

export const app = createSlice({
	name: "app",
	initialState: {
		hasLogged: false,
		nearest_branch: { name: "", id: null },
		mobileView: false,
		location: { granted: false, pending: true, latitude: null, longitude: null },
	},
	reducers: {
		setAppNearestBranch,
		setAppLocation,
	},
});
