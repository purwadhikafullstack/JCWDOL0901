import React from "react";
import BackButton from "../../components/BackButton";
import RegisterForm from "../../components/Register/RegisterForm";
import CompanyLogo from "../../components/CompanyLogo";
import RegisterIllustration from "../../components/Register/RegisterIllustration";

const DesktopIllustration = () => {
	return (
		<div className="my-auto mx-12">
			<div className="mb-4 text-green-200 text-3xl font-light">
				Create an account.
			</div>
			<RegisterIllustration className="w-[400px] pb-12" />
		</div>
	);
};

const RegisterDesktop = () => {
	return (
		<div className="flex flex-col mx-auto my-auto flex-1 min-w-[480px] min-h-screen overflow-hidden bg-green-300">
			<div className="flex flex-row shrink-0 justify-around bg-white mx-auto my-auto rounded-lg min-w-fit shadow-lg">
				<div className="flex flex-col shrink-0 pt-8 content-start min-w-[fit] content-center">
					<BackButton url="/" color="text-green-400" />
					<DesktopIllustration />
				</div>
				<div className="flex flex-col items-center shrink-0">
					<CompanyLogo color="true" className="mt-8 w-[75px] cursor-pointer" />
					<RegisterForm />
				</div>
			</div>
		</div>
	);
};

export default RegisterDesktop;
