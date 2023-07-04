import { combineReducers } from "@reduxjs/toolkit";

import { user } from "./user/userReducer.js";
import { admin } from "./admin/adminReducer.js";
import { checkout } from "./checkout/checkoutReducer.js";
<<<<<<< HEAD
=======
import { proof } from "./proof/proofReducer.js";
>>>>>>> development

export const reducer = combineReducers({
	user: user.reducer,
	admin: admin.reducer,
	checkout: checkout.reducer,
<<<<<<< HEAD
=======
	proof: proof.reducer,
>>>>>>> development
});
