import React from "react";
<<<<<<< HEAD
import Vouchers from "./VoucherBox/Vouchers";
=======
import Vouchers from "./SwitchVoucher/Vouchers";
>>>>>>> development
import BackButton from "../BackButton";

const SwitchVoucher = () => {
	return (
		<div className="flex flex-col bg-white min-h-screen">
			<BackButton color="text-green-400" url="/cart/checkout" />
			<Vouchers />
		</div>
	);
};

export default SwitchVoucher;
