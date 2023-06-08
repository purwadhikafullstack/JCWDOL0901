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
import dataConfig from "./config/dataConfig";

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

const LineChart = ({ className, labels, label, title, total, dataset, yTitle }) => {
	return (
		<div className={`${className}`}>
			<Line
				options={lineChartOption(title, total, yTitle)}
				data={dataConfig(labels, label, dataset)}
			/>
		</div>
	);
};

export default LineChart;
