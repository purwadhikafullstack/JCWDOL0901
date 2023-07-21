import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";
import PageTitle from "../../components/PageTitle";
import ProductSalesReportTableGroup from "../../components/SalesReport/ProductSalesReport/ProductSalesReportTableGroup";
import DisplayByConfiguration from "../../components/SalesReport/SearchConfiguration/DisplayByConfiguration";
import CompanyLogo from "../../components/CompanyLogo";
import TransactionSalesReportTableGroup from "../../components/SalesReport/TransactionSalesReport/TransactionSalesReportTableGroup";
import UserSalesReportTableGroup from "../../components/SalesReport/UserSalesReport/UserSalesReportTableGroup";

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block z-40 mt-6 sm:hidden">
				<CompanyLogo color={false} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden mt-6 sm:block">
				<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const SalesReport = () => {
	const [salesBy, setSalesBy] = useState({ id: "product", name: "Product" });

	return (
		<div className="flex flex-col mx-auto pb-10 flex-1 overflow-hidden bg-white z-10 sm:w-full">
			<SideBar>
				<div className="flex flex-col bg-white min-h-screen">
					<div className="flex flex-col z-10">
						<CircularBackgroundDecoration />
						<ResponsiveLogo />
						<PageTitle title="Sales Report" className={"text-green-100 sm:text-green-400 z-10 mb-auto"} />
						<DisplayByConfiguration salesBy={salesBy} setSalesBy={setSalesBy} />
						{salesBy.id === "product" ? (
							<ProductSalesReportTableGroup />
						) : salesBy.id === "transaction" ? (
							<TransactionSalesReportTableGroup />
						) : salesBy.id === "user" ? (
							<UserSalesReportTableGroup />
						) : null}
					</div>
				</div>
			</SideBar>
		</div>
	);
};

export default SalesReport;
