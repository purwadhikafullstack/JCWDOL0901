import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Products = () => {
	return (
		<Splide
			options={{
				perPage: 2.5,
				pagination: false,
				arrows: false,
			}}
		>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[150px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[150px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[150px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[150px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[150px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
		</Splide>
	);
};

const ProductsRecommendationCarousel = () => {
	return (
		<div className="flex flex-col py-6">
			<div className="flex flex-row">
				<div className="mb-6 ml-6 mr-auto font-bold text-xl">Top Products</div>
				<div className="text-green-300 flex flex-row mt-1.5 cursor-pointer mr-2">
					<div>See more </div>
					<span className="material-symbols-rounded">chevron_right</span>
				</div>
			</div>
			<Products />
		</div>
	);
};

export default ProductsRecommendationCarousel;
