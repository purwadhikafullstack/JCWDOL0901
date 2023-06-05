import React from "react";

const CircularBackgroundDecoration = () => {
	return (
		<div className="relative">
			<div
				className="absolute rounded-full h-[1500px] w-[1500px] bg-green-200"
				style={{
					top: "-480px",
					left: "180px",
					zIndex: "-999",
					transform: "translate(-50%, -50%)",
				}}
			></div>
		</div>
	);
};

export default CircularBackgroundDecoration;