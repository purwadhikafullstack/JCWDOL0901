import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./AddressBox/HeaderContent";
import AddressBoxDetail from "./AddressBox/AddressBoxDetail";

const AddressBox = () => {
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			<AddressBoxDetail />
		</>
	);
};

export default AddressBox;
