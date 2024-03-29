import React from "react";
import PageTitle from "../../components/PageTitle";
import PromoTableGroup from "../../components/ProductPromo/PromoTableGroup";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import SideBar from "../../components/SideBar/SideBar";

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block z-40 mt-6 sm:hidden ">
				<CompanyLogo color={false} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden mt-6 sm:block">
				<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const ProductPromotion = () => {
	return (
		<div className="flex flex-col mx-auto pb-10 flex-1 overflow-hidden bg-white z-10 sm:w-full">
			<SideBar>
				<div className="flex flex-col bg-white min-h-screen">
					<div className="flex flex-col z-10">
						<CircularBackgroundDecoration />
						<ResponsiveLogo />
						<PageTitle
							title="Manage Inventory Promotion"
							className={"text-green-100 sm:text-green-400 z-10 mb-auto"}
						/>
						<PromoTableGroup />
					</div>
				</div>
			</SideBar>
		</div>
	);
};

export default ProductPromotion;
