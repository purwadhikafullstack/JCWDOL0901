import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./VoucherBox/HeaderContent";
<<<<<<< HEAD
import { useSelector } from "react-redux";

const VoucherBox = () => {
	const voucher = useSelector((state) => state.checkout.voucher);
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			{voucher?.id ? (
				<div className="flex flex-row items-center justify-between w-full px-6 border-b border-dotted">
					<div className="flex flex-col py-3">
						<span className="font-semibold text-lg text-left">{voucher.name}</span>
						<span className="text-left mt-2 mb-1">{voucher.description}</span>
					</div>
				</div>
			) : (
				<div className="text-rose-500 font-semibold text-left pl-4 py-2">No Voucher Applied</div>
			)}
=======
import VoucherBoxDetail from "./VoucherBox/VoucherBoxDetail";

const VoucherBox = () => {
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			<VoucherBoxDetail />
>>>>>>> development
		</>
	);
};

export default VoucherBox;
