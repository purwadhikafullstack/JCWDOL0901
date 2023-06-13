import SideBarMenu from "./SideBarMenu";
import SideBarFooter from "./SideBarFooter";
import navigation from "./config/navigationConfig";

export default function SideBarDesktop({ children }) {
	return (
		<>
			<div className="hidden z-10 sm:flex w-64 flex-col fixed inset-y-0">
				<div className="flex-1 flex flex-col min-h-0 border-r border-green-400 bg-green-200">
					<SideBarMenu navigation={navigation} />
					<SideBarFooter />
				</div>
			</div>
			<div className="pl-64 flex flex-col flex-1">
				<div className="min-w-[480px] w-full mx-auto bg-green-100">{children}</div>
			</div>
		</>
	);
}
