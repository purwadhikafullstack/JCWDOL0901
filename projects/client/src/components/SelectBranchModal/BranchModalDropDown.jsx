import React from "react";
import { Listbox } from "@headlessui/react";
const Branch = [
	"Groseria Solo",
	"Groseria Jakpus",
	"Groseria Palembang",
	"Groseria Jakpus",
	"Groseria Jakpus",
];

const ToggleDropDown = ({ open, selectedBranch }) => {
	return (
		<Listbox.Button
			className={`flex flex-row items-center justify-center border-2 border-green-200 px-4 py-2 rounded-lg ${
				open ? "mb-1" : "mb-36"
			}`}
		>
			<div className="flex flex-col items-center ml-auto">
				<span className="text-xs whitespace-nowrap mx-auto mb-1">Switch To:</span>
				<span className="font-bold overflow-x-hidden whitespace-nowrap mx-auto">
					{selectedBranch || "..."}
				</span>
			</div>
			<span className="material-symbols-rounded ml-auto">expand_more</span>
		</Listbox.Button>
	);
};

const BranchLists = ({ setSelectedBranch }) => {
	return Branch.map((each, index) => {
		return (
			<Listbox.Option
				className="border ml-2 py-2 px-4 mb-0.5 rounded-lg shadow whitespace-nowrap overflow-hidden"
				key={index}
				value={each}
				onClick={() => setSelectedBranch(each)}
			>
				{({ selected }) => (
					<div
						className={
							selected
								? "font-bold text-green-300 flex flex-row justify-center"
								: "flex flex-row justify-center"
						}
					>
						{each}
					</div>
				)}
			</Listbox.Option>
		);
	});
};

const DropDownOptions = ({ setSelectedBranch }) => {
	return (
		<Listbox.Options className="w-full mx-auto max-h-24  overflow-y-scroll mb-11">
			<BranchLists selectedBranch={setSelectedBranch} />
		</Listbox.Options>
	);
};

const BranchModalDropDown = () => {
	const [selectedBranch, setSelectedBranch] = React.useState("");
	return (
		<Listbox>
			{({ open }) => {
				return (
					<>
						<ToggleDropDown open={open} selectedBranch={selectedBranch} />
						<DropDownOptions setSelectedBranch={setSelectedBranch} />
					</>
				);
			}}
		</Listbox>
	);
};

export default BranchModalDropDown;
