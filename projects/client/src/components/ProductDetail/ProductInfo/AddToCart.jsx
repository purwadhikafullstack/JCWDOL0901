import React from "react";
import AddToCartDesktop from "./AddToCart/AddToCartDesktop.jsx";
import AddToCartMobile from "./AddToCart/AddToCartMobile.jsx";

const AddToCart = ({ product }) => {
	const [amount, setAmount] = React.useState(0);
	const stock = product.Inventories[0].stock;

	return (
		<>
			<AddToCartMobile amount={amount} setAmount={setAmount} stock={stock} />
			<AddToCartDesktop amount={amount} setAmount={setAmount} product={product} stock={stock} />
		</>
	);
};

export default AddToCart;
