import React from "react";

const AddressDropDown = () => {
	return (
		<div className="text-green-100 flex flex-row items-center">
			<div className="font-medium underline underline-offset-4 decoration-dotted">
				Home (main)
			</div>
			<span className="ml-1 material-symbols-rounded font-bold text-3xl cursor-pointer">
				expand_more
			</span>
		</div>
	);
};

export default AddressDropDown;
