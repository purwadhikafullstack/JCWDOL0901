import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./OrderBox/HeaderContent";
import OrderBoxDetail from "./OrderBox/OrderBoxDetail";
import { getUserCart } from "./handlers/checkoutHandler.js";
import { useDispatch, useSelector } from "react-redux";
import { initializeCart } from "../../redux/reducers/checkout/checkoutAction";

const OrderBox = () => {
	const cart = useSelector((state) => state.checkout.cart);
	const dispatch = useDispatch();

	React.useEffect(() => {
		getUserCart()
			.then((result) => {
				dispatch(initializeCart(result.data));
			})
			.catch((error) => {
				dispatch(initializeCart([]));
			});
	}, []);

	return (
		<>
			<MenuHeader Content={HeaderContent} />
			<OrderBoxDetail cart={cart} />
		</>
	);
};

export default OrderBox;
