const BackButton = ({ pageName, url }) => {
	return (
		<div className="flex flex-row items-center pl-5 py-5 w-full z-10">
			<span className="material-icons text-white cursor-pointer">
				<span className="material-symbols-outlined">chevron_left</span>
			</span>
			<span className="text-white ml-6 text-xl">{pageName}</span>
		</div>
	);
};

export default BackButton;
