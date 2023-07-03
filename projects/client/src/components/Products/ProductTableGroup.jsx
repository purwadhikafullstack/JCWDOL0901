import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import ResetButton from "./ResetButton";
import ProductFilterSort from "./ProductFilterSort";
import ProductTable from "./ProductTable";

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
					Create New Product
				</button>
			) : null}
		</>
	);
};

const ProductTableGroup = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [order, setOrder] = useState("");
	const [input, setInput] = useState("");
	const itemPerPage = 5;

	return (
		<div className="max-w-3xl flex flex-col gap-4 py-4 px-10 w-screen">
			<ProductFilterSort
				setFilter={setFilter}
				order={order}
				setOrder={setOrder}
				sort={sort}
				setSort={setSort}
				input={input}
				setInput={setInput}
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
			<ProductTable
				page={page}
				setMaxPage={setMaxPage}
				itemPerPage={itemPerPage}
				filter={filter}
				sort={sort}
				order={order}
			/>
			<div className="flex justify-center">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default ProductTableGroup;
