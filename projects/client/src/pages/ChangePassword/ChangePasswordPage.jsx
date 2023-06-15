import React from "react";
import BackButton from "../../components/BackButton.jsx";
import RegisterForm from "../../components/Register/RegisterForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import ChangePasswordIllustration from "../../components/ChangePassword/ChangePasswordIllustration.jsx";

const ChangePasswordPage = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-20 sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 sm:h-inherit sm:rounded-xl sm:p-6">
				<BackButton url={-1} color="text-green-100" />
				<ChangePasswordIllustration />
			</div>
			<RegisterForm />
		</div>
	);
};

export default ChangePasswordPage;
