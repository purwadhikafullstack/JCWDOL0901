import LineChart from "../Chart/LineChart.jsx";
import { rupiah } from "../../helper/rupiah.js";

const DashboardProductSoldChart = ({ data }) => {
	return (
		<div className="flex flex-col items-center">
			<LineChart
				className="w-[400px] mb-2"
				labels={data.labels}
				label="Product Sold"
				title="Total Product Sold"
				total={data.totalProductSold || 0}
				dataset={data.productSoldData}
				yTitle=""
			/>
		</div>
	);
};

export default DashboardProductSoldChart;
