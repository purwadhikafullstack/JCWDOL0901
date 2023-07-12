import React from "react";
import Vouchers from "./SwitchVoucher/Vouchers";
import BackButton from "../BackButton";

const SwitchVoucher = () => {
	return (
		<div className="sm:p-20 min-h-screen bg-green-100 flex items-center justify-center">
			<div className="flex flex-col min-h-screen sm:min-h-0 sm:p-5 bg-white max-w-7xl rounded-xl shadow-lg">
				<BackButton color="text-green-400" url="/cart/checkout" />
				<Vouchers />
			</div>
		</div>
	);
};

export default SwitchVoucher;
