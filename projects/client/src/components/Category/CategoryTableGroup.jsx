import Pagination from "../Pagination";
import { useState } from "react";
import CategoryTable from "./CategoryTable";
import { useNavigate } from "react-router-dom";
import DeleteAlert from "../DeleteAlert";

const CreateButton = () => {
	const navigate = useNavigate();
	return (
		<button
			className="rounded-lg font-bold h-fit bg-green-500 text-green-100 px-4 py-2 mb-4 mt-auto ml-auto mb-1"
			onClick={() => navigate("create")}
		>
			Create New Category
		</button>
	);
};

const CategoryTableGroup = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const itemPerPage = 5;
	return (
		<div className="max-w-3xl flex flex-col gap-4 py-4 px-10 w-screen">
			<CreateButton />
			<CategoryTable page={page} setMaxPage={setMaxPage} itemPerPage={itemPerPage} />
			<div className="flex justify-center">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default CategoryTableGroup;
