import { combineReducers } from "@reduxjs/toolkit";

import { app } from "./app/appReducer.js";
import { user } from "./user/userReducer.js";

export const reducer = combineReducers({
	app: app.reducer,
	user: user.reducer,
});
