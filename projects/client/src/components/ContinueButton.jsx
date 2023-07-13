import { useNavigate } from "react-router-dom";

const ContinueButton = () => {
	const navigate = useNavigate();
	return (
		<>
			<button
				className="rounded-lg font-bold h-fit bg-green-500 text-green-100 px-4 py-2 ml-auto mr-10 my-10"
				onClick={() => navigate("/cart/checkout")}
			>
				Continue
			</button>
		</>
	);
};

export default ContinueButton;
