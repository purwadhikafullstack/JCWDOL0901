import React from "react";

const Category = ({ product, price }) => {
	return (
		<div className="flex flex-row items-center">
			<span className="bg-green-50 text-green-300 px-2.5 py-1 rounded-lg text-xs mr-auto">
				{product.Category.name}
			</span>
			{price.promo.type && (
				<span className="text-lg font-bold text-xs text-left bg-green-300 text-green-100 rounded-lg px-2.5 py-1 w-fit ml-2 flex flex-row items-center">
					<span className="material-symbols-rounded text-xs">workspace_premium</span>
					<span className="ml-1.5">{price?.promo?.type}</span>
				</span>
			)}
		</div>
	);
};

export default Category;
