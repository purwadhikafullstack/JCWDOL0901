import React from "react";
import TransactionInfo from "./TransactionInfo";
import BankInfo from "../../components/BankInfo";

const PaymentInformation = ({ transaction_id }) => {
	return (
		<div className="flex flex-col border-r">
			<TransactionInfo transaction_id={transaction_id} />
			<BankInfo />
		</div>
	);
};

export default PaymentInformation;
