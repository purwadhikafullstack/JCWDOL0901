import React from "react";
import { toCurrency } from "../../../helper/currency";

const DisplayPromo = ({ price }) => {
	return (
		<div className="flex items-center my-auto ml-2">
			{price?.original && (
				<span className="text-lg text-sm text-left line-through text-gray-300 w-fit">
					{toCurrency(price?.original)}
				</span>
			)}
			<span className="text-lg text-xs text-left text-green-100 px-2 py-0.5 rounded ml-2 bg-rose-500 w-fit">
				{price?.promo?.value}
			</span>
		</div>
	);
};

const Price = ({ price }) => {
	return (
		<div className="flex flex-row w-full lg:whitespace-nowrap">
			<span className="text-lg font-medium text-left text-green-300 truncate w-fit">
				{toCurrency(price.final)}
			</span>
			{price?.promo?.value && <DisplayPromo price={price} />}
		</div>
	);
};

export default Price;
