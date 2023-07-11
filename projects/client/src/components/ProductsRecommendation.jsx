import React from "react";
import ProductsRecommendationCarousel from "./ProductsRecommendation/ProductsRecommendationCarousel";

const ProductsRecommendation = () => {
	return (
		<div className="flex flex-col py-6">
			<div className="flex flex-row">
				<div className="mb-6 ml-6 mr-auto font-bold text-xl">Products Recommendation</div>
				<div className="text-green-300 flex flex-row mt-1.5 cursor-pointer mr-2">
					<div>See more </div>
					<span className="material-symbols-rounded">chevron_right</span>
				</div>
			</div>
			<ProductsRecommendationCarousel />
		</div>
	);
};

export default ProductsRecommendation;
