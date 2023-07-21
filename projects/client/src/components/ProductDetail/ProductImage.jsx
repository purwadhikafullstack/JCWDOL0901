import React from "react";

const ProductImage = ({ product }) => {
	return (
		<div className="lg:mt-14 lg:border lg:rounded-lg lg:p-2 lg:mx-8 lg:h-fit">
			<img
				src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
				className="max-w-[300px] max-h-[300px] mx-auto hover:scale-150 transition duration-700 aspect-square"
				alt={product.name}
			/>
		</div>
	);
};

export default ProductImage;
