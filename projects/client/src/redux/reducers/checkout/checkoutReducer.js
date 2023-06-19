import { createSlice } from "@reduxjs/toolkit";

const setAddress = (state, action) => {
	const { id, label, detail, City } = action.payload;
	return { ...state, address: { id, label, detail, City } };
};

const initializeCart = (state, action) => {
	return { ...state, cart: [...action.payload] };
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
			total: 0,
		},
	},
	reducers: {
		setAddress,
		initializeCart,
		setVoucher,
	},
});
