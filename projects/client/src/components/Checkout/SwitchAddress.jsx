import React from "react";
import BackButton from "../BackButton.jsx";
import Addresses from "./SwitchAddress/Addresses.jsx";

const SwitchAddress = () => {
	return (
		<div className="flex flex-col bg-white min-h-screen">
			<BackButton color="text-green-400" url="/cart/checkout" />
			<Addresses />
			<span className="ml-auto mr-5 mt-2 text-sm text-green-400 underline cursor-pointer">+ Add Address</span>
		</div>
	);
};

export default SwitchAddress;
