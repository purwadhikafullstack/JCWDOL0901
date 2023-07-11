import React from "react";

const ErrorWarning = ({ error }) => {
	return (
		<div
			className={
				error
					? "text-red text-sm mb-2 font-semibold z-20"
					: "opacity-0 cursor-default mb-2"
			}
		>
			{error ? error : "x"}
		</div>
	);
};

export default ErrorWarning;
