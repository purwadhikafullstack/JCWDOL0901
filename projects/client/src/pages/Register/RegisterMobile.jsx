import React from "react";
import BackButton from "../../components/BackButton.jsx";
import RegisterIllustration from "../../components/Register/RegisterIllustration.jsx";
import RegisterForm from "../../components/Register/RegisterForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";

const RegisterMobile = () => {
	return (
		<div className="flex flex-col mx-auto w-[480px] h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/" />
			<RegisterIllustration />
			<RegisterForm />
		</div>
	);
};

export default RegisterMobile;
