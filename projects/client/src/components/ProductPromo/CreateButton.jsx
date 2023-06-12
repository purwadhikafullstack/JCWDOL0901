import { useNavigate } from "react-router-dom";

const CreateButton = () => {
	const navigate = useNavigate();
	return (
		<button
			className="rounded-lg font-bold h-fit my-auto bg-green-500 text-green-100 py-2 px-2 mt-2"
			onClick={() => navigate("create")}
		>
			Create
		</button>
	);
};

export default CreateButton;
