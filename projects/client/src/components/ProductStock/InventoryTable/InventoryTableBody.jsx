import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { generateUrlQuery, getBranchInventories } from "../handlers/ProductStockHandler.js";

const InventoryTableBody = ({ name, filterBy, filter, sort, order, page, setMaxPage }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filterBy, filter, sort, order);

		getBranchInventories(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 3));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [filter, order, page, name]);

	return datas && <TableBodyContent datas={datas} />;
};

export default InventoryTableBody;
