import React from "react";
import UserLoginIllustration from "../../components/UserLogin/UserLoginIllustration";
import BackButton from "../../components/BackButton";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import CompanyLogo from "../../components/CompanyLogo";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";

const Illustration = () => {
	return (
		<>
			<div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
				<div className="mt-28 mr-auto ml-6 text-3xl font-semibold">User Login</div>
				<UserLoginIllustration className="h-[190px] mr-20 mb-8 mt-2" />
			</div>
			<div className="hidden h-full mx-12 shrink-0 sm:flex sm:flex-col sm:justify-center">
				<div className="mb-4 text-green-100 text-3xl font-light">User Login</div>
				<UserLoginIllustration className="h-[350px] min-h-[350px] mx-28 mb-28 mt-5" />
			</div>
		</>
	);
};

function UserLoginPage() {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-500 sm:h-inherit sm:rounded-xl sm:p-6 sm:rounded-tr-none sm:rounded-br-none">
				<BackButton url="/" color="text-green-100" />
				<Illustration />
			</div>
			<UserLoginForm />
		</div>
	);
}

export default UserLoginPage;
