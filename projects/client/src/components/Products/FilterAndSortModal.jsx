/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchSort from "./SearchSort";
import SearchFilter from "./SearchFilter";

export default function FilterAndSortModal({
	open,
	setOpen,
	order,
	setOrder,
	sort,
	setSort,
	setFilterBy,
	setFilter,
	filterBy,
	filter,
	setPage,
}) {
	const cancelButtonRef = useRef(null);
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="fixed z-10 inset-0 overflow-y-auto"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-10">
							<div className="sm:flex-col sm:items-start">
								<div className="mt-10 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<Dialog.Title
										as="h3"
										className="text-2xl leading-6 font-medium text-green-400 mb-10"
									>
										Filter Products
									</Dialog.Title>
									<div className="mt-2">
										<SearchFilter
											setFilterBy={setFilterBy}
											setFilter={setFilter}
											filterBy={filterBy}
											filter={filter}
											setPage={setPage}
										/>
									</div>
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<Dialog.Title
										as="h3"
										className="text-2xl leading-6 font-medium text-green-400 mb-10"
									>
										Sort Products
									</Dialog.Title>
									<div className="mt-2">
										<SearchSort order={order} setOrder={setOrder} sort={sort} setSort={setSort} />
									</div>
								</div>
							</div>
							<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-200 text-base font-medium text-white hover:bg-green-200/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 sm:ml-3 sm:w-auto sm:text-sm"
									onClick={() => {
										setOpen(false);
									}}
								>
									Close
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
