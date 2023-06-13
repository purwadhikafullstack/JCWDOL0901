import CategoryTableGroup from "./CategoryTableGroup";

const CategoryList = () => {
	return (
		<div className="flex flex-col bg-white p-4 justify-center items-center gap-4">
			<div className="border max-w-5xl flex flex-row gap-4 p-4">
				<div className="border">Filter</div>
				<div className="border">Sort</div>
			</div>
			<CategoryTableGroup />
		</div>
	);
};

export default CategoryList;
