import { XIcon } from "@heroicons/react/outline";
export default function SideBarCloseButton({ setSidebarOpen }) {
	return (
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
	);
}
