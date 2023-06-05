const MobileBackButton = ({ pageName, url }) => {
	return (
		<div className="flex flex-row items-center pl-5 py-5 w-full">
			<span className="material-icons text-green-100 cursor-pointer">
				arrow_back
			</span>
			<span className="text-green-100 ml-6 text-xl">{pageName}</span>
		</div>
	);
};

export default MobileBackButton;
