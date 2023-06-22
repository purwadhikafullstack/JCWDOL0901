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
<<<<<<< HEAD
=======
				console.log(result);
>>>>>>> development
				setAddresses(result.data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return addresses && <AddressOptions addresses={addresses} dispatch={dispatch} selected={address.id} />;
};

export default Addresses;
