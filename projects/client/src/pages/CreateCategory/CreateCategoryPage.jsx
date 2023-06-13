import React from "react";
import CreateCategoryMobile from "./CreateCategoryMobile.jsx";
import CreateCategoryDesktop from "./CreateCategoryDesktop.jsx";
import { useSelector } from "react-redux";

const CreateCategoryPage = () => {
	const mobileView = useSelector(state => state.app.mobileView);
	return <div>{mobileView ? <CreateCategoryMobile /> : <CreateCategoryDesktop />}</div>;
};

export default CreateCategoryPage;
