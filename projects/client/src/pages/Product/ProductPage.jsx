import React, { useState } from "react";
import CategoryCarousel from "../../components/CategoryCarousel";
import ProductsHeader from "../../components/Products/ProductsHeader";
import ProductCards from "../../components/Products/ProductCards";
import Pagination from "../../components/Pagination";
const ProductPage = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	// const [filter, setFilter] = useState("");
	// const [sort, setSort] = useState("");
	// const [order, setOrder] = useState("");
	// const [input, setInput] = useState("");
	const itemPerPage = window.innerWidth > 640 ? 12 : 4;
	return (
		<div className="max-w-[640px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col overflow-y-hidden sm:max-w-full">
			<ProductsHeader />
			<div className="flex flex-col sm:px-8 pb-6">
				<CategoryCarousel />
				<ProductCards
					page={page}
					setMaxPage={setMaxPage}
					itemPerPage={itemPerPage}
					// filter={filter}
					// sort={sort}
					// order={order}
				/>
				<div className="flex justify-center">
					<Pagination page={page} setPage={setPage} maxPage={maxPage} />
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
