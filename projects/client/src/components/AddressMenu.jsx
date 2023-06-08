import React from "react";
import AddressDropDown from "./AddressMenu/AddressDropDown";

const AddressMenu = () => {
	return (
		<div className="flex flex-col items-end text-right">
			<div className="text-green-100 flex flex-row items-center">
				<span className="material-symbols-rounded font-thin text-lg">location_on</span>
				<div className="mx-1.5 font-light antialiased">Deliver to</div>
			</div>
			<AddressDropDown />
		</div>
	);
};

export default AddressMenu;
