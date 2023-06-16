import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Menu = ({ active, name, to }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`cursor-pointer w-32 py-2 rounded-lg transition duration-300 ${
				active ? "font-bold bg-white text-green-200" : "font-medium hover:bg-green-300"
			}`}
			onClick={() => navigate(to)}
		>
			{name}
		</div>
	);
};

const DesktopNavBar = () => {
	const location = useLocation().pathname;

	return (
		<div className="hidden text-green-100 text-xl sm:block sm:flex sm:flex-row sm:justify-center sm:w-full sm:my-4">
			<Menu active={location === "/"} name="Home" to="/" />
			<Menu active={location === "/cart"} name="Cart" to="/cart" />
			<Menu active={location === "/history"} name="History" to="/history" />
			<Menu active={location === "/profile"} name="Account" to="/account/change-password" />
		</div>
	);
};

export default DesktopNavBar;
