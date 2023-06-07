import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import lineChartOption from "./config/lineChartOption";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const LineChart = ({ className, labels, label, title, total, dataset }) => {
	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: label,
				data: dataset,
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return (
		<div className={className}>
			<Line options={lineChartOption(title, total)} data={data} />
		</div>
	);
};

export default LineChart;
