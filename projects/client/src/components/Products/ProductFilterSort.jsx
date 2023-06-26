import { AdjustmentsIcon } from "@heroicons/react/outline";
import SearchSort from "./SearchSort";
import SortModal from "./SortModal";
import { useState } from "react";

const ProductFilterSort = ({ setName, setFilter, order, setOrder, sort, setSort, input, setInput, setPage }) => {
	const [open, setOpen] = useState(false);
	const enterHandler = (event) => {
		if (event.key === "Enter") {
			setName(input);
			setPage(1);
		} else return null;
	};
	return (
		<div className="max-w-5xl flex gap-8 flex-row items-center sm:items-start justify-between">
			<div className="flex flex-row gap-2 w-2/3">
				<input
					type="text"
					className="border border-green-400 px-3 py-2 w-[70%] rounded-lg mb-auto text-black outline-0"
					placeholder="Product Name"
					onKeyDown={enterHandler}
					onChange={(event) => setInput(event.target.value)}
					value={input}
				/>
				<div
					className="flex max-w-[20%] w-fi bg-green-300  rounded-lg p-2 cursor-pointer block"
					onClick={() => {
						setName(input);
						setPage(1);
					}}
				>
					<span class="material-symbols-rounded w-full overflow-hidden whitespace-nowrap">search</span>
				</div>
			</div>
			<div className="">
				<button
					className="flex-1 flex items-center px-2 py-2 ml-6 text-base font-medium hover:bg-gray-100 rounded-md group"
					onClick={() => setOpen(true)}
				>
					<AdjustmentsIcon className="text-gray-400 flex-shrink-0 h-6 w-6 " aria-hidden="true" />
					<p className="hidden sm:block text-base font-medium text-gray-400 ml-4 w-24">Filter & Sort</p>
				</button>
				<SortModal
					open={open}
					setOpen={setOpen}
					order={order}
					setOrder={setOrder}
					sort={sort}
					setSort={setSort}
				/>
				{/* <SearchSort order={order} setOrder={setOrder} sort={sort} setSort={setSort} /> */}
			</div>
		</div>
	);
};

export default ProductFilterSort;
