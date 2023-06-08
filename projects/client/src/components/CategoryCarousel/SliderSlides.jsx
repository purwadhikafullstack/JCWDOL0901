import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const SliderSlides = ({ categories }) => {
	return (
		<Splide options={{ perPage: 4.5, padding: 5, pagination: false, arrows: false }}>
			{categories.map((category, index) => {
				return (
					<SplideSlide>
						<div className="flex flex-col items-center" key={index}>
							<img
								className="w-[75px] cursor-pointer"
								src={category.image}
								alt={category.name}
								loading="lazy"
							/>
							<span className="text-black text-sm mt-1.5">{category.name}</span>
						</div>
					</SplideSlide>
				);
			})}
		</Splide>
	);
};

export default SliderSlides;
