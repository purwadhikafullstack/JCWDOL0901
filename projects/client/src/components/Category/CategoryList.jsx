import CategoryFilterSort from "./CategoryFilterSort";
import CategoryTableGroup from "./CategoryTableGroup";

const CategoryList = () => {
	return (
		<div className="flex flex-col bg-white p-4 justify-center items-center gap-4">
			<CategoryFilterSort />
			<CategoryTableGroup />
		</div>
	);
};

export default CategoryList;
