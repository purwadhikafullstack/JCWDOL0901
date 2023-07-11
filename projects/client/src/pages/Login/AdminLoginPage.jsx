import React from "react";
import AdminLoginIllustration from "../../components/Login/AdminLoginIllustration";
import AdminLoginForm from "../../components/Login/AdminLoginForm";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import Notification from "../../components/Notification";
import { useLocation } from "react-router-dom";

const Illustration = () => {
	return (
		<>
			<div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
				<div className="mt-28 mr-auto ml-6 text-3xl font-semibold">Admin Login</div>
				<AdminLoginIllustration className="w-[250px] mr-auto ml-auto pr-4 mb-1 mt-10" />
			</div>

			<div className="hidden h-full mx-12 shrink-0 sm:flex sm:flex-col sm:justify-center">
				<div className="mb-4 text-green-100 text-3xl font-light">Admin Login</div>
				<AdminLoginIllustration className="min-w-[400px] w-[400px]" />
			</div>
		</>
	);
};

function AdminLoginPage() {
	const authGuard = useLocation()?.state?.authGuard;

	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-20 sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-500 sm:h-inherit sm:rounded-xl sm:p-6">
				<Illustration />
			</div>
			<AdminLoginForm />
			{authGuard ? <Notification /> : null}
		</div>
	);
}

export default AdminLoginPage;
