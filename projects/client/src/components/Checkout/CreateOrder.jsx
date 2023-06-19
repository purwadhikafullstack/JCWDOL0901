import React from "react";

const CreateOrder = () => {
	return (
		<div className="flex flex-col">
			<button
				type="button"
				className="flex items-center bg-green-500 text-green-100 rounded-lg w-fit ml-auto mr-8 py-3 px-6 mb-6"
			>
				<span className="mr-8 font-bold">Create Order </span>
				<span className="material-symbols-rounded">arrow_right</span>
			</button>
		</div>
	);
};

export default CreateOrder;
