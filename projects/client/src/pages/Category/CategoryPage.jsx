import React from "react";
import CategoryMobile from "./CategoryMobile.jsx";
import CategoryDesktop from "./CategoryDesktop.jsx";
import { useSelector } from "react-redux";

const CreateBranchAdminPage = () => {
	const mobileView = useSelector(state => state.app.mobileView);
	return <div>{mobileView ? <CategoryMobile /> : <CategoryDesktop />}</div>;
};

export default CreateBranchAdminPage;
