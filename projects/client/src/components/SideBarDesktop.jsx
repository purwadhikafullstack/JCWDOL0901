/* This example requires Tailwind CSS v2.0+ */
import { useLocation, useNavigate } from "react-router-dom";
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
	LogoutIcon,
} from "@heroicons/react/outline";

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
	const location = useLocation().pathname;
	const navigate = useNavigate();

	return (
		<>
			<div>
				{/* Static sidebar for desktop */}
				<div className="flex w-64 flex-col fixed inset-y-0">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex-1 flex flex-col min-h-0 border-r border-green-400 bg-green-200">
						<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
							<div className="flex items-center flex-shrink-0 px-4 justify-center">
								<img className="h-8 w-auto" src="/assets/logo/white_logo.png" alt="Workflow" />
								<p className="mx-6 text-green-100 font-bold text-xl">GROSERIA</p>
							</div>
							<nav className="mt-5 flex-1 px-2 bg-green-200 space-y-1">
								{navigation.map(item => (
									<button
										key={item.name}
										className={`w-full text-green-100 flex items-center px-2 py-2 text-sm font-medium rounded-md ${
											item.href === location
												? "bg-green-100 text-green-400"
												: "hover:bg-green-100/20"
										}`}
										onClick={() => navigate(item.href)}
									>
										<item.icon
											className={`text-green-100 mr-3 flex-shrink-0 h-6 w-6 ${
												item.href === location
													? "bg-green-100 text-green-400"
													: "hover:bg-green-100/20"
											}`}
											aria-hidden="true"
										/>
										{item.name}
									</button>
								))}
							</nav>
						</div>
						<div className="flex-shrink-0 flex border-t border-green-400 p-4">
							<button className="flex-1 flex items-center px-2 py-2 text-base font-medium hover:bg-green-100/20 rounded-md">
								<LogoutIcon
									className="text-green-100 mr-4 flex-shrink-0 h-6 w-6"
									aria-hidden="true"
								/>
								<p className="text-base font-medium text-green-100 ">Sign Out</p>
							</button>
						</div>
					</div>
				</div>
				<div className="pl-64 flex flex-col flex-1">
					<div className="min-w-[480px] w-full mx-auto bg-green-100">
						{/* Replace with your content */}
						{children}
						{/* /End replace */}
					</div>
				</div>
			</div>
		</>
	);
}
