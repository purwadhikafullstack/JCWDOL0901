const ResetButton = ({ onClick }) => {
	return (
		<button className="rounded-lg h-fit bg-red text-green-100 py-2 px-2" onClick={onClick}>
			Reset
		</button>
	);
};

export default ResetButton;
