import { useNavigate } from "react-router-dom";

const CreateButton = () => {
	const navigate = useNavigate();
	return (
		<button
			className="flex flex flex-row rounded-lg border border-2 border-green-200 font-bold h-fit bg-white text-green-200 px-4 py-2 mb-2 mr-4 mt-auto ml-auto z-20"
			onClick={() => navigate("create")}
		>
			<div>Create Promotion </div>
			<span className="material-symbols-rounded ml-1">add</span>
		</button>
	);
};

export default CreateButton;
