import React from "react";
import Category from "./ProductInfo/Category";
import Name from "./ProductInfo/Name";
import Price from "./ProductInfo/Price";
import Stock from "./ProductInfo/Stock";
import Description from "./ProductInfo/Description";
import BranchCard from "./ProductInfo/BranchCard";
import Unit from "./ProductInfo/Unit";

const ProductInfo = ({ product, price }) => {
	return (
		<div className="flex flex-col bg-white items-start py-6 px-8 mt-4 border-t-2 border-green-300/30 lg:mt-6 lg:max-w-[40%] lg:shrink-1 lg:border-0">
			<Category product={product} price={price} />
			<Name product={product} />
			<Price price={price} />
			<div className="flex flex-col mr-auto w-full bg-green-100 rounded-lg my-5 py-3 px-4 sm:max-w-[12em]">
				<Stock product={product} />
				<Unit product={product} />
			</div>
			<Description description={product.description} />
			<BranchCard branch={product.Inventories[0].Branch} />
		</div>
	);
};

export default ProductInfo;
