import { createSlice } from "@reduxjs/toolkit";

const setMobileView = state => {
	return { ...state, mobileView: !state.mobileView };
};

export const app = createSlice({
	name: "app",
	initialState: {
		mobileView: true,
	},
	reducers: { setMobileView },
});
