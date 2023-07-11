import React from "react";
import Logistics from "./SwitchLogistic/Logistics";
import BackButton from "../BackButton";

const SwitchLogistic = () => {
	return (
		<div className="flex flex-col bg-white min-h-screen">
			<BackButton color="text-green-400" url="/cart/checkout" />
			<Logistics />
		</div>
	);
};

export default SwitchLogistic;
