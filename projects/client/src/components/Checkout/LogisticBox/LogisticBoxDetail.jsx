import React from "react";
import { useSelector } from "react-redux";
import { toCurrency } from "../../../helper/currency";

const LogisticBoxDetail = () => {
	const logistic = useSelector((state) => state.checkout.logistic);

	if (logistic?.code)
		return (
			<div className="flex flex-row items-center justify-between w-full px-6 border-b border-dotted">
				<div className="flex flex-col py-3">
					<span className="font-semibold text-lg text-left">
						<span>{logistic.service}</span>
					</span>
					<span className="text-left mt-2 mb-1">{toCurrency(logistic.cost)}</span>
				</div>
			</div>
		);

	return <div className="text-rose-500 font-semibold text-left pl-4 py-2">Select logistic service</div>;
};

export default LogisticBoxDetail;
