import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getInventoryPromotions, generateUrlQuery } from "./handlers/categoryHandler.js";

const CategoryTableBody = ({ page, setMaxPage }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(page);
		getInventoryPromotions(localStorage.getItem("token"), query)
			.then(result => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 3));
			})
			.catch(error => alert("Server Unavailable"));
	}, [page, setMaxPage]);

	return datas && <TableBodyContent datas={datas} />;
};

export default CategoryTableBody;
