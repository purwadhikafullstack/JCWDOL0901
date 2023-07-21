import React, { useState } from "react";
import { getUserCart } from "../../components/Cart/handlers/CartHandler";
import { createSearchParams, useNavigate } from "react-router-dom";
import QuantityUpdateButtonSet from "../../components/Cart/QuantityUpdateButtonSet";
import CheckoutButton from "../../components/Cart/CheckoutButton";
import BackButton from "../../components/BackButton";
import CartPriceDetail from "../../components/Cart/CartPriceDetail";
import CartHeader from "../../components/Cart/CartHeader";
import CartHeaderContent from "../../components/Cart/CartHeaderContent";
import { toCurrency } from "../../helper/currency";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../redux/reducers/user/userAction";
import AddProductButton from "../../components/Cart/AddProductButton";
import DesktopNavBar from "../../components/DesktopNavBar";
import MobileNavBar from "../../components/MobileNavBar";

const ItemPrice = ({ item, setIsUpdate, index }) => {
	return (
		<div className="flex flex-row p-4 border-b border-dashed justify-between">
			<div className="w-1/4 min-w-[150px]">
				<img
					src={process.env.REACT_APP_IMAGE_BASE_URL + item.Inventory.Product.image}
					alt={item.Inventory.Product.name}
					className="border border-gray-200 rounded-lg p-2 object-contain"
				/>
			</div>
			<div className="flex flex-col items-start justify-between pl-4 py-1 mr-auto w-full">
				<span className="font-semibold text-sm text-left">{item.Inventory.Product.name}</span>
				<span className="text-xs sm:text-sm text-left mb-auto mt-0.5">@{item.Inventory.Product.weight} gr</span>
				<QuantityUpdateButtonSet
					stock={item.Inventory.stock}
					amount={item.quantity}
					inventory_id={item.Inventory.id}
					setIsUpdate={setIsUpdate}
				/>
				<CartPriceDetail item={item} />
			</div>
			<div className="min-w-fit flex justify-end">
				<span className="text-sm sm:text-md font-light mt-auto ml-auto mb-1 mr-1">x {item.quantity}</span>
			</div>
		</div>
	);
};

const SubTotal = ({ subTotal }) => {
	return (
		<div className="flex flex-row pt-4 text-gray-400 text-base">
			<div className="text-left ml-auto font-semibold">Sub Total:</div>
			<div className="px-10 text-right ml-10 text-black font-bold">{subTotal && toCurrency(subTotal)}</div>
		</div>
	);
};

const EmptyCart = () => {
	const user = useSelector((state) => state.user);
	return (
		<div className="mb-20">
			<div>
				<img
					className="w-80 mt-10 mx-auto"
					src="/assets/images/empty_cart_illustration.png"
					alt="create product illustration"
				/>
			</div>
			<div className="text-gray-300">Your cart is empty, let's add some! :)</div>
		</div>
	);
};

const CartPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
				if (error?.response?.status === 403) {
					dispatch(setUserLogin({ hasLogged: false, avatar: "", username: "" }));
					navigate(`/login`, {
						state: {
							authGuard: true,
						},
					});
				}
			});
	}, [isUpdate]);
	return (
		<div className="min-h-screen bg-white sm:bg-green-100">
			<div className="flex flex-col sm:bg-green-200 sm:pb-4 sm:px-2">
				<div className="flex flex-col justify-between items-between z-10 mx-6">
					<DesktopNavBar />
				</div>
			</div>
			<div className="sm:p-10">
				<div className="flex flex-col bg-white max-w-5xl min-h-[50vw] mx-auto rounded-xl sm:shadow-lg">
					<CartHeader Content={CartHeaderContent} />
					<div className="">
						{cart &&
							cart.map((item, index) => <ItemPrice item={item} key={index} setIsUpdate={setIsUpdate} />)}
						{cart?.length === 0 ? <EmptyCart /> : null}
						{cart?.length === 0 ? null : (
							<div className="flex flex-col mb-10">
								<SubTotal subTotal={subTotal} />
							</div>
						)}
					</div>
					<div className="mt-auto mb-20 sm:mb-10">
						{cart?.length === 0 ? <AddProductButton /> : <CheckoutButton cart={cart} />}
					</div>
				</div>
			</div>
			<MobileNavBar />
		</div>
	);
};

export default CartPage;
