import Pagination from "../Pagination";
import { useState } from "react";
import ProductTable from "./ProductTable";
import { useNavigate } from "react-router-dom";
import ProductFilterSort from "./ProductFilterSort";
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
					Create New Product
				</button>
			) : null}
		</>
	);
};

const ProductList = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [name, setName] = useState("");
	const [sort, setSort] = useState("");
	const [order, setOrder] = useState("");
	const [input, setInput] = useState("");
	const itemPerPage = window.innerWidth > 640 ? 8 : 6;
	console.log(input, "name: ", name);
	return (
		<div className="flex flex-col bg-white p-4 justify-center items-center gap-4">
			<div className="max-w-3xl flex flex-col gap-4 py-4 px-4 sm:px-10 w-screen ">
				<ProductFilterSort
					setName={setName}
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
				<ProductTable
					page={page}
					setMaxPage={setMaxPage}
					itemPerPage={itemPerPage}
					filter={filter}
					sort={sort}
					order={order}
					name={name}
				/>
				<div className="flex justify-center pb-20 sm:pb-10">
					<Pagination page={page} setPage={setPage} maxPage={maxPage} />
				</div>
			</div>
		</div>
	);
};

export default ProductList;
