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
	const [filterBy, setFilterBy] = useState("");
	const [name, setName] = useState("");
	const [sort, setSort] = useState("");
	const [order, setOrder] = useState("");
	const [input, setInput] = useState("");
	const itemPerPage = window.innerWidth > 640 ? 10 : 6;

	return (
		<div className="flex flex-col bg-green-100 p-4 justify-center items-center gap-4 mb-auto">
			<div className=" w-full flex flex-col gap-4 py-4 px-4 sm:px-10 ">
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
					setFilterBy={setFilterBy}
					filterBy={filterBy}
					filter={filter}
				/>
				<div className="flex">
					<ResetButton
						onClick={() => {
							setFilter("");
							setFilterBy("");
							setInput("");
							setSort("");
							setOrder("");
							setName("");
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
					filterBy={filterBy}
				/>
			</div>
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

export default ProductList;
