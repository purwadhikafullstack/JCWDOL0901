import React from "react";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import BackButton from "../../components/BackButton.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import CreateProductPromoForm from "../../components/CreateProductPromo/CreateProductPromoForm.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block sm:hidden z-40">
				<CompanyLogo color={false} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden sm:block">
				<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};
const CreatePromotion = () => {
	return (
		<div className="flex flex-col mx-auto flex-1  min-h-screen overflow-y-scroll overflow-hidden bg-white z-10">
			<CircularBackgroundDecoration />
			<SideBar>
				<div className="flex flex-col min-w-[480px] min-h-screen z-10">
					<BackButton color="block text-green-100 sm:hidden" url={-1} />
					<ResponsiveLogo />
					<PageTitle
						title="Create Inventory Promotion"
						color="text-green-100 sm:text-green-400 z-50"
					/>
					<div className="my-auto sm:px-8">
						<CreateProductPromoForm />
					</div>
				</div>
			</SideBar>
		</div>
	);
};

export default CreatePromotion;
