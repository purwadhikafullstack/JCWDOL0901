import React from "react";
import { generateUrlQuery, getAdminTransactions } from "../handlers/manageOrderHandler";
import OrderBodyContent from "./OrderBodyContent";

const OrderTableBody = ({ superAdmin, name, startDate, endDate, filterBy, filter, sort, order, page, setMaxPage }) => {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(name, startDate, endDate, filterBy, filter, sort, order, page);
		getAdminTransactions(query)
			.then((result) => {
				setData(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 5));
			})
			.catch((error) => alert(error));
	}, [name, startDate, endDate, filter, order, page]);

	return data && <OrderBodyContent superAdmin={superAdmin} data={data} />;
};

export default OrderTableBody;
