const scales = yTitle => {
	return {
		x: {
			grid: {
				display: false,
			},
			ticks: {
				autoSkip: false,
				maxRotation: 30,
				minRotation: 30,
				font: {
					size: 9,
				},
			},
		},
		y: {
			beginAtZero: true,
			title: {
				display: true,
				text: yTitle,
			},
			ticks: {
				font: {
					size: 9,
				},
			},
		},
	};
};

const lineChartOption = (title, total, yTitle) => {
	return {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: `${title}: ${total}`,
				font: {
					size: 16,
				},
			},
		},
		scales: scales(yTitle),
	};
};

export default lineChartOption;
