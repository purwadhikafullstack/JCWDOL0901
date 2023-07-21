import React from "react";
import { generateUrlQuery, getSalesReportByTransaction } from "../handlers/SalesReportHandler";
import TransactionSalesReportBodyContent from "./TransactionSalesReportBodyContent";

const TransactionSalesReportTableBody = ({ sort, order, page, setMaxPage, startDate, endDate, itemPerPage }) => {
	const [datas, setDatas] = React.useState([]);
	React.useEffect(() => {
		const query = generateUrlQuery(page, sort, order, startDate, endDate, itemPerPage);
		getSalesReportByTransaction(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [order, page, startDate, endDate]);

	// const [datas, setDatas] = React.useState([]);
	// React.useEffect(() => {
	// 	const query = generateUrlQuery(name, page, filterBy, filter, sort, order, startDate, endDate);

	// 	getBranchInventories(query)
	// 		.then((result) => {
	// 			setDatas(result.data.rows);
	// 			setMaxPage(Math.ceil(result.data.count / 3));
	// 		})
	// 		.catch((error) => alert("Server Unavailable"));
	// }, [filter, order, page, name, startDate, endDate]);

	return datas && <TransactionSalesReportBodyContent datas={datas} page={page} itemPerPage={itemPerPage} />;
};

export default TransactionSalesReportTableBody;
