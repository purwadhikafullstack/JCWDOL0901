import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getProductsOnly, generateUrlQuery } from "./handlers/manageProductsHandler.js";

const ProductTableBody = ({ page, setMaxPage, itemPerPage, filter, sort, order, name, filterBy }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(page, itemPerPage, filter, sort, order, name, filterBy);

		getProductsOnly(localStorage.getItem("token"), query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [page, setMaxPage, itemPerPage, name, sort, order, filter, filterBy]);
	return datas && <TableBodyContent datas={datas} page={page} itemPerPage={itemPerPage} />;
};

export default ProductTableBody;
