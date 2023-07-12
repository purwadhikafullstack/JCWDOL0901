import React from "react";
import BackButton from "../../components/BackButton.jsx";
import AddressBox from "../../components/Checkout/AddressBox.jsx";
import OrderBox from "../../components/Checkout/OrderBox.jsx";
import VoucherBox from "../../components/Checkout/VoucherBox.jsx";
import Summary from "../../components/Checkout/Summary.jsx";
import CreateOrder from "../../components/Checkout/CreateOrder.jsx";
import LogisticBox from "../../components/Checkout/LogisticBox.jsx";

const CheckoutPage = () => {
	return (
		<div className="bg-green-100 sm:p-20">
			<div className="flex flex-col bg-white max-w-5xl rounded-xl mx-auto">
				<BackButton url="/cart" color="text-green-400" />
				<AddressBox />
				<OrderBox />
				<LogisticBox />
				<VoucherBox />
				<Summary />
				<CreateOrder />
			</div>
		</div>
	);
};

export default CheckoutPage;
