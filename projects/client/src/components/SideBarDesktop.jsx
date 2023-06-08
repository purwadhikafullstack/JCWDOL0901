/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
	DocumentTextIcon,
	ChartBarIcon,
	HomeIcon,
	MenuIcon,
	XIcon,
	LogoutIcon,
	GiftIcon,
	ViewGridIcon,
	ServerIcon,
	TicketIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/outline";

const navigation = [
	{ name: "Dashboard", href: "#", icon: HomeIcon, current: true },
	{ name: "Products", href: "#", icon: GiftIcon, current: false },
	{ name: "Categories", href: "#", icon: ViewGridIcon, current: false },
	{ name: "Stocks", href: "#", icon: ServerIcon, current: false },
	{ name: "Product Promos", href: "#", icon: CurrencyDollarIcon, current: false },
	{ name: "Orders", href: "#", icon: DocumentTextIcon, current: false },
	{ name: "Vouchers", href: "#", icon: TicketIcon, current: false },
	{ name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function SideBar({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className="pb-10">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<div className="relative flex-1 flex flex-col max-w-xs w-full bg-green-200">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<button
											type="button"
											className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
										</button>
									</div>
								</Transition.Child>
								<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
									<div className="flex-shrink-0 flex items-center px-4 justify-center">
										<img className="h-8 w-auto" src="/assets/logo/white_logo.png" alt="Workflow" />
										<p className="mx-6 text-green-100 font-bold text-xl">GROSERIA</p>
									</div>
									<nav className="mt-5 px-2 space-y-1">
										{navigation.map(item => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "bg-green-100/70 text-gray-900"
														: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
													"group flex items-center px-2 py-2 text-base font-medium rounded-md"
												)}
											>
												<item.icon
													className={classNames(
														item.current
															? "text-gray-500"
															: "text-gray-400 group-hover:text-gray-500",
														"mr-4 flex-shrink-0 h-6 w-6"
													)}
													aria-hidden="true"
												/>
												{item.name}
											</a>
										))}
									</nav>
								</div>
								<div className="flex-shrink-0 flex border-t border-green-400 p-4">
									<a
										href="#"
										className="group block flex items-center px-2 py-2 text-base font-medium"
									>
										<LogoutIcon
											className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
											aria-hidden="true"
										/>
										<p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
											Sign Out
										</p>
									</a>
								</div>
							</div>
						</Transition.Child>
						<div className="flex-shrink-0 w-14">
							{/* Force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex-1 flex flex-col min-h-0 border-r border-green-400 bg-green-200">
						<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
							<div className="flex items-center flex-shrink-0 px-4 justify-center">
								<img className="h-8 w-auto" src="/assets/logo/white_logo.png" alt="Workflow" />
								<p className="mx-6 text-green-100 font-bold text-xl">GROSERIA</p>
							</div>
							<nav className="mt-5 flex-1 px-2 bg-green-200 space-y-1">
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? "bg-green-100/70 text-gray-900"
												: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
											"group flex items-center px-2 py-2 text-sm font-medium rounded-md"
										)}
									>
										<item.icon
											className={classNames(
												item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500",
												"mr-3 flex-shrink-0 h-6 w-6"
											)}
											aria-hidden="true"
										/>
										{item.name}
									</a>
								))}
							</nav>
						</div>
						<div className="flex-shrink-0 flex border-t border-green-400 p-4">
							<a href="#" className="group block flex items-center px-2 py-2 text-base font-medium">
								<LogoutIcon
									className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
									aria-hidden="true"
								/>
								<p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
									Sign Out
								</p>
							</a>
						</div>
					</div>
				</div>
				<div className="md:pl-64 flex flex-col flex-1">
					<div className="fixed top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
						<button
							type="button"
							className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<main className="flex-1">
						<div className="">
							<div className="max-w-7xl mx-auto sm:px-6 md:px-8">
								{/* Replace with your content */}
								{children}
								{/* /End replace */}
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
