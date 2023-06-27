import React from "react";
import BackButton from "../../components/BackButton.jsx";
import ResetPasswordForm from "../../components/ResetPassword/ResetPasswordForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";

const ResetPasswordIllustration = () => {
	return (
		<>
			<div className="h-full mx-12 flex flex-row md:flex-col justify-center items-center gap-6">
				<div className="sm:mx-auto text-green-100 text-2xl sm:text-3xl font-semibold">Reset Password</div>
				<img
					className="w-[250px] mx-auto pr-4 sm:max-w-[400px] sm:w-[400px]"
					src="/assets/images/reset_password_illustration.png"
					alt="Reset Password"
				/>
			</div>
		</>
	);
};

const ResetPassword = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 w-full bg-white sm:bg-green-100 md:flex-row sm:justify-center sm:py-20 sm:max-w-full sm:h-screen overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative pb-20 sm:flex sm:flex-col sm:bg-green-500 sm:h-inherit md:rounded-l-xl sm:p-6 sm:rounded-none">
				<BackButton url={"/login"} color="text-green-100" />
				<ResetPasswordIllustration />
			</div>
			<ResetPasswordForm />
		</div>
	);
};

export default ResetPassword;
