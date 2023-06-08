import LineChart from "../../components/Chart/LineChart.jsx";
import { rupiah } from "../../helper/rupiah.js";

const DashBoardGrossIncomeChart = ({ data }) => {
	return (
		<div className="flex flex-col items-center">
			<LineChart
				className="w-[400px] my-4"
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

export default DashBoardGrossIncomeChart;
