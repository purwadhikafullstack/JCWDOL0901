import React from "react";

const HeaderContent = () => {
	return (
		<>
			<span className="col-span-1 material-symbols-rounded">pin_drop</span>
			<span className="col-span-4 text-left">Address:</span>
			<span className="col-start-7 underline cursor-pointer mr-2">
				<span className="text-sm">Edit </span>
				<span className="material-symbols-rounded text-sm underline"> edit</span>
			</span>
		</>
	);
};

export default HeaderContent;
