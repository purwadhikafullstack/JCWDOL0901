import React from "react";
import { generateUrlQuery, getProducts } from "./handlers/ProductsHandler";

const ProductTableBody = ({ page, setMaxPage, itemPerPage, filter, sort, order }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(page, itemPerPage, branch_id, category_id, filter, sort, order);
		getProducts(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [page, setMaxPage, itemPerPage, filter, sort, order]);

	return datas && <TableBodyConten datas={datas} page={page} itemPerPage={itemPerPage} />;
};

export default ProductTableBody;
