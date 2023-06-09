/* This example requires Tailwind CSS v2.0+ */
import {
	DocumentTextIcon,
	ChartBarIcon,
	HomeIcon,
	GiftIcon,
	ViewGridIcon,
	ServerIcon,
	TicketIcon,
	CurrencyDollarIcon,
	UsersIcon,
} from "@heroicons/react/outline";
import SideBarMenu from "./SideBarMenu";
import SideBarFooter from "./SideBarFooter";

const navigation = [
	{ name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon, current: true },
	{
		name: "Create Branch Admin",
		href: "/admin/create-branch-admin",
		icon: UsersIcon,
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

export default function SideBarDesktop({ children }) {
	return (
		<>
			<div className="flex w-64 flex-col fixed inset-y-0">
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
