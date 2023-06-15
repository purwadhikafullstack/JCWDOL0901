import React from "react";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import PromoTableGroup from "../../components/ProductPromo/PromoTableGroup";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import SideBar from "../../components/SideBar/SideBar";

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

const ProductPromotion = () => {
	return (
		<div className="flex flex-col mx-auto pb-10 flex-1 min-w-[480px] overflow-hidden bg-white z-10 sm:w-full">
			<SideBar>
				<div className="flex flex-col z-10">
					<CircularBackgroundDecoration />
					<BackButton url="/admin/dashboard" color="block text-green-100 z-50 sm:hidden" />
					<ResponsiveLogo />
					<PageTitle
						title="Manage Inventory Promotion"
						color={"text-green-100 sm:text-green-400 z-10"}
					/>
					<PromoTableGroup />
				</div>
			</SideBar>
		</div>
	);
};

export default ProductPromotion;
