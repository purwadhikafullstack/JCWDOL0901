import LineChart from "../../components/Chart/LineChart.jsx";
import { rupiah } from "../../helper/rupiah.js";

const DashboardGrossIncomeChart = ({ data, chartClass }) => {
	console.log(chartClass);
	return (
		<div className="flex flex-col items-center">
			<LineChart
				className={`${chartClass}`}
				labels={data.labels}
				label="Gross Income"
				title="Total Gross Income"
				total={rupiah(data.totalGrossIncome || 0)}
				dataset={data.grossIncomeData}
				yTitle="IDR"
			/>
		</div>
	);
};

export default DashboardGrossIncomeChart;
