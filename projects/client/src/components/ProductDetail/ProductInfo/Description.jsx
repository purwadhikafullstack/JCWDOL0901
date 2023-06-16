import React from "react";
import OverlengthDescription from "./Description/OverlengthDescription";

const Description = ({ description }) => {
	const overlength = description.length > 100;

	return (
		<div className="text-left text-gray-300 leading-7 w-full">
			{overlength ? <OverlengthDescription description={description} /> : <span className="">{description}</span>}
		</div>
	);
};

export default Description;
