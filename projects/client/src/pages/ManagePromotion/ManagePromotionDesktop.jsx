import React from "react";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import PromoTableGroup from "../../components/ProductPromo/PromoTableGroup";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import SideBarDesktop from "../../components/SideBar/SideBarDesktop.jsx";
const Layout = () => {
	return (
		<div className="flex flex-col h-screen z-10 px-12">
			<BackButton url="/admin/dashboard" color="text-green-100" />
			<CompanyLogo color={true} className="w-[100px] mx-auto mb-2" />
			<PageTitle title="Manage Inventory Promotion" color="text-green-400" />
			<PromoTableGroup />
		</div>
	);
};

const ManagePromotionDesktop = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] min-h-screen overflow-y-scroll overflow-hidden bg-white z-10">
			<SideBarDesktop>
				<Layout />
			</SideBarDesktop>
		</div>
	);
};

export default ManagePromotionDesktop;
