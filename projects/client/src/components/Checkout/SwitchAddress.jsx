import React from "react";
import BackButton from "../BackButton.jsx";
import Addresses from "./SwitchAddress/Addresses.jsx";
import { useNavigate } from "react-router-dom";
import ContinueButton from "../ContinueButton.jsx";

const CreateButton = () => {
	const navigate = useNavigate();
	return (
		<div className="pt-10 w-fit mx-auto">
			<button
				className="rounded-lg font-bold h-fit bg-green-500 text-green-100 w-full sm:w-fit px-20 py-2 mx-auto mb-6"
				onClick={() => navigate("/account/create-new-address")}
			>
				Add New Address
			</button>
		</div>
	);
};

const SwitchAddress = () => {
	const navigate = useNavigate();
	return (
		<div className="sm:p-20 min-h-screen bg-green-100 items-center justify-center">
			<div className="flex flex-col min-h-screen bg-white max-w-7xl rounded-xl shadow-lg mx-auto sm:min-h-0 sm:p-5">
				<BackButton color="text-green-400" url="/cart/checkout" />
				<Addresses />
				<CreateButton />
				<ContinueButton />
			</div>
		</div>
	);
};

export default SwitchAddress;
