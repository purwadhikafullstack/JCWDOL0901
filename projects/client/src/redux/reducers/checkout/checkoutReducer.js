import { createSlice } from "@reduxjs/toolkit";

const setAddress = (state, action) => {
	const { id, label, detail, City } = action.payload;
	return { ...state, address: { id, label, detail, City } };
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
		voucher: {
			id: null,
			value: null,
			type: {},
		},
	},
	reducers: {
		setAddress,
		setVoucher,
	},
});
