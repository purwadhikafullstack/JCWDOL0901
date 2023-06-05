import React from "react";

const InputBox = ({ formName, formType, required }) => {
	return (
		<div class="relative">
			<input
				type={formType}
				name={formName.toLowerCase()}
				id={formName}
				required={required}
				placeholder={formName}
				// onChange={onChangeHandler}
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
			/>
		</div>
	);
};

export default InputBox;