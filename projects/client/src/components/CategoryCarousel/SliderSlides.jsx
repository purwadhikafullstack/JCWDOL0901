import React from "react";
import { SplideSlide } from "@splidejs/react-splide";

const SliderSlides = ({ categories }) => {
	return categories.map((category, index) => {
		return (
			<SplideSlide>
				<div className="flex flex-col items-center" key={index}>
					<img className="w-[75px] cursor-pointer" src={category.image} alt={category.name} />
					<span className="text-black text-sm mt-1.5">{category.name}</span>
				</div>
			</SplideSlide>
		);
	});
};

export default SliderSlides;
