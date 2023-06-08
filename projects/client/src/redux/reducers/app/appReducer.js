import { createSlice } from "@reduxjs/toolkit";

const setAppNearestBranch = (state, action) => {
	return { ...state, nearest_branch: action.payload };
};

const setAppLocation = (state, action) => {
	const { latitude, longitude } = action.payload;

	return {
		...state,
		location: {
			latitude,
			longitude,
		},
	};
};

export const app = createSlice({
	name: "app",
	initialState: {
		hasLogged: false,
		nearest_branch: null,
		mobileView: false,
		location: {},
	},
	reducers: {
		setAppNearestBranch,
		setAppLocation,
	},
});
