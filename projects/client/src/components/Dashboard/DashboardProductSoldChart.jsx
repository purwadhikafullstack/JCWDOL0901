import LineChart from "../Chart/LineChart.jsx";

const DashboardProductSoldChart = ({ data, chartClass }) => {
	return (
		<div className="flex flex-col items-center">
			<LineChart
				className={`${chartClass}`}
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
