/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import SideBarMenuButton from "./SideBarMenuButton";
import SideBarContent from "./SideBarContent";

import navigation from "./config/navigationConfig";

export default function SideBarMobile({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="relative top-0 pb-10">
			<div className="w-80 bg-[#f4f4f4] overflow-hidden z-50 fixed inset-y-0 -translate-x-80"></div>
			<div
				className={`z-40 flex w-64 flex-col fixed inset-y-0 overflow-hidden transition duration-500  ${
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
				<main className="flex-1">
					<div className="max-w-7xl mx-auto">{children}</div>
				</main>
			</div>
		</div>
	);
}
