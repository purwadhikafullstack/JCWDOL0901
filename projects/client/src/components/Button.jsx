import React from "react";

const Button = ({ name, type, onClickHandler = null, disabled }) => {
	return (
		<button
			type={type}
			onClick={onClickHandler}
			className="text-white bg-green-300 py-3 px-6 mt-8 drop-shadow-md rounded-lg font-medium w-full hover:bg-green-200 active:bg-green-500"
			disabled={disabled}
		>
			{name}
		</button>
	);
};

export default Button;
