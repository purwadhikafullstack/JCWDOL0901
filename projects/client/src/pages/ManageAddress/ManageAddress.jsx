import AddressList from "../../components/ManageAddress/AddressList";
import PageTitle from "../../components/PageTitle";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block sm:hidden z-40">
				<CompanyLogo color={false} className="w-[40px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden sm:block">
				<CompanyLogo color={true} className="w-[40px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const Header = () => {
	return (
		<div className="text-black flex flex-col bg-green-200 sm:bg-white pb-4">
			<BackButton
				url="/account"
				color="sm:text-gray-400 text-green-100 text-3xl sm:hover:text-green-300 hover:text-gray-200"
			/>
			<ResponsiveLogo />
			<PageTitle title="Manage Address" color={"text-green-100 sm:text-green-400 z-10"} />
		</div>
	);
};

const CreateButton = () => {
	const navigate = useNavigate();
	return (
		<>
			<button
				className="rounded-lg font-bold h-fit bg-green-500 text-green-100 w-full sm:w-fit px-10 py-2 mx-auto mb-6"
				onClick={() => navigate("/account/create-new-address")}
			>
				Add New Address
			</button>
		</>
	);
};

const ManageAddress = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col bg-white min-h-screen">
				<Header />
				<AddressList />
				<div className="mx-10 mt-auto sm:mt-0">
					<CreateButton />
				</div>
			</div>
		</div>
	);
};

export default ManageAddress;
