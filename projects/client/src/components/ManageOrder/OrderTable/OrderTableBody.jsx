import React from "react";
import { generateUrlQuery, getAdminTransactions } from "../handlers/manageOrderHandler";
import OrderBodyContent from "./OrderBodyContent";

const OrderTableBody = ({ superAdmin, name, startDate, endDate, filterBy, filter, sort, order, page, setMaxPage }) => {
	const [data, setData] = React.useState([]);
	const [isUpdated, setIsUpdated] = React.useState(false);
	// const navigate = React.useNavigate();

	React.useEffect(() => {
		const query = generateUrlQuery(name, startDate, endDate, filterBy, filter, sort, order, page);
		setIsUpdated(false);
		getAdminTransactions(query)
			.then((result) => {
				setData(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 5));
			})
			.catch((error) => alert(error));
	}, [name, startDate, endDate, filter, order, page, isUpdated]);

	return data && <OrderBodyContent superAdmin={superAdmin} data={data} setIsUpdated={setIsUpdated} />;
};

export default OrderTableBody;
