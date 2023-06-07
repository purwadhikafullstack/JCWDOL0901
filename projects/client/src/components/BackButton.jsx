import { useNavigate } from "react-router-dom";

const BackButton = ({ url, color }) => {
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-row items-center pl-5 py-5 w-full z-10"
			onClick={() => navigate(url)}
		>
			<span className="material-icons cursor-pointer">
				<span className={"material-symbols-outlined " + color}>
					chevron_left
				</span>
			</span>
		</div>
	);
};

export default BackButton;
