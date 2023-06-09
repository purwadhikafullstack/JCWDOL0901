/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
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
	MenuIcon,
	XIcon,
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

export default function SideBarMobile({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation().pathname;
	const navigate = useNavigate();

	return (
		<div className="relative top-0">
			<div className="pb-10">
				<div className={`flex w-64 flex-col fixed inset-y-0 overflow-hidden`}>
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div
						className={`flex-1 flex flex-col min-h-0 border-r border-green-400 bg-green-200 transition duration-500 ${
							sidebarOpen ? "" : " -translate-x-72"
						}`}
					>
						<div className="relative self-end mr-2 pt-2">
							<button
								type="button"
								className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								onClick={() => setSidebarOpen(false)}
							>
								<span className="sr-only">Close sidebar</span>
								<XIcon className="h-6 w-6 text-white" aria-hidden="true" />
							</button>
						</div>
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
				<div className="flex flex-col flex-1">
					<div className={`absolute top-0 pl-3 pt-3 ${sidebarOpen ? "hidden" : "block"}`}>
						<button
							type="button"
							className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<main className="flex-1">
						<div className="">
							<div className="max-w-7xl mx-auto">
								{/* Replace with your content */}
								{children}
								{/* /End replace */}
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}
