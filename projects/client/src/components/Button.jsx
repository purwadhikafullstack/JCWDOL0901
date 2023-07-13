import React from "react";

const Button = ({ name, type, onClickHandler = null, disabled, pending, children }) => {
	return (
		<button
			type={type}
			onClick={onClickHandler}
			className="flex items-center justify-center text-white bg-green-300 py-3 px-6 mt-8 drop-shadow-md rounded-lg font-medium w-full hover:bg-green-200 active:bg-green-500"
			disabled={disabled}
		>
			{children}
			<span className="flex items-center disabled:opacity-50">
				{pending && <span className="material-symbols-rounded animate-spin mr-2">progress_activity</span>}
				{name}
			</span>
		</button>
	);
};

export default Button;
