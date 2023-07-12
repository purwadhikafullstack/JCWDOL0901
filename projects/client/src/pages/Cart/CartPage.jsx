import React, { useEffect, useState } from "react";
import { getUserCart } from "../../components/Cart/handlers/CartHandler";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QuantityUpdateButtonSet from "../../components/Cart/QuantityUpdateButtonSet";

const ItemPrice = ({ item, setIsUpdate }) => {
	console.log("invenotry_id itemPrice: ", item.Inventory.id);

	return (
		<div className="flex flex-row py-4 text-gray-300 text-sm">
			<div className="text-left">{item.quantity}x</div>
			<div className="flex flex-col">
				<div className="px-4 text-left">{item.Inventory.Product.name}</div>
				<QuantityUpdateButtonSet
					stock={item.Inventory.stock}
					amount={item.quantity}
					inventory_id={item.Inventory.id}
					setIsUpdate={setIsUpdate}
				/>
			</div>
			<div className="px-4 text-right ml-auto text-red">{item?.Inventory?.promo?.Promotion?.name}</div>
			{item?.Inventory?.promo?.Promotion?.id === 2 || item?.Inventory?.promo?.Promotion?.id === 3 ? (
				<div className="px-4 text-right text-gray-200 line-through">
					Rp{(item.Inventory.Product.price * item.quantity).toLocaleString("id")}
				</div>
			) : null}

			{item?.Inventory?.promo?.Promotion?.id === 2 ? (
				<div className="px-4 text-right text-black">
					Rp
					{((item.Inventory.Product.price - item.Inventory.promo?.value) * item.quantity).toLocaleString(
						"id",
					)}
				</div>
			) : item?.Inventory?.promo?.Promotion?.id === 3 ? (
				<div className="px-4 text-right text-black">
					Rp
					{(
						(item.Inventory.Product.price -
							(item.Inventory.promo?.value / 100) * item.Inventory.Product.price) *
						item.quantity
					).toLocaleString("id")}
				</div>
			) : (
				<div className="px-4 text-right text-black">
					Rp{(item.Inventory.Product.price * item.quantity).toLocaleString("id")}
				</div>
			)}
		</div>
	);
};

const SubTotal = ({ subTotal }) => {
	return (
		<div className="flex flex-row pt-4 text-gray-200 text-sm">
			<div className="text-left">Sub Total</div>
			<div className="px-4 text-right ml-auto text-black">Rp{subTotal?.toLocaleString("id")}</div>
		</div>
	);
};

// const getOrderDetail = (transaction_id) => {
// 	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/${transaction_id}`, {
// 		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// 	});
// };

const CartPage = () => {

	const navigate = useNavigate();
	const [cart, setCart] = useState();
	const [subTotal, setSubTotal] = useState();
	const [isUpdate, setIsUpdate] = useState(false)

	React.useEffect(() => {
		getUserCart()
			.then((result) => {
				// if (!result.data.id) navigate("/404");
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
				setIsUpdate(false)
				console.log("subTotal in cartpage: ", subTotal);
				console.log("result of getuser in cartpage: ", result);
			})
			.catch((error) => {
				alert(error);
			});
	}, [isUpdate]);
	
	// 	getProductDetail(inventory_id)
	// 		.then((result) => {
	// 			if (!result.data.id) navigate("/404");
	// 			setProduct(result.data);
	// 		})
	// 		.catch((error) => {
	// 			alert(error);
	// 		});
	// }, [inventory_id]);
	return (
		<div className="py-6">
			<div className="mx-10 max-w-[800px]">
				<div className="mb-4 font-semibold text-left">Cart</div>
				<div className="py-4 divide-y divide-gray-100">
					
					{cart && cart.map((item, index) => <ItemPrice item={item} key={index} setIsUpdate={setIsUpdate} />)}
					
					<div className="flex flex-col">
						<SubTotal subTotal={subTotal} />
					</div>
				</div>
			</div>
		</div>
		
	);
};

export default CartPage;
