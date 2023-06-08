import axios from "axios";

const getAllTimeData = async setAllTimeData => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const allTimeData = await axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/all-time-data?status=5&`,
		config
	);
	setAllTimeData(allTimeData.data || {});
};

export default getAllTimeData;
