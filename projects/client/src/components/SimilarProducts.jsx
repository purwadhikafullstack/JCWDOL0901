import React from "react";
import RelatedProductsCarousel from "./ProductsRecommendation/RelatedProductsCarousel";
import { createSearchParams, useNavigate } from "react-router-dom";

const SimilarProducts = ({ category_id, branch_id, inventory_id }) => {
	const navigate = useNavigate();
	const params = { category_id, branch_id };
	return (
		<div className="flex flex-col mt-auto mb-6 lg:mb-12 lg:mx-8">
			<div className="flex flex-row mb-2">
				<div className="mb-6 ml-6 mr-auto font-bold text-xl">You may also like</div>
				<div
					className="text-green-300 flex flex-row mt-1.5 cursor-pointer mr-6"
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
			<div className="px-6">
				<RelatedProductsCarousel branch_id={branch_id} category_id={category_id} inventory_id={inventory_id} />
			</div>
		</div>
	);
};

export default SimilarProducts;
