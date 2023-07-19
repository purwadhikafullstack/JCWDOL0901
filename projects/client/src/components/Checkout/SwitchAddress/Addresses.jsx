import React from "react";
import { getUserAddresses } from "../handlers/checkoutHandler";
import AddressOptions from "./AddressOptions";
import { useDispatch, useSelector } from "react-redux";

const Addresses = () => {
	const [addresses, setAddresses] = React.useState([]);
	const address = useSelector((state) => state.checkout.address);
	const dispatch = useDispatch();

	React.useEffect(() => {
		getUserAddresses()
			.then((result) => {
				setAddresses(result.data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return addresses.length ? (
		<AddressOptions addresses={addresses} dispatch={dispatch} selected={address.id} />
	) : (
		<div className="py-10">You don't have any address. Please add the new one.</div>
	);
};

export default Addresses;
