import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getProductsOnly, generateUrlQuery } from "./handlers/manageProductsHandler.js";

const ProductTableBody = ({ page, setMaxPage, itemPerPage, filter, sort, order }) => {
	const [datas, setDatas] = React.useState([]);
	console.log(datas);

	React.useEffect(() => {
		const query = generateUrlQuery(page, itemPerPage, null, filter, sort, order);
		getProductsOnly(localStorage.getItem("token"), query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [page, setMaxPage, itemPerPage, filter, sort, order]);
	return datas && <TableBodyContent datas={datas} page={page} itemPerPage={itemPerPage} />;
};

export default ProductTableBody;
