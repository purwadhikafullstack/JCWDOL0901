import { useSelector } from "react-redux";

const CurrentBranch = () => {
	const user = useSelector(state => state.user);
	return (
		<div className="text-xs flex flex-row justify-center mt-1.5 mb-4  ">
			<div className="whitespace-nowrap">Current Branch:</div>
			<span className="font-medium antialiased ml-2.5 whitespace-nowrap overflow-x-hidden">
				{user.branch.name}
			</span>
		</div>
	);
};

export default CurrentBranch;
