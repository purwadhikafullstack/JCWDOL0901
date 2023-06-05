import React from "react";

const InputLabel = ({ formName, required }) => {
	return (
		<label
			for={`${formName}`}
			className="block ml-1 mb-1 text-sm font-normal text-black dark:text-white mr-auto"
		>
			{formName}
			{required && <span className="text-red font-bold">*</span>}
		</label>
	);
};

export default InputLabel;
