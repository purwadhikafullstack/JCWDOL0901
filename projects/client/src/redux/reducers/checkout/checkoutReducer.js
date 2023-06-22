import { createSlice } from "@reduxjs/toolkit";
import {
	getSummaryAfterVoucher,
	getSummaryAfterLogistic,
	initializeSummary,
	determineBranch,
	resetSummary,
	getLogisticData,
} from "./helpers/checkout.js";

const initialState = {
	address: {
		id: null,
		label: "",
		detail: "",
<<<<<<< HEAD
		City: { type: "", name: "", Province: { name: "" } },
=======
		City: { id: undefined, type: "", name: "", Province: { name: "" } },
>>>>>>> development
	},
	branch: {
		id: null,
		city_id: null,
	},
	cart: [],
	logistic: {
		code: null,
	},
	summary: {
		hasLoaded: false,
		weight: 0,
		subtotal: 0,
		logistic: 0,
		discount: 0,
		total: 0,
		raw: {
			subtotal: 0,
			logistic: 0,
		},
	},
	voucher: {
		id: null,
		name: "",
		description: "",
		value: null,
		Promotion: {
			id: null,
		},
	},
};

const setAddress = (state, action) => {
	const { id, label, detail, City } = action.payload;
	return { ...state, address: { id, label, detail, City }, logistic: { code: null } };
};

const setLogistic = (state, action) => {
	const Voucher = { ...state.voucher };
	const logistic = getLogisticData(action.payload);

	let summary = getSummaryAfterLogistic(state.summary, logistic.cost);
	summary = Voucher.id ? getSummaryAfterVoucher(summary, { Voucher }) : summary;

	return { ...state, logistic, summary };
};

const initializeCart = (state, action) => {
	const Voucher = { ...state.voucher };

	let summary = initializeSummary(action.payload);

	if (state.logistic?.cost) {
		summary = getSummaryAfterLogistic(summary, state.logistic.cost);
	}

	if (Voucher.id) {
		summary = getSummaryAfterVoucher(summary, { Voucher });
	}

	const branch = determineBranch(action.payload);

	return { ...state, cart: [...action.payload], summary, branch };
};

const applyVoucher = (state, action) => {
	const { id, name, description, value, max_discount, Promotion } = action.payload?.Voucher;

	const summary = getSummaryAfterVoucher(state.summary, action.payload);

	return { ...state, voucher: { id, name, value, max_discount, description, Promotion: { ...Promotion } }, summary };
};

const removeVoucher = (state, action) => {
	const summary = resetSummary(state.summary);

	return { ...state, summary, voucher: null };
};

const clearCheckout = (state, action) => {
	return { ...initialState };
};

export const checkout = createSlice({
	name: "checkout",
	initialState,
	reducers: {
		setAddress,
		setLogistic,
		initializeCart,
		applyVoucher,
		removeVoucher,
		clearCheckout,
	},
});
