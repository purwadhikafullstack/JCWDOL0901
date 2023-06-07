const scales = {
	x: {
		grid: {
			display: false,
		},
	},
};

const lineChartOption = (title, total) => {
	return {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: `${title}: ${total}`,
			},
		},
		scales: scales,
	};
};

export default lineChartOption;
