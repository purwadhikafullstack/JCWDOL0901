import React from "react";

const SearchBar = () => {
	return (
		<div className="z-10 relative w-full">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<span className="material-icons-outlined text-gray-200">search</span>
			</div>
			<input
				className="pl-12 bg-gray-100 text-gray-500 placeholder-gray-200 focus:bg-white w-full mx-auto my-4 py-2.5 px-3 rounded-xl z-10 outline-0"
				placeholder="Search for product name..."
				type="text"
			/>
		</div>
	);
};

export default SearchBar;
