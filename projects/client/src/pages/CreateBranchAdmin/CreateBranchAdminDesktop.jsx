import React from "react";
import BackButton from "../../components/BackButton";
import CreateBranchAdminForm from "../../components/CreateBranchAdmin/CreateBranchAdminForm";
import CompanyLogo from "../../components/CompanyLogo";
import CreateBranchAdminIllustration from "../../components/CreateBranchAdmin/CreateBranchAdminIllustration.jsx";
import SideBarDesktop from "../../components/SideBar/SideBarDesktop.jsx";

const DesktopIllustration = () => {
	return (
		<div className="my-auto mx-12">
			<div className="mb-10 text-green-100 text-3xl font-medium">Create Branch Admin</div>
			<CreateBranchAdminIllustration className="w-[200px] pb-12" />
		</div>
	);
};

const RegisterDesktop = () => {
	return (
		<SideBarDesktop>
			<div className="flex flex-col mx-auto my-auto flex-1 min-w-[480px] h-screen overflow-hidden bg-green-100">
				<div className="flex flex-row justify-around bg-white mx-auto my-auto rounded-lg w-fit shadow-lg">
					<div className="flex flex-col shrink-0 pt-8 min-w-[fit] content-center bg-green-200 rounded-l-lg">
						<BackButton url="/admin/dashboard" color="text-green-100" />
						<DesktopIllustration />
					</div>
					<div className="flex flex-col items-center shrink-0">
						<CompanyLogo color="true" className="mt-8 w-[75px] cursor-pointer" />
						<CreateBranchAdminForm />
					</div>
				</div>
			</div>
		</SideBarDesktop>
	);
};

export default RegisterDesktop;
