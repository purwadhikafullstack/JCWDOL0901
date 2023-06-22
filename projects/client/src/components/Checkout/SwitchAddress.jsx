import React from "react";
import BackButton from "../BackButton.jsx";
import Addresses from "./SwitchAddress/Addresses.jsx";

// TODO: redirect to edit address page
const SwitchAddress = () => {
	return (
		<div className="flex flex-col bg-white min-h-screen">
			<BackButton color="text-green-400" url="/cart/checkout" />
			<Addresses />
			<span className="flex flex-row items-center ml-auto mr-6 mt-3 text-sm text-green-400 cursor-pointer">
				<span className="material-symbols-rounded">domain_add</span>
				<span className="ml-3 underline ">Edit / Add Address</span>
			</span>
		</div>
	);
};

export default SwitchAddress;
