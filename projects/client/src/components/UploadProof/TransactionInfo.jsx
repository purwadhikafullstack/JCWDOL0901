import React from "react";
import { getTransactionDetail } from "./handler/uploadPaymentProofHandler";
import TransactionID from "./TransactionInfo/TransactionID";
import TransactionDate from "./TransactionInfo/TransactionDate";
import TransactionBillMobile from "./TransactionInfo/TransactionBillMobile";
import TransactionBillDesktop from "./TransactionInfo/TransactionBillDesktop";

const TransactionInfo = ({ transaction_id }) => {
	const [transaction, setTransaction] = React.useState(undefined);

	React.useEffect(() => {
		getTransactionDetail(transaction_id)
			.then((result) => {
				setTransaction(result.data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		transaction && (
			<>
				<div className="flex flex-row items-center justify-between py-4 px-4">
					<TransactionID transaction={transaction} />
					<div className="hidden lg:block lg:h-16  lg:border-l lg:border-dotted"></div>
					<TransactionBillDesktop transaction={transaction} />
					<div className="h-16 border-l border-dotted"></div>
					<TransactionDate transaction={transaction} />
				</div>
				<TransactionBillMobile transaction={transaction} />
				<div className="border-t border-dashed"></div>
			</>
		)
	);
};

export default TransactionInfo;
