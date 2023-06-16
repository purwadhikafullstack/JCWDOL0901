import React from "react";
import CompanyLogo from "../CompanyLogo";
import SearchBar from "../SearchBar";
import DesktopNavBar from "../DesktopNavBar";

const ProductsHeader = ({}) => {
	return (
		<div className="flex flex-col sm:bg-green-200 sm:pb-4 sm:px-12">
			<CompanyLogo color={false} className="z-10 w-[40px] mx-auto my-3 hidden sm:block" clickable={false} />
			<CompanyLogo color={true} className="z-10 w-[40px] mx-auto my-3 sm:hidden" clickable={false} />
			<div className="flex flex-col justify-between items-between z-10 mx-6">
				<DesktopNavBar />
				<SearchBar />
			</div>
		</div>
	);
};

export default ProductsHeader;
