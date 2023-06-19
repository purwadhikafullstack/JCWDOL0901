import React from "react";
import { getUserVouchers, filterVoucherByBranch, filterVoucherByCart } from "../handlers/checkoutHandler";
import VoucherOptions from "./VoucherOptions";
import { useSelector } from "react-redux";

const Vouchers = () => {
	const [vouchers, setVouchers] = React.useState([]);
	const globalState = useSelector((state) => state);
	React.useEffect(() => {
		getUserVouchers()
			.then((result) => {
				let filteredVouchers = filterVoucherByBranch(result.data, globalState);
				filteredVouchers = filterVoucherByCart(filteredVouchers, globalState);
				setVouchers(filteredVouchers);
			})
			.catch((error) => {
				setVouchers([]);
			});
	}, []);

	return vouchers && <VoucherOptions vouchers={vouchers} />;
};

export default Vouchers;
