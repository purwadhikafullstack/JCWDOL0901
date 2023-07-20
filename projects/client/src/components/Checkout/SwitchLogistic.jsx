import React from "react";
import Logistics from "./SwitchLogistic/Logistics";
import BackButton from "../BackButton";
import ContinueButton from "../ContinueButton";

const SwitchLogistic = () => {
	return (
		<div className="min-h-screen bg-green-100 items-center justify-center sm:p-20 ">
			<div className="flex flex-col min-h-screen bg-white max-w-7xl  mx-auto rounded-xl shadow-lg sm:min-h-0 sm:p-5">
				<BackButton color="text-green-400" url="/cart/checkout" />
				<Logistics />
				<ContinueButton />
			</div>
		</div>
	);
};

export default SwitchLogistic;
