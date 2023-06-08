import DashBoardGrossIncomeChart from "./DashBoardGrossIncomeChart";

const DashboardCharts = ({ data }) => {
	return (
		<>
			<DashBoardGrossIncomeChart data={data} />
			<DashBoardGrossIncomeChart data={data} />
		</>
	);
};

export default DashboardCharts;
