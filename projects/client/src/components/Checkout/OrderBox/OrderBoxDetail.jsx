import React from "react";
import PriceDetail from "./PriceDetail.jsx";

const OrderBoxDetail = ({ cart }) => {
	return cart.length ? (
		<div className="">
			{cart.map((item, index) => {
				return (
					<div key={index} className="flex flex-row p-4 border-b border-dashed">
						<img
							src={process.env.REACT_APP_IMAGE_BASE_URL + item.Inventory.Product.image}
							className="max-w-[100px] border border-green-500 rounded p-2 object-contain"
							alt={item.Inventory.Product.name}
						/>
						<div className="flex flex-col items-start justify-between pl-4 py-1">
							<span className="font-semibold text-sm text-left">{item.Inventory.Product.name}</span>
							<span className="text-sm text-left mb-auto mt-0.5">
								@{item.Inventory.Product.weight} gr
							</span>
							<PriceDetail item={item} />
						</div>
						<div className="ml-auto min-w-fit flex justify-end items-end">
							<span className="text-sm sm:text-md font-light mt-auto ml-auto mb-1 mr-1">
								x {item.quantity}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	) : (
		<div className="text-rose-500 font-semibold text-left pl-4 py-2">Cart is empty</div>
	);
};

export default OrderBoxDetail;
