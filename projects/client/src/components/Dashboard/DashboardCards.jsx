import DashboardCard from "./DashboardCard";
import { rupiah } from "../../helper/rupiah";

const DashboardCards = ({}) => {
	return (
		<>
			<h1 className="mb-2 text-green-400 font-bold text-xl">All time</h1>
			<div className="mx-12 flex flex-row gap-2">
				<DashboardCard title="Buyer" value="120" valueSize="text-xl" />
				<DashboardCard title="Gross Income" value={rupiah(5400000)} valueSize="text-md" />
				<DashboardCard title="Product Sold" value="2541" valueSize="text-xl" />
			</div>
		</>
	);
};

export default DashboardCards;
