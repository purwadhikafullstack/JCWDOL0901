const titleConfig = (title, total) => {
	return {
		display: true,
		text: `${title}: ${total}`,
		font: {
			size: 16,
		},
	};
};

const xScaleConfig = () => {
	return {
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
	};
};

const yScaleConfig = yTitle => {
	return {
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
	};
};

const lineChartOption = (title, total, yTitle) => {
	return {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: titleConfig(title, total),
		},
		scales: {
			x: xScaleConfig(),
			y: yScaleConfig(yTitle),
		},
	};
};

export default lineChartOption;
