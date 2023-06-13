import React from "react";

import BranchModalHeader from "./SelectBranchModal/BranchModalHeader";
import CurrentBranch from "./SelectBranchModal/CurrentBranch";
import BranchModalDropDown from "./SelectBranchModal/BranchModalDropDown";
import BranchModalActionButton from "./SelectBranchModal/BranchModalActionButton";
import { useSelector } from "react-redux";

const SelectBranchModal = ({ toggleBranchModal }) => {
	const [branch, setBranch] = React.useState("");
	const app = useSelector(state => state.app);
	const width = app.mobileView ? "w-[480px]" : "w-full";

	return (
		<div className={"bg-black/30 fixed top-0 h-screen z-50 px-12 " + width}>
			<div className="relative flex flex-col bg-white rounded-lg shadow w-full mx-auto mt-12 pb-6 px-16">
				<BranchModalHeader />
				<CurrentBranch />
				<BranchModalDropDown branch={branch} setBranch={setBranch} />
				<BranchModalActionButton branch={branch} toggleBranchModal={toggleBranchModal} />
			</div>
		</div>
	);
};

export default SelectBranchModal;
