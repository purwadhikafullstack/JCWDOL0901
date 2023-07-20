import React from "react";
import ProductsRecommendationCarousel from "./ProductsRecommendation/ProductsRecommendationCarousel";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsRecommendation = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const params = { branch_id: user?.branch?.id };
	return (
		<div className="flex flex-col py-6">
			<div className="flex flex-row">
				<div className="mb-6 mr-auto font-bold text-xl text-left">Products Recommendation</div>
				<div
					className="text-green-300 flex flex-row mt-1.5 cursor-pointer mr-2 min-w-fit"
					onClick={() => {
						navigate({
							pathname: "/products",
							search: `?${createSearchParams(params)}`,
						});
					}}
				>
					<div>See more </div>
					<span className="material-symbols-rounded">chevron_right</span>
				</div>
			</div>
			<ProductsRecommendationCarousel />
		</div>
	);
};

export default ProductsRecommendation;
