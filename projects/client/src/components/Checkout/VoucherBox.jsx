import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./VoucherBox/HeaderContent";
import VoucherBoxDetail from "./VoucherBox/VoucherBoxDetail";

const VoucherBox = () => {
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			<VoucherBoxDetail />
		</>
	);
};

export default VoucherBox;
