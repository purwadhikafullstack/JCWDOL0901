import React from "react";
import { getDefaultAddress } from "../handlers/checkoutHandler";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../../redux/reducers/checkout/checkoutAction.js";

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
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (checkout.address?.City?.id) {
			setUserAddress(checkout.address);
		} else {
			getDefaultAddress()
				.then((result) => {
					dispatch(setAddress(result.data));
					setUserAddress(result.data);
				})
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
