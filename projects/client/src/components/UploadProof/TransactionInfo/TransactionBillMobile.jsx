import React from "react";

const TransactionBillMobile = ({ transaction }) => {
	return (
		<div className="flex flex-row px-6 border-t border-dotted justify-center items-center py-6 mx-4 lg:hidden">
			<span className="font-semibold flex flex-row items-center">
				<span className="material-symbols-rounded text-sm">request_quote</span>
				<span className="ml-1 text-sm">Amount:</span>
			</span>
			<span className="text-[#f47229] font-semibold text-lg ml-2 text-sm">
				Rp {transaction.amount.toLocaleString("id")}
			</span>
		</div>
	);
};

export default TransactionBillMobile;
