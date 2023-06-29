import React from "react";
import BackButton from "../../components/BackButton.jsx";
import ForgotPasswordForm from "../../components/ForgotPassword/ForgotPasswordForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";

const ForgotPasswordIllustration = () => {
	return (
		<>
			<div className="h-full mx-12 flex flex-row md:flex-col justify-center items-center gap-6">
				<div className="sm:mx-auto text-green-100 text-2xl sm:text-3xl font-semibold">Forgot Password?</div>
				<img
					className="w-[200px] mx-auto pr-4 sm:max-w-[300px] sm:w-[400px]"
					src="/assets/images/forget_password_illustration.png"
					alt="Forgot Password"
				/>
			</div>
		</>
	);
};

const ForgotPassword = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 w-full bg-white sm:bg-green-100 md:flex-row sm:justify-center sm:py-20 sm:max-w-full h-screen overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative pb-20 sm:flex sm:flex-col sm:bg-green-500 sm:h-inherit md:rounded-l-xl sm:p-6 sm:rounded-none">
				<BackButton url={-1} color="text-green-100" />
				<ForgotPasswordIllustration />
			</div>
			<ForgotPasswordForm />
		</div>
	);
};

export default ForgotPassword;
