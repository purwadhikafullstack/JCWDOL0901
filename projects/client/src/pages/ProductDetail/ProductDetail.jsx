import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "./handlers/ProductDetailHandler";

const ProductDetailLayout = ({ product }) => {
	return (
		<div className="flex flex-col mx-auto pt-6 pb-10 flex-1 min-w-[480px] overflow-hidden bg-white z-10 sm:w-full">
			{JSON.stringify(product)}
		</div>
	);
};

const ProductDetail = () => {
	const { inventory_id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = React.useState(undefined);

	React.useEffect(() => {
		getProductDetail(inventory_id)
			.then((result) => {
				if (!result.data.id) navigate("/404");
				setProduct(result.data);
			})
			.catch((error) => {
				alert(error.data.message);
			});
	}, []);

	return product && <ProductDetailLayout product={product} />;
};

export default ProductDetail;
