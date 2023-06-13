import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getCategories, generateUrlQuery } from "./handlers/categoryHandler.js";

const CategoryTableBody = ({ page, setMaxPage }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(page);
		console.log(query);
		getCategories(localStorage.getItem("token"), query)
			.then(result => {
				console.log(result);
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 5));
			})
			.catch(error => alert("Server Unavailable"));
	}, [page, setMaxPage]);

	return datas && <TableBodyContent datas={datas} />;
};

export default CategoryTableBody;
