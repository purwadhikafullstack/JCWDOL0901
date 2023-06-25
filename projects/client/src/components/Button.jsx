import React from "react";

const Button = ({ name, type, onClickHandler = null, disabled, children }) => {
	return (
		<button
			type={type}
			onClick={onClickHandler}
			className="flex items-center justify-center text-white bg-green-300 py-3 px-6 mt-8 drop-shadow-md rounded-lg font-medium w-full hover:bg-green-200 active:bg-green-500"
			disabled={disabled}
		>
			{children}
			<span>{name}</span>
		</button>
	);
};

export default Button;
