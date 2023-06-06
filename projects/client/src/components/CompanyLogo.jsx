import { useNavigate } from "react-router-dom";

const CompanyLogo = ({ color, className, clickable = null }) => {

	const navigate = useNavigate();

	const src = color
		? "/assets/logo/color_logo.png"
		: "/assets/logo/white_logo.png";

	return <img src={src} className={className} onClick={clickable ? () => navigate('/') : null} />;
};

export default CompanyLogo;
