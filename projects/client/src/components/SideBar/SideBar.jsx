/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import SideBarMenuButton from "./SideBarMenuButton";
import SideBarContent from "./SideBarContent";
import SideBarDesktop from "./SideBarDesktop";
import navigation from "./config/navigationConfig";

export default function SideBar({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<SideBarDesktop />
			<div className="relative top-0">
				<div
					className={`z-50 flex w-64 flex-col fixed inset-y-0 overflow-hidden transition duration-500 ${
						sidebarOpen ? "" : " -translate-x-72"
					}`}
				>
					<SideBarContent
						sidebarOpen={sidebarOpen}
						setSidebarOpen={setSidebarOpen}
						navigation={navigation}
					/>
				</div>
				<div className="flex flex-col flex-1">
					<SideBarMenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
					<main className="flex-1 sm:pl-64">
						<div className="max-w-7xl mx-auto">{children}</div>
					</main>
				</div>
			</div>
		</>
	);
}
