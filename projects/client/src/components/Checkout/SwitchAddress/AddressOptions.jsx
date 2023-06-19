import React from "react";
import { setAddress } from "../../../redux/reducers/checkout/checkoutAction.js";

const AddressOptions = ({ addresses, dispatch, selected }) => {
	return addresses.map((address, index) => {
		return (
			<div key={index} className="flex flex-row items-center justify-between w-full px-10 border-b border-dotted">
				<div className="flex flex-col py-3">
					<span className="font-semibold text-lg text-left">{address.label}</span>
					<span className="text-left mt-2 mb-1">{address.detail}</span>
					<span className="text-left uppercase font-light">
						{address?.City?.type} {address?.City?.name}, {address?.City?.Province?.name}
					</span>
				</div>
				<input
					type="radio"
					name="select_address"
					onClick={() => dispatch(setAddress(address))}
					checked={selected === address.id || address.default}
				/>
			</div>
		);
	});
};

export default AddressOptions;
