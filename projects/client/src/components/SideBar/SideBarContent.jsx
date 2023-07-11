import SideBarCloseButton from "./SideBarCloseButton";
import SideBarFooter from "./SideBarFooter";
import SideBarMenu from "./SideBarMenu";

export default function SideBarContent({ sidebarOpen, setSidebarOpen, navigation }) {
	return (
		<div
			className={`flex-1 flex flex-col min-h-0 border-r border-green-400 bg-green-200 transition duration-500 `}
		>
			<SideBarCloseButton setSidebarOpen={setSidebarOpen} />
			<SideBarMenu navigation={navigation} />
			<SideBarFooter />
		</div>
	);
}
