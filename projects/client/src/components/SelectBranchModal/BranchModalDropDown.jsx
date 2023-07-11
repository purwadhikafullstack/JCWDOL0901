import React from "react";
import { Listbox } from "@headlessui/react";
import { getAllBranches } from "./handler/BranchModalHandler";

const ToggleDropDown = ({ open, branch }) => {
	return (
		<Listbox.Button
			className={`bg-white flex flex-row items-center justify-center border-2 border-green-200 px-4 py-2 rounded-lg ${
				open ? "mb-1" : "mb-36"
			}`}
		>
			<div className="flex flex-col items-center ml-auto w-full">
				<span className="text-xs whitespace-nowrap mx-auto mb-1">Switch To:</span>
				<span className="font-semibold text-sm max-w-[80%] overflow-x-hidden whitespace-nowrap ">
					{branch.name || "..."}
				</span>
			</div>
			<span className="material-symbols-rounded">expand_more</span>
		</Listbox.Button>
	);
};

const Option = ({ branch, selected }) => {
	return (
		<div
			className={
				selected
					? "font-bold text-green-300 flex flex-row justify-center text-[90%]"
					: "flex flex-row justify-center text-[90%]"
			}
		>
			{branch.name}
		</div>
	);
};

const BranchLists = ({ branches, setBranch }) => {
	return branches.map((branch, index) => {
		return (
			<Listbox.Option
				className="border ml-2 py-2 px-4 mb-0.5 rounded-lg shadow whitespace-nowrap max-w-full bg-white"
				key={index}
				value={branch.id}
				onClick={() => setBranch(branch)}
			>
				{({ selected }) => <Option branch={branch} selected={selected} />}
			</Listbox.Option>
		);
	});
};

const DropDownOptions = ({ setBranch }) => {
	const [branches, setBranches] = React.useState([]);

	React.useEffect(() => {
		getAllBranches()
			.then(result => setBranches(result.data))
			.catch(error => setBranches({ name: "Server Unavailable", id: 0 }));
	}, []);

	return (
		<Listbox.Options className="w-full mx-auto max-h-24  overflow-y-scroll mb-11 ">
			<BranchLists branches={branches} setBranch={setBranch} />
		</Listbox.Options>
	);
};

const BranchModalDropDown = ({ branch, setBranch }) => {
	return (
		<Listbox>
			{({ open }) => {
				return (
					<>
						<ToggleDropDown open={open} branch={branch} />
						<DropDownOptions setBranch={setBranch} />
					</>
				);
			}}
		</Listbox>
	);
};

export default BranchModalDropDown;
