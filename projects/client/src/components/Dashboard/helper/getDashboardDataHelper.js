import axios from "axios";

const getDashboardData = async setDashboardData => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const dashboardData = await axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/dashboard-data?status=5`,
		config
	);
	setDashboardData(dashboardData.data || {});
};

export default getDashboardData;
