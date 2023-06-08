import React from "react";
import axios from "axios";

const NearestBranch = ({ geolocation }) => {
	const [branch, setBranch] = React.useState();

	React.useEffect(() => {
		if (!localStorage.getItem("nearest_branch")) {
			axios
				.post(`${process.env.REACT_APP_API_BASE_URL}/branch/nearest`, {
					latitude: geolocation.latitude,
					longitude: geolocation.longitude,
				})
				.then(result => {
					setBranch(result.data);
					localStorage.setItem("nearest_branch", result.data.id);
					localStorage.setItem("nearest_branch_name", result.data.name);
				})
				.catch(error => setBranch({ name: "Server Unavailable" }));
		}
	});

	return (
		<>
			<div className="font-medium text-normal underline underline-offset-4 decoration-dotted w-fit">
				{branch?.name || localStorage.getItem("nearest_branch_name")}
			</div>
			<span className="ml-1 material-symbols-rounded font-bold text-xl cursor-pointer">
				expand_more
			</span>
		</>
	);
};

export default NearestBranch;
