import React from "react";

import BranchModalHeader from "./SelectBranchModal/BranchModalHeader";
import CurrentBranch from "./SelectBranchModal/CurrentBranch";
import BranchModalDropDown from "./SelectBranchModal/BranchModalDropDown";
import BranchModalActionButton from "./SelectBranchModal/BranchModalActionButton";

const SelectBranchModal = ({ toggleBranchModal }) => {
	const [branch, setBranch] = React.useState("");
	return (
		<div className="bg-black/30 fixed top-0 w-[480px] h-screen z-50">
			<div className="relative flex flex-col bg-white rounded-lg shadow mx-12 mt-12 pb-6 px-16">
				<BranchModalHeader />
				<CurrentBranch />
				<BranchModalDropDown branch={branch} setBranch={setBranch} />
				<BranchModalActionButton branch={branch} toggleBranchModal={toggleBranchModal} />
			</div>
		</div>
	);
};

export default SelectBranchModal;
