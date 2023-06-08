import axios from "axios";

const getGrossIncome = async setGrossIncome => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const grossIncomeData = await axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/dashboard-data?status=5`,
		config
	);
	setGrossIncome(grossIncomeData.data || {});
};

export default getGrossIncome;
