import { MenuIcon } from "@heroicons/react/outline";
export default function SideBarMenuButton({ sidebarOpen, setSidebarOpen }) {
	return (
		<div className={`sm:hidden absolute top-0 pl-3 pt-3 ${sidebarOpen ? "hidden" : "block"}`}>
			<button
				type="button"
				className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
				onClick={() => setSidebarOpen(true)}
			>
				<span className="sr-only">Open sidebar</span>
				<MenuIcon className="h-6 w-6" aria-hidden="true" />
			</button>
		</div>
	);
}
