import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getCategories, generateUrlQuery } from "./handlers/categoryHandler.js";

const CategoryTableBody = ({ page, setMaxPage, itemPerPage, filter }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(page, itemPerPage, filter);
		getCategories(localStorage.getItem("token"), query)
			.then(result => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
			})
			.catch(error => alert("Server Unavailable"));
	}, [page, setMaxPage, itemPerPage, filter]);

	return datas && <TableBodyContent datas={datas} page={page} itemPerPage={itemPerPage} />;
};

export default CategoryTableBody;
