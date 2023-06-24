import React from "react";

const TransactionBillDesktop = ({ transaction }) => {
	return (
		<div className="hidden lg:flex lg:flex-col lg:mx-auto lg:px-6">
			<span className="font-semibold flex flex-row items-center">
				<span className="material-symbols-rounded text-base">request_quote</span>
				<span className="ml-1 text-base">Amount:</span>
			</span>
			<span className="text-[#f47229] font-semibold text-left text-base ml-2 mt-1">
				Rp {transaction.amount.toLocaleString("id")}
			</span>
		</div>
	);
};

export default TransactionBillDesktop;
