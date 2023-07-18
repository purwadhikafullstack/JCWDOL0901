import React from "react";
import Vouchers from "./SwitchVoucher/Vouchers";
import BackButton from "../BackButton";
import ContinueButton from "../ContinueButton";

const SwitchVoucher = () => {
	return (
		<div className="min-h-screen bg-green-100 items-center justify-center sm:p-20 ">
			<div className="flex flex-col min-h-screen bg-white max-w-7xl mx-auto rounded-xl shadow-lg sm:min-h-0 sm:p-5">
				<BackButton color="text-green-400" url="/cart/checkout" />
				<Vouchers />
				<ContinueButton />
			</div>
		</div>
	);
};

export default SwitchVoucher;
