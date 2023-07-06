import React from "react";

const SearchBar = ({ setFilter, className }) => {
	return (
		<div className={`z-10 relative w-full sm:mx-20 ${className}`}>
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<span className="material-symbols-rounded text-gray-200">search</span>
			</div>
			<input
				className="pl-12 bg-gray-100 text-gray-500 placeholder-gray-200 sm:focus:bg-white w-full mx-auto my-4 py-2 px-3 rounded-xl z-10 outline-0 border-gray-200"
				placeholder="Search for product name..."
				type="text"
				onChange={(event) => setFilter(event.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
