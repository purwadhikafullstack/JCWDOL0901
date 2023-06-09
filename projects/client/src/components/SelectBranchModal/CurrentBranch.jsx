import { useSelector } from "react-redux";

const CurrentBranch = () => {
	const app = useSelector(state => state.app);
	return (
		<>
			<div className="text-xs flex flex-row justify-center mt-1.5 mb-4">
				<div>Current Branch:</div>
				<span className="font-medium antialiased ml-2.5">{app.branch.name}</span>
			</div>
		</>
	);
};

export default CurrentBranch;
