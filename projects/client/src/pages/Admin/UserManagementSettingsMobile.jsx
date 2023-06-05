import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CreateBranchAdminIllustration from "../../components/UserManagementSetting/CreateBranchAdminIllustration.jsx";
import CreateBranchAdminForm from "../../components/UserManagementSetting/CreateBranchAdminForm.jsx";

const UserManagementSettingsMobile = () => {
	return (
		<div className="flex flex-col mx-auto w-[480px] h-screen bg-green-200">
			<BackButton pageName="Dashboard" url="/" />
			<CreateBranchAdminIllustration />
			<CreateBranchAdminForm />
		</div>
	);
};

export default UserManagementSettingsMobile;
