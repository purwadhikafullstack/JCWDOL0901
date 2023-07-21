import React from "react";

import BranchModalHeader from "./SelectBranchModal/BranchModalHeader";
import CurrentBranch from "./SelectBranchModal/CurrentBranch";
import BranchModalDropDown from "./SelectBranchModal/BranchModalDropDown";
import BranchModalActionButton from "./SelectBranchModal/BranchModalActionButton";

const SelectBranchModal = ({ toggleBranchModal }) => {
	const [branch, setBranch] = React.useState("");

	return (
		<div className={"bg-black/30 fixed top-0 h-screen z-50 sm:px-12 w-full"}>
			<div className="relative flex flex-col bg-white rounded-lg shadow w-full mx-auto mt-12 pb-6 px-6 sm:px-16 sm:w-[600px]">
				<BranchModalHeader />
				<CurrentBranch />
				<BranchModalDropDown branch={branch} setBranch={setBranch} />
				<BranchModalActionButton branch={branch} toggleBranchModal={toggleBranchModal} />
			</div>
		</div>
	);
};

export default SelectBranchModal;
