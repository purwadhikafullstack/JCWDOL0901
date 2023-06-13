import React from "react";
import CreateBranchAdminIllustration from "../../components/CreateBranchAdmin/CreateBranchAdminIllustration.jsx";
import BackButton from "../../components/BackButton.jsx";
import CreateBranchAdminForm from "../../components/CreateBranchAdmin/CreateBranchAdminForm";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import CompanyLogo from "../../components/CompanyLogo";

const Illustration = () => {
	return (
		<div className="my-auto mx-12 flex flex-row sm:flex-col items-center">
			<div className="mb-10 text-green-100 text-2xl sm:text-3xl font-medium text-left sm:text-center">
				Create Branch Admin
			</div>
			<CreateBranchAdminIllustration className="w-[100px] sm:w-[200px] pb-12 mx-auto" />
		</div>
	);
};

const CreateBranchAdminPage = () => {
	return (
		<div className="bg-green-100 flex items-center justify-center h-screen">
			<div className="flex flex-col sm:flex-row bg-white rounded-lg h-screen sm:h-auto">
				<div className="sm:bg-green-200 z-10 sm:rounded-l-lg bg-green-200">
					<BackButton url="/admin/dashboard" color="text-green-100" />
					<Illustration />
				</div>
				<div className="bg-white rounded-r-lg">
					<div className="flex justify-center py-4">
						<CompanyLogo color="true" className="mt-8 w-[75px] cursor-pointer hidden sm:block" />
					</div>
					<CreateBranchAdminForm />
				</div>
			</div>
		</div>
	);
};

export default CreateBranchAdminPage;
