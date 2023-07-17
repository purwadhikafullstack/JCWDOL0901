import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import queryString from "query-string";

const MobileSlides = ({ categories, setPage }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const location = useLocation();
	const parsed = queryString.parse(location.search);
	const { category_id } = parsed;

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
				const params = { category_id: category.id, branch_id: user?.branch?.id };
				const isFocus = category_id == category.id;
				return (
					<SplideSlide key={index}>
						<div className="flex flex-col items-center mx-2 pb-2">
							<button className={`rounded-2xl mt-1 ${isFocus ? "ring ring-green-200" : ""}`}>
								<img
									className="w-[75px] cursor-pointer rounded-2xl"
									src={category.image}
									alt={category.name}
									loading="lazy"
									onClick={() => {
										setPage(1);
										navigate({
											pathname: "/products",
											search: `?${createSearchParams(params)}`,
										});
									}}
								/>
							</button>
							<span className={`text-black text-sm mt-1.5 ${isFocus ? "text-green-400" : ""}`}>
								{category.name}
							</span>
							{/* <div className="hidden w-16 rounded-lg h-2.5 bg-green-200 absolute -bottom-1 peer-focus:block"></div> */}
							{isFocus ? (
								<div className="w-16 rounded-lg h-2.5 bg-green-200 absolute -bottom-1"></div>
							) : null}
						</div>
					</SplideSlide>
				);
			})}
		</Splide>
	);
};

const DesktopSlides = ({ categories, setPage }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const location = useLocation();
	const parsed = queryString.parse(location.search);
	const { category_id } = parsed;
	const itemPerPage =
		window.innerWidth > 1280
			? 10
			: window.innerWidth > 1024
			? 8
			: window.innerWidth > 768
			? 6
			: window.innerWidth > 640
			? 5
			: 4;
	return (
		<Splide
			options={{
				perPage: itemPerPage,
				padding: 5,
				pagination: false,
				arrows: true,
			}}
		>
			{categories.map((category, index) => {
				const params = { category_id: category.id, branch_id: user?.branch?.id };
				const isFocus = category_id == category.id;
				return (
					<SplideSlide key={index}>
						<div className="flex flex-col items-center mx-2 pb-2 sm:pb-3 sm:pt-8">
							<button className={`rounded-2xl mt-1 ${isFocus ? "ring ring-green-200" : ""}`}>
								<img
									className="w-[100px] cursor-pointer rounded-2xl"
									src={category.image}
									alt={category.name}
									loading="lazy"
									onClick={() => {
										setPage(1);
										navigate({
											pathname: "/products",
											search: `?${createSearchParams(params)}`,
										});
									}}
								/>
							</button>
							<span className={`text-black text-sm mt-1.5 ${isFocus ? "text-green-400" : ""}`}>
								{category.name}
							</span>
							{/* <div className="hidden w-16 rounded-lg h-2.5 bg-green-200 absolute -bottom-1 peer-focus:block"></div> */}
							{isFocus ? (
								<div className="w-16 rounded-lg h-2.5 bg-green-200 absolute -bottom-1"></div>
							) : null}
						</div>
					</SplideSlide>
				);
			})}
		</Splide>
	);
};

const SliderSlides = ({ categories, setPage }) => {
	return (
		<>
			<div className="block sm:hidden">
				<MobileSlides categories={categories} setPage={setPage} />
			</div>
			<div className="hidden sm:block sm:mt-0">
				<DesktopSlides categories={categories} setPage={setPage} />
			</div>
		</>
	);
};

export default SliderSlides;
