import React from "react";

const InputLabel = ({ name }) => {
	return (
		<label
			htmlFor={`${name}`}
			className="block ml-1 mb-1 text-sm font-normal text-black dark:text-white mr-auto select-none"
		>
			{name}
		</label>
	);
};

export default InputLabel;
