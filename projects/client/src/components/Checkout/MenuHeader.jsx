import React from "react";

const MenuHeader = ({ Content }) => {
	return (
		<div className="grid grid-cols-7 gap-2 bg-green-200 text-green-100 py-2 font-medium">
			<Content />
		</div>
	);
};

export default MenuHeader;
