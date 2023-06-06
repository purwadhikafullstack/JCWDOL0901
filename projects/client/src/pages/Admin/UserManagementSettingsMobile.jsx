import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CreateBranchAdminIllustration from "../../components/UserManagementSetting/CreateBranchAdminIllustration.jsx";
import CreateBranchAdminForm from "../../components/UserManagementSetting/CreateBranchAdminForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";

const UserManagementSettingsMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton pageName="Dashboard" url="/register" />
			<CreateBranchAdminIllustration />
			<CreateBranchAdminForm />
		</div>
	);
};

export default UserManagementSettingsMobile;
