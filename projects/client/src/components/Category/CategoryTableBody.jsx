import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getCategories, generateUrlQuery } from "./handlers/categoryHandler.js";

const CategoryTableBody = ({ page, setMaxPage, itemPerPage, filter, sort, order }) => {
	const [datas, setDatas] = React.useState([]);
	const [isUpdated, setIsUpdated] = React.useState(false);

	React.useEffect(() => {
		const query = generateUrlQuery(page, itemPerPage, filter, sort, order);
		getCategories(localStorage.getItem("token"), query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
				setIsUpdated(false);
			})
			.catch((error) => alert("Server Unavailable"));
	}, [page, setMaxPage, itemPerPage, filter, sort, order, isUpdated]);

	return (
		datas && <TableBodyContent datas={datas} page={page} itemPerPage={itemPerPage} setIsUpdated={setIsUpdated} />
	);
};

export default CategoryTableBody;
