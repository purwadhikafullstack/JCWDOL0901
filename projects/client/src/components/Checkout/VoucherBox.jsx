import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./VoucherBox/HeaderContent";

const VoucherBox = () => {
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			<div className="text-rose-500 font-semibold text-left pl-4 py-2">No Voucher Applied</div>
		</>
	);
};

export default VoucherBox;
