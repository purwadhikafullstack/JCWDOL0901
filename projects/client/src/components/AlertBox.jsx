import React from "react";

const AlertBox = ({ children }) => {
	return (
		<div className="bg-[#f87171] text-green-100 px-4 py-4 rounded-lg min-w-[65%]">
			{children}
		</div>
	);
};

export default AlertBox;
