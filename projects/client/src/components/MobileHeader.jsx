import React from "react";
import CircularBackgroundDecoration from "./CircularBackgroundDecoration";
import CompanyLogo from "./CompanyLogo";
import AddressMenu from "./AddressMenu";
import SearchBar from "../components/SearchBar";
import BranchMenu from "./BranchMenu";

const MobileHeader = () => {
	return (
		<div className="flex flex-col">
			<CircularBackgroundDecoration />
			<CompanyLogo
				color={false}
				className="z-10 w-[40px] mx-auto mt-1.5 mb-4"
				clickable={false}
			/>

			<div className="flex flex-col justify-between items-between z-10 mx-6">
				<SearchBar />
				<div className="flex flex-row">
					<AddressMenu />
					<BranchMenu />
				</div>
			</div>
		</div>
	);
};

export default MobileHeader;
