import React from "react";
import BackButton from "../../components/BackButton.jsx";
import AddressBox from "../../components/Checkout/AddressBox.jsx";
import OrderBox from "../../components/Checkout/OrderBox.jsx";
import { getUserCart } from "../../components/Checkout/handlers/checkoutHandler.js";
import VoucherBox from "../../components/Checkout/VoucherBox.jsx";
import Summary from "../../components/Checkout/Summary.jsx";
import CreateOrder from "../../components/Checkout/CreateOrder.jsx";

const CheckoutPage = () => {
	const [cart, setCart] = React.useState(undefined);

	React.useEffect(() => {
		getUserCart()
			.then((result) => {
				setCart(result.data);
			})
			.catch((error) => {
				setCart([]);
			});
	}, []);

	return (
		<div className="flex flex-col bg-white">
			<BackButton url="/cart" color="text-green-400" />
			<AddressBox />
			<OrderBox cart={cart} />
			<VoucherBox />
			<Summary cart={cart} />
			<CreateOrder />
		</div>
	);
};

export default CheckoutPage;
