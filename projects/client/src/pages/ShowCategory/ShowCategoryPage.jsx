import CategoryIllustration from "../../components/Category/CategoryIllustration";
import SideBar from "../../components/SideBar/SideBar";
import CategoryList from "../../components/Category/CategoryList";

const Illustration = () => {
	return (
		<div className="text-black flex flex-row justify-center items-center w-full">
			<div className="flex flex-col sm:flex-row sm:gap-12">
				<div className="flex flex-col justify-center">
					<div className="mt-2 mb-2 mr-auto text-3xl sm:text-5xl text-center sm:text-left py-4 font-semibold w-full text-green-400">
						Categories
					</div>
				</div>
				<CategoryIllustration className="w-[200px] sm:w-[250px] hover:scale-110 duration-700 transition py-4" />
			</div>
		</div>
	);
};

const ShowCategoryPage = () => {
	return (
		<div className="flex flex-col">
			<SideBar>
				<div className="flex flex-col bg-green-100">
					<Illustration />
					<CategoryList />
				</div>
			</SideBar>
		</div>
	);
};

export default ShowCategoryPage;
