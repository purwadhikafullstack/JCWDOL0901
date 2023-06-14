import { LogoutIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSuper } from "../../redux/reducers/admin/adminAction";

export default function SideBarFooter() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logoutHandler = () => {
		localStorage.removeItem("token");
		dispatch(setSuper(false));
		navigate("/admin/login");
	};
	return (
		<div className="flex-shrink-0 flex flex-col border-t border-green-400 p-4">
			<button
				className="flex-1 flex items-center px-2 py-2 text-base font-medium hover:bg-green-100/20 rounded-md"
				onClick={logoutHandler}
			>
				<LogoutIcon className="text-green-100 mr-4 flex-shrink-0 h-6 w-6" aria-hidden="true" />
				<p className="text-base font-medium text-green-100 ">Sign Out</p>
			</button>
		</div>
	);
}
