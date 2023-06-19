import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./VoucherBox/HeaderContent";
import { useSelector } from "react-redux";

const VoucherBox = () => {
	const voucher = useSelector((state) => state.checkout.voucher);
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			{voucher.id ? (
				<></>
			) : (
				<div className="text-rose-500 font-semibold text-left pl-4 py-2">No Voucher Applied</div>
			)}
		</>
	);
};

export default VoucherBox;
