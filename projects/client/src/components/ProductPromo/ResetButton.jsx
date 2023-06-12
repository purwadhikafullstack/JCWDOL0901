const ResetButton = ({ onClick }) => {
	return (
		<button
			className="rounded-lg h-fit my-auto bg-red text-green-100 py-2 px-2 mt-8"
			onClick={onClick}
		>
			Reset
		</button>
	);
};

export default ResetButton;
