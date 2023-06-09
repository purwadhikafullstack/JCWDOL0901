import React, {useState } from "react";
import { getUserCart } from "../../components/Cart/handlers/CartHandler";
import { useNavigate } from "react-router-dom";
import QuantityUpdateButtonSet from "../../components/Cart/QuantityUpdateButtonSet";
import CheckoutButton from "../../components/Cart/CheckoutButton";
import BackButton from "../../components/BackButton";
import CartPriceDetail from "../../components/Cart/CartPriceDetail";
import CartHeader from "../../components/Cart/CartHeader";
import CartHeaderContent from "../../components/Cart/CartHeaderContent";

const ItemPrice = ({ item, setIsUpdate, index }) => {
	return (
		<div className="flex flex-row p-4 border-b border-dashed">
			<img
				src={item.Inventory.Product.image}
				alt={item.Inventory.Product.name}
				className="max-w-[100px] border border-green-500 rounded p-2"
			/>
			<div className="flex flex-col items-start justify-between pl-4 py-1">
				<span className="font-semibold text-sm text-left">{item.Inventory.Product.name}</span>
				<span className="text-sm text-left mb-auto mt-0.5">@{item.Inventory.Product.weight} gr</span>
				<QuantityUpdateButtonSet
					stock={item.Inventory.stock}
					amount={item.quantity}
					inventory_id={item.Inventory.id}
					setIsUpdate={setIsUpdate}
				/>
				<CartPriceDetail item={item} />
			</div>
			<span className="text-md font-light mt-auto ml-auto mb-1 mr-1">x {item.quantity}</span>
		</div>
	);
};

const SubTotal = ({ subTotal }) => {
	return (
		<div className="flex flex-row pt-4 text-gray-400 text-base">
			<div className="text-left ml-auto font-semibold">Sub Total:</div>
			<div className="px-10 text-right ml-10 text-black font-bold">Rp{subTotal?.toLocaleString("id")}</div>
		</div>
	);
};

const CartPage = () => {
	const navigate = useNavigate();
	const [cart, setCart] = useState();
	const [subTotal, setSubTotal] = useState();
	const [isUpdate, setIsUpdate] = useState(true);

	React.useEffect(() => {
		getUserCart()
			.then((result) => {
				if (!result.data) navigate("/404");
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
	return (
		<div className="sm:p-10 bg-green-100 min-h-screen">
			<div className="flex flex-col bg-white max-w-5xl min-h-[50vw] mx-auto rounded-xl shadow-lg">
				<BackButton url="/" color="text-green-400" />
				<CartHeader Content={CartHeaderContent} />
				<div className="">
					{cart && cart.map((item, index) => <ItemPrice item={item} key={index} setIsUpdate={setIsUpdate} />)}
					{cart?.length === 0 ? <div className=" bg-green-100 py-20">Cart is empty</div> : null}
					<div className="flex flex-col mb-10">
						<SubTotal subTotal={subTotal} />
					</div>
				</div>
				<div className="mt-auto mb-10">
					<CheckoutButton cart={cart} />
				</div>
			</div>
		</div>
	);
};

export default CartPage;
