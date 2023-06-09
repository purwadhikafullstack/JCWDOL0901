import React from "react";
import CompanyLogo from "./CompanyLogo";
import AddressMenu from "./AddressMenu";
import SearchBar from "../components/SearchBar";
import BranchMenu from "./BranchMenu";

const DesktopHeader = ({ toggleBranchModal }) => {
	return (
		<div className="flex flex-col bg-green-200 pb-4 px-48">
			<CompanyLogo color={false} className="z-10 w-[40px] mx-auto my-3" clickable={false} />
			<div className="flex flex-col justify-between items-between z-10 mx-6">
				<SearchBar />
				<div className="flex flex-row justify-between items-start mt-2">
					<BranchMenu toggleBranchModal={toggleBranchModal} />
					<AddressMenu />
				</div>
			</div>
		</div>
	);
};

export default DesktopHeader;
