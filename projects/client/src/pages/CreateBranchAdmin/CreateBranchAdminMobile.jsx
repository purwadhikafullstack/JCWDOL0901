import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CreateBranchAdminIllustration from "../../components/CreateBranchAdmin/CreateBranchAdminIllustration.jsx";
import CreateBranchAdminForm from "../../components/CreateBranchAdmin/CreateBranchAdminForm";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";

const MobileIllustration = () => {
	return (
		<div className="text-white flex flex-row justify-center items-center z-10 mb-12">
			<div className="mt-10 mr-auto ml-6 text-3xl text-left font-semibold">
				Create <br /> Branch Admin
			</div>
			<CreateBranchAdminIllustration className="w-[135px] mr-auto ml-auto pr-4" />
		</div>
	);
};

const CreateBranchAdminMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/admin/dashboard" color="text-white" />
			<MobileIllustration />
			<CreateBranchAdminForm />
		</div>
	);
};

export default CreateBranchAdminMobile;
