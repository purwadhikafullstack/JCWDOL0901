import { createSlice } from "@reduxjs/toolkit";

export const app = createSlice({
	name: "app",
	initialState: { hasLogged: false, nearest_branch: null, mobileView: false, geolocation: {} },
	reducers: {
		setNearestBranch: (state, action) => {
			return { ...state, nearest_branch: action.payload };
		},
	},
});
