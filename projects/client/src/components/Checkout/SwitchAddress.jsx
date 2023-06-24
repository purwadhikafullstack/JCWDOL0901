import React from "react";
import BackButton from "../BackButton.jsx";
import Addresses from "./SwitchAddress/Addresses.jsx";
import { useNavigate } from "react-router-dom";

const SwitchAddress = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col bg-white min-h-screen">
			<BackButton color="text-green-400" url="/cart/checkout" />
			<Addresses />
		</div>
	);
};

export default SwitchAddress;
