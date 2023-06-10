import React from "react";
import CreateBranchAdminMobile from "./CreateBranchAdminMobile.jsx";
import CreateBranchAdminDesktop from "./CreateBranchAdminDesktop.jsx";
import { useSelector } from "react-redux";

const CreateBranchAdminPage = () => {
	const mobileView = useSelector(state => state.app.mobileView);
	return <div>{mobileView ? <CreateBranchAdminMobile /> : <CreateBranchAdminDesktop />}</div>;
};

export default CreateBranchAdminPage;
