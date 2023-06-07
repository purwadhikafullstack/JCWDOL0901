import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Categories = () => {
	return (
		<Splide
			options={{ perPage: 4.5, padding: 5, pagination: false, arrows: false }}
		>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[75px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[75px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[75px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[75px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div className="flex flex-col items-center">
					<img
						className="w-[75px]"
						src="https://media.discordapp.net/attachments/1114824509917249536/1115892052773843065/image.png"
						alt="Image 1"
					/>
					<span className="text-black text-sm mt-1.5">Vegetables</span>
				</div>
			</SplideSlide>
		</Splide>
	);
};

const CategoryCarousel = () => {
	return (
		<div className="flex flex-col border-b pb-6 border-dashed">
			<div className="mb-6 ml-6 mr-auto font-bold text-xl">Categories</div>
			<Categories />
		</div>
	);
};

export default CategoryCarousel;
