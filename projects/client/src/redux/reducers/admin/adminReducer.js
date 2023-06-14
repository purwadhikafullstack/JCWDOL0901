import { createSlice } from "@reduxjs/toolkit";

const setAdminLogin = (state, action) => {
	const { hasLogged, superAdmin } = action.payload || null;
	return { hasLogged, superAdmin };
};

export const admin = createSlice({
	name: "admin",
	initialState: {
		hasLogged: false,
		superAdmin: false,
	},
	reducers: {
		setAdminLogin,
	},
});
