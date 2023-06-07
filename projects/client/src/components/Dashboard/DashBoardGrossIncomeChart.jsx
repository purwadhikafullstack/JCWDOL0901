import LineChart from "../../components/Chart/LineChart.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { rupiah } from "../../helper/rupiah.js";

const DashBoardGrossIncomeChart = () => {
	const [grossIncome, setGrossIncome] = useState({});
	useEffect(() => {
		async function getGrossIncome() {
			const token = localStorage.getItem("token");
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			const grossIncomeData = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/dashboard-data?status=5`,
				config
			);
			setGrossIncome(grossIncomeData.data || {});
		}
		getGrossIncome();
	}, []);
	return (
		<div className="flex flex-col items-center">
			<LineChart
				className="w-[400px] my-4"
				labels={grossIncome.labels}
				label="Gross Income"
				title="Total Gross Income"
				total={rupiah(grossIncome.totalGrossIncome || 0)}
				dataset={grossIncome.grossIncomeData}
				yTitle="IDR"
			/>
		</div>
	);
};

export default DashBoardGrossIncomeChart;
