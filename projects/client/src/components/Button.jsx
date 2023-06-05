import React from "react";

const Button = ({ name }) => {
	return (
		<button
			type="button"
			className="text-green-100 bg-green-300 py-3 px-6 mt-8 rounded-lg font-medium w-full"
		>
			{name}
		</button>
	);
};

export default Button;
