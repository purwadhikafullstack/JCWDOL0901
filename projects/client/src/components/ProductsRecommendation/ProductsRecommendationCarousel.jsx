import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import { getProductsRecommendation } from "./handlers/ProductsRecommendationCarouselHandler";

const ProductsRecommendationCarousel = () => {
	const app = useSelector(state => state.app);
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		getProductsRecommendation(app.branch.id)
			.then(result => setProducts(result.data))
			.catch(error => setProducts([{ name: "Server Error!", image: "" }]));
	}, [app]);

	return (
		products && (
			<Splide
				options={{
					perPage: 2.5,
					pagination: false,
					arrows: false,
				}}
			>
				<SplideSlide>
					<div className="flex flex-col items-center">
						<img
							className="w-[150px]"
							src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
							alt="Image 1"
						/>
						<span className="text-black text-sm mt-1.5">Vegetables</span>
					</div>
				</SplideSlide>
			</Splide>
		)
	);
};

export default ProductsRecommendationCarousel;
