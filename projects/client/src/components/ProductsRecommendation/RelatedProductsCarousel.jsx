import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getRelatedProducts } from "./handlers/ProductsRecommendationCarouselHandler.js";
import ProductCard from "../Products/ProductCard.jsx";

const Slide = ({ products }) => {
	return products.map((item, index) => {
		return (
			<SplideSlide key={item?.name}>
				<ProductCard product={item} key={index} />
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
	const itemPerPage = window.innerWidth > 640 ? 4 : 2;
	return (
		products && (
			<Splide
				options={{
					perPage: itemPerPage,
					padding: 5,
					pagination: false,
					arrows: true,
					gap: 15,
				}}
			>
				<Slide products={products} />
			</Splide>
		)
	);
};

export default RelatedProductsCarousel;
