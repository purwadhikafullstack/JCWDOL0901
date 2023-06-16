import React from "react";

const Category = ({ product }) => {
	return (
		<span className="bg-green-50 text-green-300 px-2.5 py-1 rounded-lg text-xs mr-auto">
			{product.Category.name}
		</span>
	);
};

export default Category;
