const DashboardCard = ({ title, value, valueSize }) => {
	return (
		<div className="w-32 sm:w-40 min-w-fit h-20 sm:h-28 shadow-md rounded-md bg-green-300/80 mb-4 text-white py-4 px-3 hover:-translate-y-2 duration-300 transition">
			<p className="text-xs sm:text-base mb-1">{title}</p>
			<p className={`${valueSize}`}>{value}</p>
		</div>
	);
};

export default DashboardCard;
