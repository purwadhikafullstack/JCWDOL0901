import React from "react";
import { toCurrency } from "../../../helper/currency";

const TransactionBillDesktop = ({ transaction }) => {
	return (
		<div className="hidden lg:flex lg:flex-col lg:mx-auto lg:px-8 lg:whitespace-nowrap">
			<span className="font-semibold flex flex-row items-center">
				<span className="material-symbols-rounded text-base lg:text-xl">request_quote</span>
				<span className="ml-1 text-base lg:text-xl">Amount:</span>
			</span>
			<span className="text-[#f47229] font-semibold text-left text-base ml-2 mt-1 lg:text-xl">
				{toCurrency(transaction.amount)}
			</span>
		</div>
	);
};

export default TransactionBillDesktop;
