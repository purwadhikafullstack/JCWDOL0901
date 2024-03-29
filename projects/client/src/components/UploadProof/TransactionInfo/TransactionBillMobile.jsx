import React from "react";
import { toCurrency } from "../../../helper/currency";

const TransactionBillMobile = ({ transaction }) => {
	return (
		<div className="flex flex-row px-6 border-t border-dotted justify-center items-center py-6 mx-4 lg:hidden">
			<span className="font-semibold flex flex-row items-center">
				<span className="material-symbols-rounded text-lg">request_quote</span>
				<span className="ml-1 text-lg">Amount:</span>
			</span>
			<span className="text-[#f47229] font-semibold text-lg ml-2">{toCurrency(transaction.amount)}</span>
		</div>
	);
};

export default TransactionBillMobile;
