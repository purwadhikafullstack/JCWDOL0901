const CategoryFilterSort = ({ filter, setFilter, order, setOrder }) => {
	return (
		<div className="border max-w-5xl flex flex-row gap-4 p-4">
			<div className="border">
				<div>Filter by name:</div>
				<input placeholder="ex: sayur" value={filter} onChange={e => setFilter(e.target.value)} />
			</div>
			<div className="border">
				<div>sort</div>
			</div>
		</div>
	);
};

export default CategoryFilterSort;
