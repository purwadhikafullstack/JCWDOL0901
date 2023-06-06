const BackButton = ({ url, color }) => {
	return (
		<div className="flex flex-row items-center pl-5 py-5 w-full z-10">
			<span className="material-icons cursor-pointer">
				<span className={"material-symbols-outlined " + color}>
					chevron_left
				</span>
			</span>
		</div>
	);
};

export default BackButton;
