const MobileBackButton = ({ pageName, url }) => {
	return (
		<div className="flex flex-row items-center pl-5 py-5 w-full">
			<span className="material-icons text-white cursor-pointer">
				<span class="material-symbols-outlined">chevron_left</span>
			</span>
			<span className="text-white ml-6 text-xl">{pageName}</span>
		</div>
	);
};

export default MobileBackButton;
