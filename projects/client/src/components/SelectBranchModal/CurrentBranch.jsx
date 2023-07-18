import { useSelector } from "react-redux";

const CurrentBranch = () => {
	const user = useSelector((state) => state.user);
	return (
		<div className="text-xs flex flex-col sm:flex-row justify-center mt-1.5 mb-4  ">
			<div className="whitespace-nowrap">Current Branch:</div>
			<div className="font-medium antialiased ml-2.5 whitespace-nowrap">{user.branch.name}</div>
		</div>
	);
};

export default CurrentBranch;
