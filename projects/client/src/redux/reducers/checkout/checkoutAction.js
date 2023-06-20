import { checkout } from "./checkoutReducer.js";

export const { setAddress, setLogistic, initializeCart, applyVoucher, removeVoucher, defaultCheckout } =
	checkout.actions;
