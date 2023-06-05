const MobileBackButton = ({ pageName, url }) => {
	return (
		<div className="flex flex-row items-center pl-5 pt-5">
			<span className="text-white font-bold text-xl cursor-pointer">{"<"}</span>
			<span className="text-white ml-2 text-xl">{pageName}</span>
		</div>
	);
};

export default MobileBackButton;
