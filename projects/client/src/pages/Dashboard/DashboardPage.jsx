import React from "react";
import DashboardMobile from "./DashboardMobile.jsx";
import DashboardDesktop from "./DashboardDesktop.jsx";
import { useSelector } from "react-redux";

const CreateBranchAdminPage = () => {
	const mobileView = useSelector(state => state.app.mobileView);
	return <div>{mobileView ? <DashboardMobile /> : <DashboardDesktop />}</div>;
};

export default CreateBranchAdminPage;
