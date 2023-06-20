import React from "react";
const { useSelector } = require("react-redux");

const VoucherBoxDetail = () => {
	const voucher = useSelector((state) => state.checkout.voucher);

	if (voucher?.id)
		return (
			<div className="flex flex-row items-center justify-between w-full px-6 border-b border-dotted">
				<div className="flex flex-col py-3">
					<span className="font-semibold text-lg text-left">{voucher.name}</span>
					<span className="text-left mt-2 mb-1">{voucher.description}</span>
				</div>
			</div>
		);

	return <div className="text-rose-500 font-semibold text-left pl-4 py-2">No voucher applied</div>;
};

export default VoucherBoxDetail;
