import React from "react";
import BackButton from "../../components/BackButton.jsx";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import LineChart from "../../components/Chart/LineChart.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const MobileIllustration = () => {
	return (
		<div className="text-white flex flex-row justify-center items-center z-10 mb-12">
			<div className="flex flex-col">
				<div className="mt-2 mb-2 mr-auto ml-6 text-3xl text-left font-semibold">
					Dashboard
				</div>
				<div className="mr-auto ml-6 text-sm text-left font-semibold">
					Groseria Store Semarang
				</div>
				<div className="mr-auto ml-6 text-sm text-left">
					Kota Semarang, Jawa Tengah
				</div>
			</div>
			<DashboardIllustration className="w-[250px] mr-auto ml-auto pr-4" />
		</div>
	);
};

const DashboardMobile = () => {
	const [grossIncome, setGrossIncome] = useState({});
	useEffect(() => {
		async function getGrossIncome() {
			const token = localStorage.getItem("token");
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			const grossIncomeData = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/dashboard-data`,
				config
			);
			setGrossIncome(grossIncomeData.data || {});
		}
		getGrossIncome();
	}, []);

	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	];
	const dataset = [2321, 1234, 6823, 1312, 3200, 8123, 4321];

	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/admin/dashboard" color="text-white" />
			<MobileIllustration />
			<div className="w-32 h-20 shadow-md rounded-md bg-green-300/80 mb-4 place-self-center text-white py-2 px-3">
				<p>Total Buyer</p>
				<p className="text-2xl">120</p>
			</div>
			<p>{JSON.stringify(grossIncome)}</p>
			<div className="flex flex-col items-center">
				<LineChart
					className="w-[400px] mb-4"
					labels={labels}
					label="Gross Income"
					title="Total Gross Income"
					total="2.500.000"
					dataset={dataset}
				/>
			</div>
			<div className="flex flex-col items-center">
				<LineChart
					className="w-[400px] mb-4"
					labels={labels}
					label="Product Sold"
					title="Total Product Sold"
					total="3785"
					dataset={dataset}
				/>
			</div>
		</div>
	);
};

export default DashboardMobile;
