import { createSlice } from "@reduxjs/toolkit";
import { initializeSummary } from "./helpers/checkout";

const setAddress = (state, action) => {
	const { id, label, detail, City } = action.payload;
	return { ...state, address: { id, label, detail, City } };
};

const initializeCart = (state, action) => {
	const summary = initializeSummary(action.payload);

	return { ...state, cart: [...action.payload], summary };
};

const setVoucher = (state, action) => {
	const { id, value, type } = action.payload;
	return { ...state, voucher: { id, value, type } };
};

export const checkout = createSlice({
	name: "checkout",
	initialState: {
		address: {
			id: null,
			label: "",
			detail: "",
			City: { type: "", name: "", Province: { name: "" } },
		},
		cart: [],
		voucher: {
			id: null,
			name: "",
			description: "",
			value: null,
			Promotion: {
				id: null,
			},
		},
		summary: {
			subtotal: 0,
			logistic: 0,
			discount: 0,
			total: 0,
		},
	},
	reducers: {
		setAddress,
		initializeCart,
		setVoucher,
	},
});
