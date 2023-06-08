import { combineReducers } from "@reduxjs/toolkit";

import { app } from "./app/appReducer.js";

export const reducer = combineReducers({
	app: app.reducer,
});
