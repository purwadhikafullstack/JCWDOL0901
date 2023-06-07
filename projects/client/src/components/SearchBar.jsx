import React from "react";
import InputBox from "./InputGroup/InputBox";

const SearchBar = () => {
	return (
		<div className="z-10">
			<input
				className="bg-gray-100 text-gray-500 placeholder-gray-200 focus:bg-white w-full mx-auto my-4 py-2.5 px-3 rounded-xl z-10 outline-0"
				placeholder="Search for product lorem ipsum dolor sit amet longer than you can think"
				type="text"
			/>
		</div>
	);
};

export default SearchBar;
