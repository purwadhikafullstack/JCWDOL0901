import React from "react";

const SuccessBox = ({ children }) => {
	return (
		<div className="bg-green-100 text-green-500 px-4 py-4 rounded-lg min-w-[65%]">
			{children}
		</div>
	);
};

export default SuccessBox;
