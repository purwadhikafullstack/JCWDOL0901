import { createSlice } from "@reduxjs/toolkit";

const setSuper = (state, action) => {
	return { ...state, super: action.payload };
};

export const admin = createSlice({
	name: "admin",
	initialState: {
		super: false,
	},
	reducers: {
		setSuper,
	},
});
