import React from "react";
import BackButton from "../../components/BackButton.jsx";
import RegisterIllustration from "../../components/Register/RegisterIllustration.jsx";
import RegisterForm from "../../components/Register/RegisterForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";

const MobileIllustration = () => {
	return (
		<div className="text-white flex flex-row justify-center items-center z-10 mb-12">
			<div className="mt-28 mr-auto ml-6 text-3xl font-semibold">Register</div>
			<RegisterIllustration className="w-[135px] mr-auto ml-auto pr-4" />
		</div>
	);
};

const RegisterMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/" color="text-white" />
			<MobileIllustration />
			<RegisterForm />
		</div>
	);
};

export default RegisterMobile;
