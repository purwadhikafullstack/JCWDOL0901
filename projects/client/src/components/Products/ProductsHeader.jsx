import React, { useState } from "react";
import CompanyLogo from "../CompanyLogo";
import SearchBar from "../SearchBar";
import DesktopNavBar from "../DesktopNavBar";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import BackButton from "../BackButton";
import SearchSort from "./SearchSort";
import SortModal from "./SortModal";

const SortButton = ({ setOpen, open, order, setOrder, sort, setSort, className }) => {
	return (
		<div className={`mr-4 sm:mr-10 sm:mt-4 sm:w-full flex justify-end ${className}`}>
			<div>
				<button
					className="flex-1 flex items-center px-2 py-2 ml-6 text-base font-medium hover:bg-gray-100 sm:hover:bg-green-100/20 rounded-md group"
					onClick={() => setOpen(true)}
				>
					<AdjustmentsIcon
						className="text-gray-400 flex-shrink-0 h-6 w-6 sm:text-green-300"
						aria-hidden="true"
					/>
					<p className="hidden sm:block text-base font-medium text-gray-400 sm:text-green-300 ml-4">Sort</p>
				</button>
				<SortModal
					open={open}
					setOpen={setOpen}
					order={order}
					setOrder={setOrder}
					sort={sort}
					setSort={setSort}
				/>
			</div>
		</div>
	);
};

const ProductsHeader = ({ setFilter, order, setOrder, sort, setSort }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="flex flex-col sm:bg-green-200 sm:pb-4 sm:px-12 items-center">
				<CompanyLogo color={true} className="z-10 w-[40px] mx-auto my-3 sm:hidden" clickable={false} />
				<div className="flex flex-col justify-between items-between z-10 mx-6 w-full">
					<DesktopNavBar setFilter={setFilter} />
				</div>
			</div>
			<div className="flex flex-row items-center">
				<div className="pr-5">
					<BackButton
						url={"/"}
						color="text-gray-400 sm:text-green-100 text-3xl hover:text-green-300"
						className="sm:hidden"
					/>
				</div>
				<SearchBar setFilter={setFilter} className="sm:hidden" />
				<SortButton
					setOpen={setOpen}
					open={open}
					order={order}
					setOrder={setOrder}
					sort={sort}
					setSort={setSort}
					className=""
				/>
			</div>
		</>
	);
};

export default ProductsHeader;
