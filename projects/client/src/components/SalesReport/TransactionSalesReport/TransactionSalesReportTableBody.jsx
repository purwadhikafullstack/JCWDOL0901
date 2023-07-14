import React from "react";
import { generateUrlQuery, getBranchInventories, getSalesReportByTransaction } from "../handlers/SalesReportHandler";
import TransactionSalesReportBodyContent from "./TransactionSalesReportBodyContent";

const TransactionSalesReportTableBody = ({
	name,
	filterBy,
	filter,
	sort,
	order,
	page,
	setMaxPage,
	startDate,
	endDate,
}) => {
	const [datas, setDatas] = React.useState([]);
	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filterBy, filter, sort, order, startDate, endDate);
		getSalesReportByTransaction(query)
			.then((result) => {
				setDatas(result.data);
				// setMaxPage(Math.ceil(result.data.count / 3));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [startDate, endDate]);

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

	return datas && <TransactionSalesReportBodyContent datas={datas} />;
};

export default TransactionSalesReportTableBody;
