import React from "react";

const BackButton = ({ page, setPage, disabled }) => {
	return (
		<button disabled={disabled} onClick={() => setPage(page - 1)} className="text-green-300">
			{"<"}
		</button>
	);
};

const NextButton = ({ page, setPage, disabled }) => {
	return (
		<button disabled={disabled} onClick={() => setPage(page + 1)} className="text-green-300">
			{">"}
		</button>
	);
};

const Pagination = ({ page, setPage, maxPage }) => {
	return (
		<div className="flex flex-row w-fit">
			<BackButton page={page} setPage={setPage} disabled={page === 1} />
			<span className="mx-4">
				Page {page} of {maxPage}
			</span>
			<NextButton page={page} setPage={setPage} disabled={page === maxPage} />
		</div>
	);
};

export default Pagination;
