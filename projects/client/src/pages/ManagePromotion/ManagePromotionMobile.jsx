import React from "react";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import PromoTableGroup from "../../components/ProductPromo/PromoTableGroup";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";

const Layout = () => {
	return (
		<div className="flex flex-col h-screen z-10">
			<BackButton url="/admin/dashboard" color="text-green-100" />
			<CompanyLogo color={false} className="w-[100px] mx-auto mb-2" />
			<PageTitle title="Manage Inventory Promotion" />
			<PromoTableGroup />
		</div>
	);
};

const ManagePromotionMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-y-scroll overflow-hidden bg-white z-10">
			<CircularBackgroundDecoration />
			<Layout />
		</div>
	);
};

export default ManagePromotionMobile;
