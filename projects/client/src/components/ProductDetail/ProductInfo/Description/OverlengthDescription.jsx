import React from "react";

const OverlengthDescription = ({ description }) => {
	const [viewMore, setViewMore] = React.useState(false);
	const shortDescription = description.substring(0, 100);

	return viewMore ? (
		<div className="flex flex-col mb-2 w-full">
			<span className="">{description}</span>
			<div
				className="flex flex-row items-center mt-2 text-green-400 cursor-pointer"
				onClick={() => setViewMore(false)}
			>
				<span className="underline text-sm">Show Less</span>
				<span class="material-symbols-rounded">expand_less</span>
			</div>
		</div>
	) : (
		<div className="flex flex-col mb-2 w-full">
			<span>{shortDescription}...</span>
			<div
				className="flex flex-row items-center mt-2 text-green-400 cursor-pointer"
				onClick={() => setViewMore(true)}
			>
				<span className="underline text-sm">Show More</span>
				<span class="material-symbols-rounded">expand_more</span>
			</div>
		</div>
	);
};

export default OverlengthDescription;
