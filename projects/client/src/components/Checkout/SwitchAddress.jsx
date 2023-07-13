import React from "react";
import BackButton from "../BackButton.jsx";
import Addresses from "./SwitchAddress/Addresses.jsx";
import { useNavigate } from "react-router-dom";
import ContinueButton from "../ContinueButton.jsx";

const SwitchAddress = () => {
	const navigate = useNavigate();
	return (
		<div className="sm:p-20 min-h-screen bg-green-100 items-center justify-center">
			<div className="flex flex-col min-h-screen sm:min-h-0 sm:p-5 bg-white max-w-7xl rounded-xl shadow-lg">
				<BackButton color="text-green-400" url="/cart/checkout" />
				<Addresses />
				<ContinueButton />
			</div>
		</div>
	);
};

export default SwitchAddress;
