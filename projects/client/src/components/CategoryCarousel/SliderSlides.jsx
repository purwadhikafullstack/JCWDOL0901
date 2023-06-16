import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const MobileSlides = ({ categories }) => {
	return (
		<Splide
			options={{
				perPage: 4,
				padding: 5,
				pagination: false,
				arrows: false,
			}}
		>
			{categories.map((category, index) => {
				return (
					<SplideSlide key={index}>
						<div className="flex flex-col items-center mx-2">
							<img
								className="w-[75px] cursor-pointer"
								src={process.env.REACT_APP_IMAGE_BASE_URL + category.image}
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

const DesktopSlides = ({ categories }) => {
	return (
		<Splide
			options={{
				perPage: 8,
				padding: 5,
				pagination: false,
				arrows: false,
			}}
		>
			{categories.map((category, index) => {
				return (
					<SplideSlide key={index}>
						<div className="flex flex-col items-center mx-2">
							<img
								className="w-[125px] cursor-pointer"
								src={process.env.REACT_APP_IMAGE_BASE_URL + category.image}
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

const SliderSlides = ({ categories }) => {
	return (
		<>
			<div className="block sm:hidden">
				<MobileSlides categories={categories} />
			</div>
			<div className="hidden sm:block sm:flex sm:shrink-0 sm:my-12">
				<DesktopSlides categories={categories} />
			</div>
		</>
	);
};

export default SliderSlides;
