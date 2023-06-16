import React from "react";
import CompanyLogo from "../CompanyLogo";
import SearchBar from "../SearchBar";
import DesktopNavBar from "../DesktopNavBar";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import BackButton from "../BackButton";

const ProductsHeader = ({}) => {
	return (
		<div className="flex flex-col sm:bg-green-200 sm:pb-4 sm:px-12">
			<CompanyLogo color={false} className="z-10 w-[40px] mx-auto my-3 hidden sm:block" clickable={false} />
			<CompanyLogo color={true} className="z-10 w-[40px] mx-auto my-3 sm:hidden" clickable={false} />
			<div className="flex flex-col justify-between items-between z-10 mx-6">
				<DesktopNavBar />
				<div className="flex flex-row items-center">
					<div className="pr-5">
						<BackButton url={-1} color="text-gray-400 sm:text-green-100 text-3xl" />
					</div>
					<SearchBar />
					<button className="flex-1 flex items-center px-2 py-2 ml-6 text-base font-medium hover:bg-green-100/20 rounded-md">
						<AdjustmentsIcon
							className="text-gray-400 mr-4 flex-shrink-0 h-6 w-6 sm:text-green-100"
							aria-hidden="true"
						/>
						<p className="hidden sm:block text-base font-medium text-gray-400 sm:text-green-100">Sort</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsHeader;
