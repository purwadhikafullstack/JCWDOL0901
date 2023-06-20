import React from "react";
import BackButton from "../../components/BackButton.jsx";
import AddressBox from "../../components/Checkout/AddressBox.jsx";
import OrderBox from "../../components/Checkout/OrderBox.jsx";
import VoucherBox from "../../components/Checkout/VoucherBox.jsx";
import Summary from "../../components/Checkout/Summary.jsx";
import CreateOrder from "../../components/Checkout/CreateOrder.jsx";
import { useDispatch } from "react-redux";
import { defaultCheckout } from "../../redux/reducers/checkout/checkoutAction.js";

const CheckoutPage = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => dispatch(defaultCheckout());
	});

	return (
		<div className="flex flex-col bg-white">
			<BackButton url="/cart" color="text-green-400" />
			<AddressBox />
			<OrderBox />
			<VoucherBox />
			<Summary />
			<CreateOrder />
		</div>
	);
};

export default CheckoutPage;
