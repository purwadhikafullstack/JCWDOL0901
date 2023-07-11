import axios from "axios";

const getBranchInfo = async setBranchInfo => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const dashboardData = await axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/data/branch`,
		config
	);
	setBranchInfo(dashboardData.data || {});
};

export default getBranchInfo;
