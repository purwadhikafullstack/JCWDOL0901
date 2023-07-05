import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getRelatedProducts } from "./handlers/ProductsRecommendationCarouselHandler.js";
<<<<<<< HEAD
=======
import ProductCard from "../Products/ProductCard.jsx";
>>>>>>> development

const Slide = ({ products }) => {
	return products.map((item, index) => {
		return (
<<<<<<< HEAD
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img className="w-[150px]" src={item?.image} alt={item?.name} />
					<span className="text-black text-xs mt-1.5 ">{item?.name}</span>
				</div>
=======
			<SplideSlide key={item?.name}>
				<ProductCard product={item} key={index} />
>>>>>>> development
			</SplideSlide>
		);
	});
};

const RelatedProductsCarousel = ({ branch_id, category_id, inventory_id }) => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		getRelatedProducts(branch_id, category_id, inventory_id)
<<<<<<< HEAD
			.then((result) => setProducts(result.data))
			.catch((error) => setProducts([{ name: "Server Error!", image: "" }]));
	}, []);

=======
			.then((result) => setProducts(result.data.rows))
			.catch((error) => setProducts([{ name: "Server Error!", image: "" }]));
	}, []);
	const itemPerPage = window.innerWidth > 640 ? 4 : 2;
>>>>>>> development
	return (
		products && (
			<Splide
				options={{
<<<<<<< HEAD
					perPage: 3,
					padding: 5,
					pagination: false,
					arrows: false,
=======
					perPage: itemPerPage,
					padding: 5,
					pagination: false,
					arrows: false,
					gap: 15,
>>>>>>> development
				}}
			>
				<Slide products={products} />
			</Splide>
		)
	);
};

export default RelatedProductsCarousel;
