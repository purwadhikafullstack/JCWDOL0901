import React from "react";
import { getDefaultAddress } from "../handlers/checkoutHandler";

const AddressBoxDetail = () => {
	const [address, setAddress] = React.useState(undefined);

	React.useEffect(() => {
		getDefaultAddress()
			.then((result) => setAddress(result.data))
			.catch((error) => setAddress({ id: 0, name: "Server Error!" }));
	}, []);

	return (
		<div className="flex flex-col py-3 px-5 ">
			<span className="font-semibold text-lg text-left">{address?.label}</span>
			<span className="text-left mt-2 mb-1">{address?.address}</span>
			<span className="text-left uppercase font-light">
				{address?.City?.type} {address?.City?.name}, {address?.City?.Province?.name}
			</span>
		</div>
	);
};

export default AddressBoxDetail;
