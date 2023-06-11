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

const navigation = () => {
	return [
		{ name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
		{
			name: "Create Branch Admin",
			href: "/admin/create-branch-admin",
			icon: UserAddIcon,
			super: true,
		},
		{ name: "Products", href: "#", icon: GiftIcon },
		{ name: "Categories", href: "/admin/category", icon: ViewGridIcon },
		{ name: "Stocks", href: "#", icon: ServerIcon },
		{ name: "Product Promos", href: "#", icon: CurrencyDollarIcon },
		{ name: "Orders", href: "#", icon: DocumentTextIcon },
		{ name: "Vouchers", href: "#", icon: TicketIcon },
		{ name: "Reports", href: "#", icon: ChartBarIcon },
	];
};

export default navigation;
