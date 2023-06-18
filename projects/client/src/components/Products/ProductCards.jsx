import React from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "./handlers/ProductsHandler.js";
import { useSelector } from "react-redux";

const ProductCards = ({ page, itemPerPage, setMaxPage }) => {
	const [products, setProducts] = React.useState([]);
	const branch_id = useSelector((state) => state.user).branch.id;

	React.useEffect(() => {
		getProducts(page, itemPerPage, branch_id)
			.then((result) => {
				setProducts(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / itemPerPage));
			})
			.catch((error) => setProducts([{ name: "Server Error!", image: "" }]));
	}, [page, itemPerPage, branch_id, setMaxPage]);
	return (
		<div className="m-4 grid grid-cols-2 gap-4">
			{products.map((product) => {
				return <ProductCard product={product} />;
			})}
		</div>
	);
};

export default ProductCards;
