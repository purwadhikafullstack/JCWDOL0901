import React from "react";

function AvatarImagePreview({ file }) {
	return (
		<div className="flex flex-col justify-center items-center my-6">
			<img
				className="w-52 h-52 rounded-lg shadow-lg shadow-gray-200 object-contain"
				src={file ? file : process.env.REACT_APP_IMAGE_BASE_URL + "/uploads/avatars/default.png"}
				alt={file}
			/>
		</div>
	);
}

export default AvatarImagePreview;
