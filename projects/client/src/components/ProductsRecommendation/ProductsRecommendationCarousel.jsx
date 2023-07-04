import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import { getProductsRecommendation } from "./handlers/ProductsRecommendationCarouselHandler";
import ProductCard from "../Products/ProductCard.jsx";

const Slide = ({ products }) => {
	return products.map((item, index) => {
		return (
			<SplideSlide key={index}>
				<ProductCard product={item} key={index} />
			</SplideSlide>
		);
	});
};

const ProductsRecommendationCarousel = () => {
	const user = useSelector((state) => state.user);
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		getProductsRecommendation(user.branch.id)
			.then((result) => setProducts(result.data))
			.catch((error) => setProducts([{ name: "Server Error!", image: "" }]));
	}, [user]);
	const itemPerPage = window.innerWidth > 640 ? 5 : 2;
	return (
		products && (
			<Splide
				options={{
					perPage: itemPerPage,
					pagination: false,
					arrows: false,
					gap: 15,
				}}
			>
				<Slide products={products} />
			</Splide>
		)
	);
};

export default ProductsRecommendationCarousel;
