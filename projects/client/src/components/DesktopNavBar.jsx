import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import SearchBar from "./SearchBar";
import { ShoppingCartIcon, UserCircleIcon, UserIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "./Cart/handlers/CartHandler";
import { setCartUpdate } from "../redux/reducers/user/userAction";

const HomeButton = () => {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate("/")}>
			<div className="flex items-center mr-20">
				<CompanyLogo color={false} className="z-10 w-[40px] my-auto mr-4" clickable={false} />
				<div className="font-bold pt-2">GROSERIA</div>
			</div>
		</button>
	);
};

const DesktopNavBar = ({ setFilter }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const [itemOnCart, setItemOnCart] = useState(0);
	const dispatch = useDispatch();
	React.useEffect(() => {
		getUserCart()
			.then((result) => setItemOnCart(result.data.length))
			.catch((error) => setItemOnCart(0));
		dispatch(setCartUpdate({ cartUpdate: false }));
	}, [user.cartUpdate]);

	return (
		<div className="hidden text-green-100 text-xl sm:flex sm:flex-row sm:justify-center sm:w-full sm:mt-2 items-center">
			<HomeButton />
			<SearchBar setFilter={setFilter} />
			<button onClick={() => navigate("/cart")} className="ml-6 flex">
				{itemOnCart ? (
					<div className="border-red bg-red rounded-full text-[10px] overflow-hidden w-6 h-6 flex justify-center items-center absolute translate-x-4 -translate-y-3 text-white">
						{itemOnCart}
					</div>
				) : null}
				<span className="material-icons-outlined w-full">shopping_cart</span>
			</button>
			<button onClick={() => navigate("/order")} className="ml-6 flex">
				<span className="material-icons-outlined w-full">sticky_note_2</span>
			</button>
			<button onClick={() => navigate("/account")} className="ml-6 w-fit">
				{user.hasLogged ? (
					<div className="flex">
						<img
							className="h-8 w-8 rounded-full shrink-0 object-contain bg-green-100"
							src={process.env.REACT_APP_IMAGE_BASE_URL + user.avatar}
							alt="avatar"
						/>
						<div className="pl-2 pr-10 text-base flex items-center capitalize">{user.username}</div>
					</div>
				) : (
					<div className="flex w-8">
						<span className="material-icons-outlined w-full">account_circle</span>
					</div>
				)}
			</button>
		</div>
	);
};

export default DesktopNavBar;
