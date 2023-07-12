import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCart } from "../../redux/reducers/checkout/checkoutAction";
import CartHeader from "./CartHeader";
import CartHeaderContent from "./CartHeaderContent";
import CartBoxDetail from "./CartBoxDetail";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserCart } from "./handlers/CartHandler";

const CartBox = () => {
	const navigate = useNavigate();
	const [cart, setCart] = useState();
	const [subTotal, setSubTotal] = useState();
	const [isUpdate, setIsUpdate] = useState(false);

	React.useEffect(() => {
		getUserCart()
			.then((result) => {
				// if (!result.data) navigate("/404");
				setCart(result.data);
				setSubTotal(
					cart?.reduce((acc, curr) => {
						const price = curr.Inventory.Product.price;
						const quantity = curr.quantity;
						const promoId = curr.Inventory.promo?.Promotion?.id;
						const promoValue = curr.Inventory.promo?.value;
						const finalPrice =
							promoId === 2
								? price - promoValue
								: promoId === 3
								? price - (promoValue / 100) * price
								: price;

						return acc + finalPrice * quantity;
					}, 0),
				);
				setIsUpdate(false);
			})
			.catch((error) => {
				alert(error);
			});
	}, [isUpdate]);
	console.log("cart cartBox: ", cart);
	return (
		<>
			<CartHeader Content={CartHeaderContent} />
			<CartBoxDetail cart={cart} setIsUpdate={setIsUpdate} />
		</>
	);
};

export default CartBox;
