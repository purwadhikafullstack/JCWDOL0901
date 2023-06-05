import React from "react";

const inputHandler = (setInput, event) =>
	setInput(previousInput => ({
		...previousInput,
		[event.target.name]: event.target.value,
	}));

const InputBox = ({ name, type, required, inputKey, setInput }) => {
	return (
		<div className="relative">
			<input
				type={type}
				name={inputKey}
				id={name}
				required={required}
				placeholder={name}
				onChange={event => inputHandler(setInput, event)}
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
			/>
		</div>
	);
};

export default InputBox;
