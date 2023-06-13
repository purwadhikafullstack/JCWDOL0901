import React from "react";
import BackButton from "../../components/BackButton.jsx";
import AdminLoginIllustration from "../../components/Login/AdminLoginIllustration";
import AdminLoginForm from "../../components/Login/AdminLoginForm";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";

const MobileIllustration = () => {
	return (
		<div className="text-white flex flex-row justify-center items-center z-10">
			<div className="mt-24 mr-auto ml-6 text-3xl font-semibold">Admin Login</div>
			<AdminLoginIllustration className="w-[250px] mr-auto ml-auto pr-4" />
		</div>
	);
};

function AdminLoginMobile() {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/" color="text-white" />
			<MobileIllustration />

			<AdminLoginForm />
		</div>
	);
}

export default AdminLoginMobile;
