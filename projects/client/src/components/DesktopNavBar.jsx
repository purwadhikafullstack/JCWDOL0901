import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import SearchBar from "./SearchBar";
import { ShoppingCartIcon, UserCircleIcon, UserIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

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

const DesktopNavBar = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	return (
		<div className="hidden text-green-100 text-xl sm:flex sm:flex-row sm:justify-center sm:w-full sm:mt-2 items-center">
			<HomeButton />
			<SearchBar />
			<button onClick={() => navigate("/cart")} className="ml-6 flex">
				<span className="material-icons-outlined w-full">shopping_cart</span>
			</button>
			<button onClick={() => navigate("/order")} className="ml-6 flex">
				<span className="material-icons-outlined w-full">sticky_note_2</span>
			</button>
			<button onClick={() => navigate("/account")} className="ml-6 w-fit">
				{user.hasLogged ? (
					<div className="flex">
						<img
							className="h-8 w-8 rounded-full shrink-0"
							src="/assets/avatars/avatar_1687355687099601141539.png"
							alt=""
						/>
						<div className="pl-2 pr-10 text-base flex items-center">Danang</div>
					</div>
				) : (
					<div className="flex w-8">
						<img className="h-8 w-8 rounded-full shrink-0" src="/assets/avatars/default.png" alt="" />
					</div>
				)}
			</button>
		</div>
	);
};

export default DesktopNavBar;
