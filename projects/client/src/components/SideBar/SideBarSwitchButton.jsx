import { DesktopComputerIcon, DeviceMobileIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { setMobileView } from "../../redux/reducers/app/appAction";
export default function SideBarSwitchButton() {
	const dispatch = useDispatch();
	const mobileView = useSelector(state => state.app.mobileView);
	return (
		<button
			onClick={() => dispatch(setMobileView())}
			className="flex-1 flex items-center px-2 py-2 text-base font-medium hover:bg-green-100/20 rounded-md"
		>
			{mobileView ? (
				<DesktopComputerIcon className="text-green-100 mr-4 flex-shrink-0 h-6 w-6" />
			) : (
				<DeviceMobileIcon className="text-green-100 mr-4 flex-shrink-0 h-6 w-6" />
			)}
			<p className="text-base font-medium text-green-100 ">
				{mobileView ? "Desktop View" : "Mobile View"}
			</p>
		</button>
	);
}
