import { useNavigate } from "react-router-dom";

const CreateButton = () => {
	const navigate = useNavigate();
	return (
		<button
			className="rounded-lg font-bold h-fit text-green-500 underline px-2 mt-auto mb-1"
			onClick={() => navigate("create")}
		>
			Create Promotion
		</button>
	);
};

export default CreateButton;
