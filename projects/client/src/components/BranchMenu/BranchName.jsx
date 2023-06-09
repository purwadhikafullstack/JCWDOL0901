import React from "react";
import { getNearestBranch } from "./handlers/branchMenuHandler";
import { useDispatch, useSelector } from "react-redux";
import { setAppNearestBranch } from "../../redux/reducers/app/appAction";

const Name = ({ name }) => {
	return (
		<div className="font-medium text-normal underline underline-offset-4 decoration-dotted w-fit">
			{name}
		</div>
	);
};
const BranchName = ({ toggleBranchModal }) => {
	const app = useSelector(state => state.app);
	const dispatch = useDispatch();

	React.useEffect(() => {
		getNearestBranch(app.location.latitude, app.location.longitude)
			.then(result => {
				dispatch(setAppNearestBranch({ name: result.data.name, id: result.data.id }));
			})
			.catch(error => {
				dispatch(setAppNearestBranch({ name: "Server Error!", id: null }));
			});
	}, []);

	return (
		<div className="flex flex-row items-center justify-items-start">
			<Name name={app.branch.name} />
			<span
				className="ml-1 material-symbols-rounded font-bold text-xl cursor-pointer"
				onClick={() => toggleBranchModal(true)}
			>
				expand_more
			</span>
		</div>
	);
};

export default BranchName;
