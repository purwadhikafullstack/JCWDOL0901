import React from "react";
import { getUserVouchers, filterVoucherByBranchAndCart, getUserCart } from "../handlers/checkoutHandler.js";
import VoucherOptions from "./VoucherOptions.jsx";
import { removeVoucher } from "../../../redux/reducers/checkout/checkoutAction.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearUser } from "../../../redux/reducers/user/userAction.js";
import { showAlertByError } from "../../../helper/alert.js";

const Vouchers = () => {
	const [vouchers, setVouchers] = React.useState([]);
	const globalState = useSelector((state) => state);
	const dispatch = useDispatch();

	React.useEffect(() => {
		let cart;
		getUserCart()
			.then((result) => {
				cart = result.data;
				getUserVouchers()
					.then((result) => {
						let filteredVouchers = filterVoucherByBranchAndCart(result.data, cart);
						setVouchers(filteredVouchers);
					})
					.catch((error) => showAlertByError(error, dispatch));
			})
			.catch((error) => showAlertByError(error, dispatch));
	}, []);

	return (
		vouchers && (
			<>
				<VoucherOptions vouchers={vouchers} dispatch={dispatch} globalState={globalState} />
				<Link
					className="text-rose-500 ml-auto my-2 mr-4 flex flex-row items-center cursor-pointer"
					onClick={() => dispatch(removeVoucher())}
					to={-1}
				>
					<span className="text-lg material-symbols-rounded">cancel</span>
					<span className="underline ml-1">Do not use voucher</span>
				</Link>
			</>
		)
	);
};

export default Vouchers;
