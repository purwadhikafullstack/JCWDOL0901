import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getRelatedProducts } from "./handlers/ProductsRecommendationCarouselHandler.js";

const Slide = ({ products }) => {
	return products.map((item, index) => {
		return (
			<SplideSlide key={item?.name}>
				<div className="flex flex-col items-center">
					<img className="w-[150px]" src={item?.image} alt={item?.name} />
					<span className="text-black text-xs mt-1.5 ">{item?.name}</span>
				</div>
			</SplideSlide>
		);
	});
};

const RelatedProductsCarousel = ({ branch_id, category_id, inventory_id }) => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		getRelatedProducts(branch_id, category_id, inventory_id)
			.then((result) => setProducts(result.data.rows))
			.catch((error) => setProducts([{ name: "Server Error!", image: "" }]));
	}, []);

	return (
		products && (
			<Splide
				options={{
					perPage: 3,
					padding: 5,
					pagination: false,
					arrows: false,
				}}
			>
				<Slide products={products} />
			</Splide>
		)
	);
};

export default RelatedProductsCarousel;
