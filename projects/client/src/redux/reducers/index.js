import { combineReducers } from "@reduxjs/toolkit";

import { user } from "./user/userReducer.js";
import { admin } from "./admin/adminReducer.js";
import { checkout } from "./checkout/checkoutReducer.js";
import { proof } from "./proof/proofReducer.js";

export const reducer = combineReducers({
	user: user.reducer,
	admin: admin.reducer,
	checkout: checkout.reducer,
	proof: proof.reducer,
});
