import { useNavigate } from "react-router-dom";

const CreateButton = () => {
	const navigate = useNavigate();
	return (
		<button
			className="rounded-lg font-bold h-fit bg-green-500 text-green-100 px-4 py-2 mb-4 mr-4 mt-auto ml-auto mb-1"
			onClick={() => navigate("create")}
		>
			Create Promotion
		</button>
	);
};

export default CreateButton;
