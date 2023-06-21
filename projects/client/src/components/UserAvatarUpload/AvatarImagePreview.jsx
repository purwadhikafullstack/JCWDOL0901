import React, { useEffect } from "react";
import axios from "axios";

function AvatarImagePreview({ file }) {
	//   useEffect(() => {
	//     axios
	//       .get(`${process.env.REACT_APP_API_BASE_URL}/profile`, {
	//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	//       })
	//       .then((result) => {
	//         setUser(result.data);
	//       })
	//       .catch();
	//   }, []);

	return (
		<div className="flex flex-col justify-center items-center my-6">
			<img
				className="w-52 h-52 rounded-lg shadow-lg shadow-gray-200"
				src={file ? file : "/assets/avatars/default.png"}
				alt={file}
			/>
		</div>
	);
}

export default AvatarImagePreview;
