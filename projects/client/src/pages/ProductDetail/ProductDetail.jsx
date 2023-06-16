import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../components/ProductDetail/handlers/ProductDetailHandler";
import BackButton from "../../components/BackButton";
import ProductInfo from "../../components/ProductDetail/ProductInfo";
import AddToCartMobile from "../../components/ProductDetail/ProductInfo/AddToCart/AddToCartMobile";
import SimilarProduct from "../../components/SimilarProducts";
import AddToCartDesktop from "../../components/ProductDetail/ProductInfo/AddToCart/AddToCartDesktop";
import AddToCart from "../../components/ProductDetail/ProductInfo/AddToCart";
const ProductDetailLayout = ({ product, inventory_id }) => {
	return (
		<div className="flex lg:h-screen lg:justify-center">
			<div className="flex flex-col  mx-auto w-full pb-32 min-h-screen bg-white lg:pb-32 lg:shrink-0 lg:max-w-7xl lg:min-w-7xl lg:min-h-fit lg:h-fit lg:flex-col lg:my-auto lg:mx-20 lg:rounded-lg lg:shadow-xl">
				<div className="flex flex-col lg:flex-row">
					<BackButton color="text-green-400 h-fit mb-auto" url={-1} />
					<div className="lg:mt-24 lg:border lg:rounded-lg lg:p-2 lg:mx-8 lg:h-fit">
						<img src={product.image} className="max-w-[300px] max-h-[300px] mx-auto scale-onhover" />
					</div>
					<ProductInfo product={product} />
					<AddToCart product={product} />
				</div>
				<SimilarProduct />
			</div>
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
				console.log(error);
				alert(error.data.message);
			});
	}, []);

	return product && <ProductDetailLayout product={product} inventory_id={inventory_id} />;
};

export default ProductDetail;
