import {
	DocumentTextIcon,
	ChartBarIcon,
	HomeIcon,
	GiftIcon,
	ViewGridIcon,
	CubeIcon,
	TicketIcon,
	CurrencyDollarIcon,
	UserAddIcon,
	CubeTransparentIcon,
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
		{ name: "Products", href: "/admin/product", icon: GiftIcon },
		{ name: "Categories", href: "/admin/category", icon: ViewGridIcon },
		{ name: "Stocks", href: "/admin/stock", icon: CubeIcon, super: false },
		{ name: "Stocks History", href: "/admin/stock/history", icon: CubeTransparentIcon, super: false },
		{ name: "Product Promos", href: "/admin/promo", icon: CurrencyDollarIcon, super: false },
		{ name: "Orders", href: "/admin/order", icon: DocumentTextIcon },
		// { name: "Vouchers", href: "#", icon: TicketIcon },
		{ name: "Reports", href: "#", icon: ChartBarIcon },
	];
};

export default navigation;
