import React from "react";
import AddressDropDown from "./AddressMenu/AddressDropDown";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginBeforeSelecting = () => {
	const navigate = useNavigate();
	return (
		<div className="text-green-100 text-sm font-light my-auto">
			You need to{" "}
			<span className="underline font-semibold cursor-pointer" onClick={() => navigate("/login")}>
				sign in
			</span>
		</div>
	);
};
const AddressMenu = () => {
	const user = useSelector((state) => state.user);
	return (
		<div className="flex flex-col text-sm sm:text-base md:flex-row items-end justify-end text-right w-1/2">
			<div className="text-green-100 flex flex-row items-center">
				<span className="material-symbols-rounded font-thin text-lg">location_on</span>
				<div className="ml-4 sm:mx-4 font-light antialiased">Deliver to:</div>
			</div>
			{user.hasLogged ? <AddressDropDown /> : <LoginBeforeSelecting />}
		</div>
	);
};

export default AddressMenu;
