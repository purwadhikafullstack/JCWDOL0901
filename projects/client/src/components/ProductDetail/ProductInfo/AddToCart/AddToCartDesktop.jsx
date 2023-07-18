import React from "react";
import DesktopButtonSet from "./DesktopButtonSet";
import AddToCart from "./AddToCart";
import { toCurrency } from "../../../../helper/currency";

const AddToCartDesktop = ({ stock, amount, setAmount, price }) => {
	return (
		<div className="hidden flex-col items-center justify-center p-4 h-fit my-auto mr-16 ml-auto lg:min-w-[22%] border border-green-200 justify-around rounded-lg lg:flex">
			<span className="font-semibold mr-auto mb-4">Set Amount</span>
			<DesktopButtonSet stock={stock} amount={amount} setAmount={setAmount} />
			<div className="flex flex-row items-center justify-between w-full mt-8 mb-3 px-1">
				<span className="text-gray-300 text-sm mr-auto">Subtotal: </span>
				<span className="text-lg font-bold">{toCurrency(amount * price?.final)}</span>
			</div>
			<AddToCart amount={amount} />
		</div>
	);
};

export default AddToCartDesktop;
