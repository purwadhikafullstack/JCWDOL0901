import { useNavigate } from "react-router-dom";

const BackButton = ({ url, color, className }) => {
	const navigate = useNavigate();
	return (
		<div className={`flex flex-row pl-5 py-5 z-20 ${className}`}>
			<span className="material-icons cursor-pointer" onClick={() => navigate(url)}>
				<span className={`material-symbols-outlined ${color}`}>chevron_left</span>
			</span>
		</div>
	);
};

export default BackButton;
