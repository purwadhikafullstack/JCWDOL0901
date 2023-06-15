import SearchSort from "./SearchSort";

const CategoryFilterSort = ({ setFilter, order, setOrder, sort, setSort, input, setInput }) => {
	return (
		<div className="max-w-5xl flex flex-col gap-8 sm:flex-row items-center sm:items-start justify-between mb-6">
			<div className="pt-8">
				<div className="flex flex-col w-60">
					<div className="flex items-center justify-between w-full text-green-100 mt-auto flex-row">
						<input
							type="text"
							className="border border-green-400 px-3 py-2 w-[70%] rounded-lg mb-auto text-black outline-0"
							placeholder="Category Name"
							onKeyDown={event => (event.key === "Enter" ? setFilter(input) : null)}
							onChange={event => setInput(event.target.value)}
							value={input}
						/>
						<div
							className="flex max-w-[20%] w-fit bg-green-300  rounded-lg p-1 px-2 cursor-pointer block"
							onClick={() => setFilter(input)}
						>
							<span class="material-symbols-rounded w-full overflow-hidden whitespace-nowrap">
								search
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<SearchSort order={order} setOrder={setOrder} sort={sort} setSort={setSort} />
			</div>
		</div>
	);
};

export default CategoryFilterSort;
