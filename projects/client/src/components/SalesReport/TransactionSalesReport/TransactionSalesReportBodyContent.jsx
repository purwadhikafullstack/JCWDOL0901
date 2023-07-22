import React from "react";
import TransactionSalesViewMode from "./TransactionSalesViewMode";

const TransactionSalesReportBodyContent = ({ datas, page, itemPerPage }) => {
	return datas.map((item, index) => {
		return <TransactionSalesViewMode item={item} key={index} index={index} page={page} itemPerPage={itemPerPage} />;
	});
};

export default TransactionSalesReportBodyContent;
