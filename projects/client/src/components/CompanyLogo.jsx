import { useNavigate } from "react-router-dom";

const CompanyLogo = ({ color, className }) => {
	const navigate = useNavigate();

	const src = color
		? "/assets/logo/color_logo.png"
		: "/assets/logo/white_logo.png";

		
	return <img src={src} className={className} onClick={()=> navigate('/')} />;
};

export default CompanyLogo;
