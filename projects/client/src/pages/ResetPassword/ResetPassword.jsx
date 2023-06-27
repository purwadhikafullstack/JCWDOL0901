import React from "react";
import BackButton from "../../components/BackButton.jsx";
import ChangePasswordForm from "../../components/ChangePassword/ChangePasswordForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import ChangePasswordIllustration from "../../components/ChangePassword/ChangePasswordIllustration.jsx";

const ResetPassword = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 w-full bg-white sm:bg-green-100 md:flex-row sm:justify-center sm:py-20 sm:max-w-full sm:h-screen overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative pb-20 sm:flex sm:flex-col sm:bg-green-500 sm:h-inherit md:rounded-l-xl sm:p-6 sm:rounded-none">
				<BackButton url={-1} color="text-green-100" />
				<ChangePasswordIllustration />
			</div>
			<ChangePasswordForm />
		</div>
	);
};

export default ResetPassword;
