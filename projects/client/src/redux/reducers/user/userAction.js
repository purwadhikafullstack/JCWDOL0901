import { user } from "./userReducer.js";

export const { clearUserSession, setUserNearestBranch, setUserLocation, switchBranch, setUserLogin, setCartUpdate } =
	user.actions;
