import React from "react";
import TransactionSalesViewMode from "./TransactionSalesViewMode";

const TransactionSalesReportBodyContent = ({ datas }) => {
	return datas.map((item, index) => {
		return <TransactionSalesViewMode item={item} key={index} index={index} />;
	});
};

export default TransactionSalesReportBodyContent;
