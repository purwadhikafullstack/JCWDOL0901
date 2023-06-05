import React from "react";

const InputLabel = ({ name, required }) => {
	return (
		<label
			htmlFor={`${name}`}
			className="block ml-1 mb-1 text-sm font-normal text-black dark:text-white mr-auto"
		>
			{name}
			{required && <span className="text-red font-bold">*</span>}
		</label>
	);
};

export default InputLabel;
