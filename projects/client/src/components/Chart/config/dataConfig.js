const dataConfig = (labels, label, dataset) => {
	return {
		labels,
		datasets: [
			{
				fill: true,
				label: label,
				data: dataset,
				borderColor: "#2E9D5B",
				backgroundColor: "#53B97C50",
			},
		],
	};
};

export default dataConfig;
