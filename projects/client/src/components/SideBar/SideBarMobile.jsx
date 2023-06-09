/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import {
	DocumentTextIcon,
	ChartBarIcon,
	HomeIcon,
	GiftIcon,
	ViewGridIcon,
	ServerIcon,
	TicketIcon,
	CurrencyDollarIcon,
	UserAddIcon,
} from "@heroicons/react/outline";
import SideBarMenuButton from "./SideBarMenuButton";
import SideBarContent from "./SideBarContent";

const navigation = [
	{ name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon, current: true },
	{
		name: "Create Branch Admin",
		href: "/admin/create-branch-admin",
		icon: UserAddIcon,
		current: false,
	},
	{ name: "Products", href: "#", icon: GiftIcon },
	{ name: "Categories", href: "#", icon: ViewGridIcon },
	{ name: "Stocks", href: "#", icon: ServerIcon },
	{ name: "Product Promos", href: "#", icon: CurrencyDollarIcon },
	{ name: "Orders", href: "#", icon: DocumentTextIcon },
	{ name: "Vouchers", href: "#", icon: TicketIcon },
	{ name: "Reports", href: "#", icon: ChartBarIcon },
];

export default function SideBarMobile({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="relative top-0 pb-10">
			<div className={`flex w-64 flex-col fixed inset-y-0 overflow-hidden`}>
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
