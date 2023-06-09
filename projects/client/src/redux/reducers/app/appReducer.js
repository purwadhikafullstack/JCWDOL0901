import { createSlice } from "@reduxjs/toolkit";

export const app = createSlice({
	name: "app",
	initialState: {
		hasLogged: false,
		branch: { name: "", id: null },
		mobileView: false,
		location: { granted: false, pending: true, latitude: null, longitude: null },
	},
	reducers: {},
});
