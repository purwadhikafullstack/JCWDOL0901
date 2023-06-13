import Pagination from "../Pagination";
import { useState } from "react";
import CategoryTable from "./CategoryTable";

const CategoryTableGroup = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);

	return (
		<div className="max-w-5xl flex flex-col gap-4 p-4">
			<CategoryTable page={page} setMaxPage={setMaxPage} />
			<div className="flex justify-center">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default CategoryTableGroup;
