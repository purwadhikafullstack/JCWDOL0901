const CompanyLogo = ({ size, color, paddingY, paddingX }) => {
	const src = color
		? "/assets/logo/color_logo.png"
		: "/assets/logo/white_logo.png";

	const className = `w-[${size}] py-[${paddingY}] py-${paddingY}`;

	return <img src={src} className={className} />;
};

export default CompanyLogo;
