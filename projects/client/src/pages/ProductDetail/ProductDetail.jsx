import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { determinePrice, getProductDetail } from "../../components/ProductDetail/handlers/ProductDetailHandler";
import BackButton from "../../components/BackButton";
import ProductInfo from "../../components/ProductDetail/ProductInfo";
import SimilarProduct from "../../components/SimilarProducts";
import AddToCart from "../../components/ProductDetail/ProductInfo/AddToCart";
import ProductImage from "../../components/ProductDetail/ProductImage";
import { clearUser } from "../../redux/reducers/user/userAction";
import { useDispatch } from "react-redux";
import { showAlertByError } from "../../helper/alert";

const ProductDetailLayout = ({ product, inventory_id }) => {
	const [price, setPrice] = React.useState({ original: 0, final: 0, promo: false });
	const navigate = useNavigate();
	React.useEffect(() => {
		determinePrice(product, setPrice);
	}, [product]);

	return (
		<div className="flex lg:justify-center xl:py-10 bg-green-100">
			<div className="flex flex-col mx-auto w-full pb-20 sm:pb-32 min-h-screen bg-white lg:pb-0 lg:shrink-0 lg:max-w-7xl lg:justify-between lg:min-w-7xl lg:min-h-fit lg:flex-col lg:my-auto lg:mx-20 lg:rounded-lg lg:shadow-xl">
				<div className="flex flex-row items-center">
					<BackButton color="text-green-400 h-fit mb-auto" url={-1} replace={{ replace: true }} />
					<div className="ml-auto mr-6 text-green-300 cursor-pointer text-sm" onClick={() => navigate("/")}>
						Back to home
					</div>
				</div>
				<div className="flex flex-col lg:flex-row">
					<ProductImage product={product} />
					<ProductInfo product={product} price={price} />
					<AddToCart product={product} price={price} />
				</div>
				<SimilarProduct
					branch_id={product.Inventories[0].Branch.id}
					category_id={product.category_id}
					inventory_id={inventory_id}
				/>
			</div>
		</div>
	);
};

const ProductDetail = () => {
	const [product, setProduct] = React.useState(undefined);
	const { inventory_id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	React.useEffect(() => {
		getProductDetail(inventory_id)
			.then((result) => {
				if (!result.data.id) navigate("/404");
				setProduct(result.data);
			})
			.catch((error) => showAlertByError(error, dispatch));
	}, [inventory_id]);

	return product && <ProductDetailLayout product={product} inventory_id={inventory_id} />;
};

export default ProductDetail;
