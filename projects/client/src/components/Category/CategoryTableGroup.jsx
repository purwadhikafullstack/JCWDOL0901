import Pagination from "../Pagination";
import { useState } from "react";
import CategoryTable from "./CategoryTable";
import { useNavigate } from "react-router-dom";
import CategoryFilterSort from "./CategoryFilterSort";
import { useSelector } from "react-redux";
import ResetButton from "./ResetButton";

const CreateButton = () => {
	const navigate = useNavigate();
	const admin = useSelector((state) => state.admin);
	return (
		<>
			{admin.superAdmin ? (
				<button
					className="rounded-lg font-bold h-fit bg-green-500 text-green-100 px-4 py-2 ml-auto"
					onClick={() => navigate("create")}
				>
					Create New Category
				</button>
			) : null}
		</>
	);
};

const CategoryTableGroup = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [order, setOrder] = useState("");
	const [input, setInput] = useState("");
	const itemPerPage = window.innerWidth > 640 ? 6 : 6;
	return (
		<div className="max-w-3xl flex flex-col gap-4 py-4 px-6 w-full">
			<CategoryFilterSort
				setFilter={setFilter}
				order={order}
				setOrder={setOrder}
				sort={sort}
				setSort={setSort}
				input={input}
				setInput={setInput}
				setPage={setPage}
			/>
			<div className="flex">
				<ResetButton
					onClick={() => {
						setFilter("");
						setInput("");
						setSort("");
						setOrder("");
					}}
				/>
				<CreateButton />
			</div>
			<CategoryTable
				page={page}
				setMaxPage={setMaxPage}
				itemPerPage={itemPerPage}
				filter={filter}
				sort={sort}
				order={order}
			/>
			{maxPage !== 0 ? (
				<div className="flex justify-center pb-20 sm:pb-10">
					<Pagination page={page} setPage={setPage} maxPage={maxPage} />
				</div>
			) : (
				<div>No data matching the filter</div>
			)}
		</div>
	);
};

export default CategoryTableGroup;
