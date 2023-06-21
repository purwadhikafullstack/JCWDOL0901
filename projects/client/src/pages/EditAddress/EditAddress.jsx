import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import EditAddressForm from "../../components/ManageAddress/EditAddressForm.jsx";
import { useLocation } from "react-router-dom";

const Illustration = () => {
	return (
		<div className="my-auto mx-12 flex flex-row sm:flex-col items-center">
			<div className="mb-10 text-green-100 text-2xl sm:text-3xl font-medium text-left sm:text-center sm:mt-24">
				Edit Address
			</div>
			<img
				className="w-[200px] sm:w-[250px] pb-12 mx-auto"
				src="/assets/images/address_illustration.png"
				alt="create branch admin illustration"
			/>
		</div>
	);
};

const EditAddress = () => {
	const address = useLocation().state;
	return (
		<div className="bg-green-100 flex items-center justify-center h-screen">
			<div className="flex flex-col sm:flex-row bg-white rounded-lg h-full sm:h-auto">
				<div className="sm:bg-green-200 z-10 rounded-t-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-l-lg bg-green-200">
					<BackButton url="/account/manage-address" color="text-green-100" />
					<Illustration />
				</div>
				<div className="bg-white rounded-r-lg h-full">
					<div className="flex justify-center">
						<CompanyLogo color="true" className="mt-8 w-[50px] cursor-pointer hidden sm:block" />
					</div>
					<EditAddressForm address={address} />
				</div>
			</div>
		</div>
	);
};

export default EditAddress;
