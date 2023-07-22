import React from "react";
import { generateUrlQuery, getSalesReportByUser } from "../handlers/SalesReportHandler";
import UserSalesReportBodyContent from "./UserSalesReportBodyContent";

const UserSalesReportTableBody = ({ sort, order, page, setMaxPage, startDate, endDate, itemPerPage }) => {
	const [datas, setDatas] = React.useState([]);
	
	React.useEffect(() => {
		const query = generateUrlQuery(page, sort, order, startDate, endDate, itemPerPage);
		getSalesReportByUser(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count.length / itemPerPage));
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

	return datas && <UserSalesReportBodyContent datas={datas} page={page} itemPerPage={itemPerPage}/>;
};

export default UserSalesReportTableBody;
