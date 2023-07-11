import React from "react";

const ProductImagePreview = ({ file }) => {
	return (
		<div className="flex flex-col justify-center items-center my-6">
			<img
				className="w-52 h-52 rounded-lg shadow-lg shadow-gray-200 object-contain"
				src={file ? file : "/assets/images/upload_image_placeholder.jpeg"}
				alt={file}
			/>
		</div>
	);
};

export default ProductImagePreview;
