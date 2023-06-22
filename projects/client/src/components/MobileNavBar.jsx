import { useLocation, useNavigate } from "react-router-dom";

const MobileNavButton = ({ active, name, to }) => {
	const navigate = useNavigate();

	const className = active ? "material-icons-outlined w-full text-green-500" : "material-icons-outlined w-full";

	return (
		<div className="flex flex-row py-7 px-7 cursor-pointer" onClick={() => navigate(to)}>
			<span className={className}>{name}</span>
		</div>
	);
};

const MobileNavBar = () => {
	const location = useLocation().pathname;

	return (
		<div tabIndex="-1" className="fixed bottom-0 mx-auto z-50 w-[480px] inset-x-0 rounded-full sm:hidden">
			<div className="w-full mb-2 drop-shadow-2xl">
				<div className="mx-4 flex flex-row justify-around rounded-full bg-white">
					<MobileNavButton active={location === "/"} name="home" to="/" />
					<MobileNavButton active={location === "/cart"} name="shopping_cart" to="/cart" />
					<MobileNavButton active={location === "/history"} name="history" to="/history" />
					<MobileNavButton active={location === "/account"} name="account_circle" to="/account" />
				</div>
			</div>
		</div>
	);
};

export default MobileNavBar;
