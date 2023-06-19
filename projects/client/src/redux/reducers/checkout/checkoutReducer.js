import { createSlice } from "@reduxjs/toolkit";
import { getSummaryAfterVoucher, initializeSummary, resetSummary } from "./helpers/checkout.js";

const setAddress = (state, action) => {
	const { id, label, detail, City } = action.payload;
	return { ...state, address: { id, label, detail, City } };
};

const initializeCart = (state, action) => {
	const summary = state.summary.hasLoaded ? state.summary : initializeSummary(action.payload);

	return { ...state, cart: [...action.payload], summary };
};

const applyVoucher = (state, action) => {
	const { id, name, description, value, max_discount } = action.payload?.Voucher;

	const summary = getSummaryAfterVoucher(state.summary, action.payload);

	return { ...state, voucher: { id, name, value, max_discount, description }, summary };
};

const removeVoucher = (state, action) => {
	const summary = resetSummary(state.summary);

	return { ...state, summary, voucher: null };
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
			hasLoaded: false,
			subtotal: 0,
			logistic: 0,
			discount: 0,
			total: 0,
			raw: {
				subtotal: 0,
				logistic: 0,
			},
		},
	},
	reducers: {
		setAddress,
		initializeCart,
		applyVoucher,
		removeVoucher,
	},
});
