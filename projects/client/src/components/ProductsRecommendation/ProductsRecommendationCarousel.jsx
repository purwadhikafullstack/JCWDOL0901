import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import { getProductsRecommendation } from "./handlers/ProductsRecommendationCarouselHandler";

const Slide = ({ products }) => {
	return products.map((item, index) => {
		return (
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img className="w-[150px]" src={item?.image} alt={item?.name} />
					<span className="text-black text-sm mt-1.5">{item?.name}</span>
				</div>
			</SplideSlide>
		);
	});
};

const ProductsRecommendationCarousel = () => {
	const user = useSelector(state => state.user);
	const app = useSelector(state => state.app);
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		getProductsRecommendation(user.branch.id)
			.then(result => setProducts(result.data))
			.catch(error => setProducts([{ name: "Server Error!", image: "" }]));
	}, [user]);

	return (
		products && (
			<Splide
				options={{
					perPage: app.mobileView ? 2.5 : 5,
					pagination: false,
					arrows: false,
				}}
			>
				<Slide products={products} />
			</Splide>
		)
	);
};

export default ProductsRecommendationCarousel;
