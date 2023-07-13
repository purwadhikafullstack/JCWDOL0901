import React from "react";
import Logistics from "./SwitchLogistic/Logistics";
import BackButton from "../BackButton";
import ContinueButton from "../ContinueButton";

const SwitchLogistic = () => {
	return (
		<div className="sm:p-20 min-h-screen bg-green-100 items-center justify-center">
			<div className="flex flex-col min-h-screen sm:min-h-0 sm:p-5 bg-white max-w-7xl rounded-xl shadow-lg">
				<BackButton color="text-green-400" url="/cart/checkout" />
				<Logistics />
				<ContinueButton />
			</div>
		</div>
	);
};

export default SwitchLogistic;
