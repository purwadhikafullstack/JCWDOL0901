import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./OrderBox/HeaderContent";
import OrderBoxDetail from "./OrderBox/OrderBoxDetail";

const OrderBox = ({ cart }) => {
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			<OrderBoxDetail cart={cart} />
		</>
	);
};

export default OrderBox;
