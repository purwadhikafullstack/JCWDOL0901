import React from "react";
import { useDispatch } from "react-redux";
import { switchBranch } from "../../redux/reducers/app/appAction";

const ConfirmChangeButton = ({ branch, toggleBranchModal }) => {
	const dispatch = useDispatch();
	const { name, id } = branch;
	return (
		<button
			className="bg-green-500 text-white px-4 py-2 rounded-lg ml-auto mr-16 font-bold disabled:bg-green-500/50"
			type="button"
			disabled={!id}
			onClick={() => dispatch(switchBranch({ name, id })) && toggleBranchModal(false)}
		>
			Confirm
		</button>
	);
};

const CancelChangeButton = ({ toggleBranchModal }) => {
	return (
		<button
			className="bg-red text-white px-4 py-2 rounded-lg mr-auto ml-1 font-bold"
			type="button"
			onClick={() => toggleBranchModal(false)}
		>
			Cancel
		</button>
	);
};

const BranchModalActionButton = ({ branch, toggleBranchModal }) => {
	return (
		<div className="flex flex-row justify-center">
			<ConfirmChangeButton branch={branch} toggleBranchModal={toggleBranchModal} />
			<CancelChangeButton toggleBranchModal={toggleBranchModal} />
		</div>
	);
};

export default BranchModalActionButton;
