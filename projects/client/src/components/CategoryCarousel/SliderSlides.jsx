import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";

const SliderSlides = ({ categories }) => {
	const app = useSelector(state => state.app);
	return (
		<Splide
			options={{ perPage: app.mobileView ? 4.5 : 10, padding: 5, pagination: false, arrows: false }}
		>
			{categories.map((category, index) => {
				return (
					<SplideSlide key={index}>
						<div className="flex flex-col items-center">
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
