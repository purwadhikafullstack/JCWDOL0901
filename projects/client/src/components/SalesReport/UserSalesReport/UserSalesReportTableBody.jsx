import React from "react";
import { generateUrlQuery, getSalesReportByUser } from "../handlers/SalesReportHandler";
import UserSalesReportBodyContent from "./UserSalesReportBodyContent";

const UserSalesReportTableBody = ({ name, filterBy, filter, sort, order, page, setMaxPage, startDate, endDate }) => {
	const [datas, setDatas] = React.useState([]);
	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filterBy, filter, sort, order, startDate, endDate);
		getSalesReportByUser(query)
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

	return datas && <UserSalesReportBodyContent datas={datas} />;
};

export default UserSalesReportTableBody;
