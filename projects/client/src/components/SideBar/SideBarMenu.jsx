import { useLocation, useNavigate } from "react-router-dom";
import SideBarHeader from "./SideBarHeader";
import SideBarNavButton from "./SideBarNavButton";

export default function SideBarMenu({ navigation }) {
	const location = useLocation().pathname;
	const navigate = useNavigate();

	return (
		<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
			<SideBarHeader />
			<nav className="mt-5 flex-1 px-2 bg-green-200 space-y-1">
				{navigation().map(item => (
					<SideBarNavButton key={item.name} item={item} location={location} navigate={navigate} />
				))}
			</nav>
		</div>
	);
}
