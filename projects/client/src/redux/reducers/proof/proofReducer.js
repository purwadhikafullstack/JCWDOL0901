import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	transaction_id: null,
};

const setTransactionID = (state, action) => {
	return { ...state, transaction_id: action.payload };
};

const clearTransactionID = (state, action) => {
	return { ...initialState };
};

export const proof = createSlice({
	name: "proof",
	initialState,
	reducers: {
		setTransactionID,
		clearTransactionID,
	},
});
