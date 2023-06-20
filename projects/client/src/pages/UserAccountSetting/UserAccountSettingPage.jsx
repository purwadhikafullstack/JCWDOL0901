import React from "react";
import BackButton from "../../components/BackButton";
import UserAccountSettingForm from "../../components/UserAccountSetting/UserAccountSettingForm";

const Illustration = () => {
	return (
		<>
			<div className="bg-green-200 block text-white flex flex-row justify-center items-center z-10 sm:hidden">
				<div className="my-3 mr-auto ml-6 text-3xl font-semibold">Profile</div>
			</div>

			<div className="hidden my-8 mx-20 shrink-0 sm:flex sm:flex-col sm:justify-center">
				<div className="mb-4 text-green-100 text-3xl font-light">Profile</div>
			</div>
		</>
	);
};

function UserAccountSettingPage() {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-20 sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 sm:h-inherit sm:rounded-xl sm:p-6">
				<BackButton url="/" color="text-green-100" />
				<Illustration />
			</div>
			<UserAccountSettingForm />
		</div>
	);
}

export default UserAccountSettingPage;
