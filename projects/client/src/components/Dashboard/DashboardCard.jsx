const DashboardCard = ({ title, value, valueSize }) => {
	return (
		<div className="w-32 min-w-fit h-16 shadow-md rounded-md bg-green-300/80 mb-4 place-self-center text-white py-2 px-3">
			<p className="text-xs mb-1">{title}</p>
			<p className={`${valueSize}`}>{value}</p>
		</div>
	);
};

export default DashboardCard;
