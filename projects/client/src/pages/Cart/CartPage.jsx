import React, { useEffect, useState } from "react";
import { getUserCart } from "../../components/Cart/handlers/CartHandler";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ItemPrice = ({ item, sendDataToParent }) => {
	console.log("item at itemPrice: ", item);
	let dataArray = [];

	if (item?.Inventory?.promo?.Promotion?.id === 2) {
		dataArray.push((item.Inventory.Product.price - item.Inventory.promo?.value) * item.quantity);
	} else if (item?.Inventory?.promo?.Promotion?.id === 3) {
		dataArray.push(
			(item.Inventory.Product.price - (item.Inventory.promo?.value / 100) * item.Inventory.Product.price) *
				item.quantity,
		);
	} else {
		dataArray.push(item.Inventory.Product.price * item.quantity);
	}
	console.log("array:", dataArray);
	sendDataToParent(dataArray);

	return (
		<div className="flex flex-row py-4 text-gray-300 text-sm">
			<div className="text-left">{item.quantity}x</div>
			<div className="px-4 text-left">{item.Inventory.Product.name}</div>
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
			<div className="px-4 text-right ml-auto text-black">Rp{subTotal.toLocaleString("id")}</div>
		</div>
	);
};

// const DeliveryCost = ({ deliveryCost }) => {
// 	return (
// 		<div className="flex flex-row pt-4 text-gray-200 text-sm">
// 			<div className="text-left">Delivery Cost</div>
// 			<div className="px-4 text-right ml-auto text-black">Rp{deliveryCost.toLocaleString("id")}</div>
// 		</div>
// 	);
// };

// const VoucherDiscount = ({ voucher_discount }) => {
// 	return (
// 		<div className="flex flex-row py-4 text-gray-200 text-sm">
// 			<div className="text-left">Voucher Discount</div>
// 			<div className="px-4 text-right ml-auto text-red">Rp{voucher_discount.toLocaleString("id")}</div>
// 		</div>
// 	);
// };

// const TotalPrice = ({ transaction }) => {
// 	return (
// 		<div className="flex flex-row py-4 text-gray-200 text-sm">
// 			<div className="text-left font-semibold text-gray-300">Total</div>
// 			<div className="px-4 text-right ml-auto text-black font-semibold">
// 				Rp{transaction.amount.toLocaleString("id")}
// 			</div>
// 		</div>
// 	);
// };

// const getOrderDetail = (transaction_id) => {
// 	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/${transaction_id}`, {
// 		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// 	});
// };

const CartPage = () => {
	const handleDataFromChild = (data) => {
		// Menggunakan data yang diterima dari child
		console.log("data from child: ",data);
	};

	// const voucher_discount = transaction.voucher_discount;
	// const subTotal = transaction.amount + voucher_discount - deliveryCost;

	const navigate = useNavigate();
	const [product, setProduct] = useState();
	const [amount, setAmount] = useState();

	React.useEffect(() => {
		getUserCart()
			.then((result) => {
				// if (!result.data.id) navigate("/404");
				setProduct(result.data);
				console.log("result of getuser in cartpage: ", result);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);
	console.log("product of getuser in cartpage: ", product);

	const amounts = product && product.map((item) => item.Inventory.Product.price * item.quantity);
	// let totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);
	// setAmount(totalAmount);
	// console.log("amounts: ", amounts);
	// console.log("total amount: ", totalAmount);

	useEffect(() => {
		if (product) {
			let totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);
			setAmount(totalAmount);
		}
	}, [amounts]);
	console.log("amount of setAmount in cartPage: ", amount);

	// React.useEffect(() => {
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
				<div className="mb-4 font-semibold text-left">Your Order</div>
				<div className="py-4 divide-y divide-gray-100">
					{console.log("item: ", product)}
					{product &&
						product.map((item, index) => (
							<ItemPrice item={item} key={index} sendDataToParent={handleDataFromChild} />
						))}
					{/* {product && product.map((item, index) =>  setAmount=(item.Inventory.Product.price * item.quantity))} */}
					<div className="flex flex-col">
						{/* <SubTotal subTotal={subTotal} />
		 				<DeliveryCost deliveryCost={deliveryCost} />
		 				<VoucherDiscount voucher_discount={voucher_discount} /> */}
					</div>
					{/* <TotalPrice transaction={transaction} /> */}
				</div>
			</div>
		</div>
		// <>

		//  <div className="py-6">
		// 	<div className="mx-10 max-w-[800px]">
		// 		<div className="mb-4 font-semibold text-left">Your Order</div>
		// 		<div className="text-sm text-left">
		// {/* 			<span className="text-gray-200 mr-2">INV-{String(transaction.id).padStart(6, "0")}</span> */}
		// 		</div>
		//  		<div className="py-4 divide-y divide-gray-100">
		// 	{product.data.map((item, index) => {
		// 				{/* return <ItemPrice item={item} key={index} />; */}
		//  			})}
		//  			<div className="flex flex-col">
		//  				<SubTotal subTotal={subTotal} />
		//  				<DeliveryCost deliveryCost={deliveryCost} />
		//  				<VoucherDiscount voucher_discount={voucher_discount} />
		//  			</div>
		//  			<TotalPrice transaction={transaction} />
		//  		</div>
		//  	</div>
		//  </div>

		// </>
	);
};

export default CartPage;
