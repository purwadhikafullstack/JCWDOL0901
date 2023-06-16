import React from "react";

const SimilarProducts = () => {
	return (
		<div className="flex flex-col py-6 lg:mx-8 lg:mt-8">
			<div className="flex flex-row">
				<div className="mb-6 ml-6 mr-auto font-bold text-xl">Similar Product</div>
				<div className="text-green-300 flex flex-row mt-1.5 cursor-pointer mr-2">
					<div>See more </div>
					<span className="material-symbols-rounded">chevron_right</span>
				</div>
			</div>
		</div>
	);
};

export default SimilarProducts;
