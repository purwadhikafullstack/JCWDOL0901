import React from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const SearchBar = ({ setFilter, className }) => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const location = useLocation();
	const parsed = queryString.parse(location.search);
	const { filter } = parsed;

	return (
		<div className={`z-10 relative w-full sm:mx-4 md:mx-10 lg:mx-20 xl:mx-auto xl:max-w-3xl ${className}`}>
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<span className="material-symbols-rounded text-gray-200">search</span>
			</div>
			<input
				className="pl-12 bg-gray-100 text-gray-500 placeholder-gray-200 sm:focus:bg-white w-full mx-auto my-4 py-2 px-3 rounded-xl z-10 outline-0 border-gray-200"
				placeholder="Search for product name..."
				type="text"
				defaultValue={filter}
				// onKeyDown={(event) => (event.key === "Enter" ? setFilter(event.target.value) : null)}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						navigate({
							pathname: "/products",
							search: `?${createSearchParams({
								category_id: "",
								branch_id: user?.branch?.id,
								filter: event.target.value,
							})}`,
						});
					}
				}}
			/>
		</div>
	);
};

export default SearchBar;
