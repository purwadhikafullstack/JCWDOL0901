import React from "react";

const BranchCard = ({ branch }) => {
	const { name, City } = branch;
	const location = `${City.type} ${City.name}`;

	return (
		<div className="flex flex-col items-start border border-dashed border-green-400 py-2 px-4 rounded-xl mb-2 mt-4">
			<div className="flex flex-row font-bold">
				<span className="material-symbols-rounded mr-1">store</span>
				<span>{name}</span>
			</div>
			<div className="flex flex-row items-center text-sm text-green-200 mt-1">
				<span className="material-symbols-rounded mr-1 text-sm ">location_on</span>
				<span>{location}</span>
			</div>
		</div>
	);
};

export default BranchCard;
