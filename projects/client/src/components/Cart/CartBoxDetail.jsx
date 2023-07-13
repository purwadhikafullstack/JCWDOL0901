import React from "react";
import CartPriceDetail from "./CartPriceDetail";
import QuantityUpdateButtonSet from "./QuantityUpdateButtonSet";

const CartBoxDetail = ({ cart, setIsUpdate }) => {
	return cart.length ? (
		<div className="">
			{cart.map((item, index) => {
				return (
					<div key={index} className="flex flex-row p-4 border-b border-dashed">
						<img
							src={item.Inventory.Product.image}
							className="max-w-[100px] border border-green-500 rounded p-2 object-contain"
							alt={item.Inventory.Product.name}
						/>
						<div className="flex flex-col items-start justify-between pl-4 py-1">
							<span className="font-semibold text-sm">{item.Inventory.Product.name}</span>
							<span className="text-sm text-left mb-auto mt-0.5">
								@{item.Inventory.Product.weight} gr
							</span>
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
			})}
		</div>
	) : (
		<div className="text-rose-500 font-semibold text-left pl-4 py-2">Cart is empty</div>
	);
};

export default CartBoxDetail;
