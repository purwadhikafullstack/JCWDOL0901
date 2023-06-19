import React from "react";
import {
	getUserVouchers,
	filterVoucherByBranch,
	filterVoucherByCart,
	filterVoucherByBranchAndCart,
} from "../handlers/checkoutHandler";
import VoucherOptions from "./VoucherOptions";
import { useDispatch, useSelector } from "react-redux";

const Vouchers = () => {
	const [vouchers, setVouchers] = React.useState([]);
	const globalState = useSelector((state) => state);
	const dispatch = useDispatch();

	React.useEffect(() => {
		getUserVouchers()
			.then((result) => {
				let filteredVouchers = filterVoucherByBranchAndCart(result.data, globalState);
				setVouchers(filteredVouchers);
			})
			.catch((error) => {
				setVouchers([]);
			});
	}, []);

	return vouchers && <VoucherOptions vouchers={vouchers} dispatch={dispatch} />;
};

export default Vouchers;
