import React from "react";
import { getDefaultAddress } from "../handlers/checkoutHandler";
import { useSelector } from "react-redux";

const Detail = ({ address }) => {
	return (
		<div className="flex flex-col py-3 px-5 ">
			<span className="font-semibold text-lg text-left">{address?.label}</span>
			<span className="text-left mt-2 mb-1">{address?.detail}</span>
			<span className="text-left uppercase font-light">
				{address?.City?.type} {address?.City?.name}, {address?.City?.Province?.name}
			</span>
		</div>
	);
};

const AddressBoxDetail = () => {
	const [userAddress, setUserAddress] = React.useState(undefined);
	const checkout = useSelector((state) => state.checkout);

	React.useEffect(() => {
		if (checkout.address.id) {
			setUserAddress(checkout.address);
		} else {
			getDefaultAddress()
				.then((result) => setUserAddress(result.data))
				.catch((error) => setUserAddress({ id: null, name: "Server Error!" }));
		}
	}, [checkout.address.id]);

	return userAddress?.id ? (
		<Detail address={userAddress} />
	) : (
		<div className="flex flex-col py-3 px-5">No Address Found</div>
	);
};

export default AddressBoxDetail;
