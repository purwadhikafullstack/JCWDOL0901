import React from "react";
import CategoriesSlider from "./CategoryCarousel/CategorySlider";

const CategoryCarousel = () => {
	return (
		<div className="flex flex-col border-b pb-6 border-dashed">
			<div className="mt-4 mb-6 ml-6 mr-auto font-bold text-xl">Categories</div>
			<CategoriesSlider />
		</div>
	);
};

export default CategoryCarousel;
