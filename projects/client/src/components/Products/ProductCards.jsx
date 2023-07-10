import React from "react";
import ProductCard from "./ProductCard";
import { getProducts, generateUrlQuery } from "./handlers/productsHandler.js";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const ProductCards = ({ page, itemPerPage, setMaxPage, sort, order }) => {
	const location = useLocation();
	const parsed = queryString.parse(location.search);
	const { category_id, branch_id, filter } = parsed;

	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(page, itemPerPage, branch_id, category_id, filter, sort, order);
		getProducts(query)
			.then((result) => {
				setProducts(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
			})
			.catch((error) => setProducts([{ name: "Server Error!", image: "" }]));
	}, [page, itemPerPage, branch_id, setMaxPage, category_id, filter, sort, order]);
	return (
		<div className="mx-4 my-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			{products.map((product, index) => {
				return <ProductCard product={product} key={index} />;
			})}
		</div>
	);
};

export default ProductCards;
