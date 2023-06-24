/* This example requires Tailwind CSS v2.0+ */
import { LocationMarkerIcon, PencilIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AddressItem = ({ address }) => {
	const navigate = useNavigate();
	return (
		<li key={address.label}>
			<button
				className="block hover:bg-gray-100 w-full"
				onClick={() => navigate("/account/edit-address", { state: address })}
			>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<LocationMarkerIcon className="text-gray-300 mx-3 flex-shrink-0 h-6 w-6" />
						</div>
						<div className="flex flex-col w-full pr-10">
							<p className="mx-6 font-bold text-gray-500 truncate text-left">
								{address.label}
								{address.is_default ? (
									<span className="font-medium text-red text-xs ml-2">*Default Address</span>
								) : null}
							</p>
							<p className="mx-6 text-sm text-gray-300 truncate text-left mt-2">{address.detail}</p>
						</div>
					</div>
					<PencilIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
				</div>
			</button>
		</li>
	);
};

const getAddresses = (token) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/address/list`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export default function AddressList() {
	const [addresses, setAddresses] = useState([]);
	useEffect(() => {
		getAddresses(localStorage.getItem("token"))
			.then((result) => {
				setAddresses(result.data);
			})
			.catch((error) => alert("Server Unavailable"));
	}, []);
	console.log(addresses);

	return (
		<div className="my-6 sm:mx-2">
			<div className="bg-white shadow overflow-hidden sm:rounded-md mb-6">
				<ul className="divide-y divide-gray-100">
					{addresses.map((address) => (
						<AddressItem address={address} />
					))}
				</ul>
			</div>
		</div>
	);
}
