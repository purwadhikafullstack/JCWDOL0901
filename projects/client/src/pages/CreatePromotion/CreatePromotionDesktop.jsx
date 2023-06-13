import React from "react";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import BackButton from "../../components/BackButton.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import CreateProductPromoForm from "../../components/CreateProductPromo/CreateProductPromoForm.jsx";
import SideBarDesktop from "../../components/SideBar/SideBarDesktop.jsx";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen z-10">
			<BackButton color="text-green-100" url={-1} />
			<CompanyLogo color={true} className="w-[100px] mx-auto mb-2" />
			<PageTitle title="Create Inventory Promotion" color="text-green-400" />
			<div className="my-auto">
				<CreateProductPromoForm />
			</div>
		</div>
	);
};

const CreatePromotionDesktop = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] min-h-screen overflow-y-scroll overflow-hidden bg-white z-10">
			<SideBarDesktop>
				<Layout />
			</SideBarDesktop>
		</div>
	);
};

export default CreatePromotionDesktop;
