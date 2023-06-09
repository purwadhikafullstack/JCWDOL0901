import React from "react";
import { getNearestBranch } from "./handlers/branchMenuHandler";
import { useDispatch, useSelector } from "react-redux";
import { setUserNearestBranch } from "../../redux/reducers/user/userAction";

const Name = ({ name }) => {
	return (
		<div className="font-medium text-normal underline underline-offset-4 decoration-dotted w-fit">
			{name}
		</div>
	);
};
const BranchName = ({ toggleBranchModal }) => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	React.useEffect(() => {
		getNearestBranch(user.location.latitude, user.location.longitude)
			.then(result => {
				dispatch(setUserNearestBranch({ name: result.data.name, id: result.data.id }));
			})
			.catch(error => {
				dispatch(setUserNearestBranch({ name: "Server Error!", id: null }));
			});
	}, []);

	return (
		<div className="flex flex-row items-center justify-items-start">
			<Name name={user.branch.name} />
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
