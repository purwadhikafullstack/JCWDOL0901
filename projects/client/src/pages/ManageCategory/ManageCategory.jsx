import SideBar from "../../components/SideBar/SideBar";
import CategoryList from "../../components/Category/CategoryList";
import PageTitle from "../../components/PageTitle";
import CompanyLogo from "../../components/CompanyLogo.jsx";

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block sm:hidden z-40">
				<CompanyLogo color={false} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden sm:block">
				<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const Header = () => {
	return (
		<div className="text-black flex flex-col bg-green-200 sm:bg-green-100 pb-4">
			<ResponsiveLogo />
			<PageTitle title="Manage Category" color={"text-green-100 sm:text-green-400 z-10"} />
		</div>
	);
};

const ManageCategory = () => {
	return (
		<div className="flex flex-col flex-1 min-h-screen overflow-hidden bg-green-100 z-10">
			<SideBar>
				<div className="flex flex-col">
					<Header />
					<CategoryList />
				</div>
			</SideBar>
		</div>
	);
};

export default ManageCategory;
