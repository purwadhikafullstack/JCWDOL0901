import { LogoutIcon } from "@heroicons/react/outline";

export default function SideBarFooter() {
	return (
		<div className="flex-shrink-0 flex flex-col border-t border-green-400 p-4">
			<button className="flex-1 flex items-center px-2 py-2 text-base font-medium hover:bg-green-100/20 rounded-md">
				<LogoutIcon className="text-green-100 mr-4 flex-shrink-0 h-6 w-6" aria-hidden="true" />
				<p className="text-base font-medium text-green-100 ">Sign Out</p>
			</button>
		</div>
	);
}
