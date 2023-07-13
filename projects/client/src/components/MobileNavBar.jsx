import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserCart } from "./Cart/handlers/CartHandler";
import { setCartUpdate } from "../redux/reducers/user/userAction";

const MobileNavButton = ({ active, name, to, itemOnCart }) => {
	const navigate = useNavigate();

	const className = active ? "material-icons-outlined w-full text-green-500" : "material-icons-outlined w-full";

	return (
		<div className="flex flex-row py-7 px-7 cursor-pointer" onClick={() => navigate(to)}>
			{itemOnCart ? (
				<div className="border-red bg-red rounded-full text-[10px] overflow-hidden w-6 h-6 flex justify-center items-center absolute translate-x-4 -translate-y-3 text-white">
					{itemOnCart}
				</div>
			) : null}
			<span className={className}>{name}</span>
		</div>
	);
};

const MobileNavBar = () => {
	const location = useLocation().pathname;
	const user = useSelector((state) => state.user);
	const [itemOnCart, setItemOnCart] = useState(0);
	const dispatch = useDispatch();
	useEffect(() => {
		getUserCart()
			.then((result) => setItemOnCart(result.data.length))
			.catch((error) => setItemOnCart(0));
		dispatch(setCartUpdate({ cartUpdate: false }));
	}, [user.cartUpdate]);

	return (
		<div tabIndex="-1" className="fixed bottom-0 mx-auto z-50 w-full inset-x-0 rounded-full md:hidden">
			<div className="w-full mb-2 drop-shadow-2xl">
				<div className="mx-4 flex flex-row justify-around rounded-full bg-white">
					<MobileNavButton active={location === "/"} name="home" to="/" />
					<MobileNavButton
						active={location === "/cart"}
						name="shopping_cart"
						to="/cart"
						itemOnCart={itemOnCart}
					/>
					<MobileNavButton active={location === "/order"} name="sticky_note_2" to="/order" />
					<MobileNavButton active={location === "/account"} name="account_circle" to="/account" />
				</div>
			</div>
		</div>
	);
};

export default MobileNavBar;
