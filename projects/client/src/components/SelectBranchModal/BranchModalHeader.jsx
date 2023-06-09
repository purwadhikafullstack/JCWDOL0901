import CompanyLogo from "../CompanyLogo";

const BranchModalHeader = () => {
	return (
		<div className="flex flex-col items-center pt-6 mb-6">
			<CompanyLogo color={true} className="w-[50px] mb-3" />
			<div className="text-xl font-semibold text-green-500 antialiased">
				Select Alternative Branch
			</div>
		</div>
	);
};

export default BranchModalHeader;
