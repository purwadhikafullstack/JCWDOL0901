import React from "react";
import PriceDetail from "./PriceDetail.jsx";

const OrderBoxDetail = ({ cart }) => {
	return (
		cart && (
			<div className="">
				{cart.map((item, index) => {
					return (
						<div key={index} className="flex flex-row p-4 border-b border-dashed">
							<img
								src={item.Inventory.Product.image}
								className="max-w-[100px] border border-green-500 rounded p-2"
							/>
							<div className="flex flex-col items-start justify-between pl-4 py-1">
								<span className="font-semibold text-sm">{item.Inventory.Product.name}</span>
								<span className="text-sm text-left mb-auto mt-0.5">
									@{item.Inventory.Product.weight} gr
								</span>
								<PriceDetail item={item} />
							</div>
							<span className="text-md font-light mt-auto ml-auto mb-1 mr-1">x {item.quantity}</span>
						</div>
					);
				})}
			</div>
		)
	);
};

export default OrderBoxDetail;
