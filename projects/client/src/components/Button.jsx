import React from "react";

const Button = ({ name, type, onClickHandler = null, disabled }) => {
	return (
		<button
			type={type}
			onClick={onClickHandler}
			disabled={disabled}
			className="text-white bg-green-300 py-3 px-6 mt-8 drop-shadow-md rounded-lg font-medium w-full"
		>
			{name}
		</button>
	);
};

export default Button;
