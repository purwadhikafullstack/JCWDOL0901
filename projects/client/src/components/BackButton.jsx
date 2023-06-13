import { useNavigate } from "react-router-dom";

const BackButton = ({ url, color }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-row items-center pl-5 py-5 w-full z-20">
			<span className="material-icons cursor-pointer" onClick={() => navigate(url)}>
				<span className={`material-symbols-outlined ${color}`}>chevron_left</span>
			</span>
		</div>
	);
};

export default BackButton;
