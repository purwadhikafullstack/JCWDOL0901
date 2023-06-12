import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CategoryIllustration from "../../components/Category/CategoryIllustration.jsx";
import CategoryForm from "../../components/Category/CreateCategoryForm.jsx";
import SideBarDesktop from "../../components/SideBar/SideBarDesktop.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";

const DesktopIllustration = () => {
	return (
		<div className="my-auto mx-12 flex flex-row lg:flex-col items-center">
			<div className="mb-10 text-green-100 text-xl lg:text-3xl font-medium">Create Category</div>
			<CategoryIllustration className="w-[50px] lg:w-[200px] pb-12 mx-auto" />
		</div>
	);
};

const CreateCategoryDesktop = () => {
	return (
		<SideBarDesktop>
			<div className="flex flex-col mx-auto my-auto flex-1 min-w-[480px] h-screen overflow-hidden bg-green-100">
				<div className="flex flex-col lg:flex-row justify-around bg-white mx-auto my-auto rounded-lg w-fit shadow-lg">
					<div className="flex flex-col shrink-0 pt-8 min-w-[fit] content-center bg-green-400 rounded-l-lg">
						<BackButton url="/admin/dashboard" color="text-green-100" />
						<DesktopIllustration />
					</div>
					<div className="flex flex-col items-center shrink-0">
						<CompanyLogo color="true" className="mt-8 w-[75px] cursor-pointer" />
						<CategoryForm />
					</div>
				</div>
			</div>
		</SideBarDesktop>
	);
};

export default CreateCategoryDesktop;
