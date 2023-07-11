import React from "react";
import CategoriesSlider from "./CategoryCarousel/CategorySlider";

const CategoryCarousel = ({ setPage }) => {
	return (
		<div className="flex flex-col border-b border-gray-200/50">
			<div className="mt-4 mb-4 sm:mb-0 ml-6 mr-auto font-bold text-xl">Categories</div>
			<CategoriesSlider setPage={setPage} />
		</div>
	);
};

export default CategoryCarousel;
