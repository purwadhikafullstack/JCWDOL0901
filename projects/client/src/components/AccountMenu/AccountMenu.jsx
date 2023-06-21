/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon } from "@heroicons/react/solid";
import { IdentificationIcon, KeyIcon, LocationMarkerIcon, LogoutIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../redux/reducers/user/userAction";

const menus = [
	{ name: "Edit Profile", icon: IdentificationIcon, nav: "/account/change-password" },
	{ name: "Update Profile Picture", icon: UserCircleIcon, nav: "/account/change-password" },
	{ name: "Manage Address", icon: LocationMarkerIcon, nav: "/account/change-password" },
	{ name: "Change Password", icon: KeyIcon, nav: "/account/change-password" },
];

const logout = {
	name: "Logout",
	icon: LogoutIcon,
	handler: () => {},
};

const MenuButton = ({ menu }) => {
	const navigate = useNavigate();
	return (
		<li key={menu.name}>
			<button className="block hover:bg-gray-100 w-full" onClick={() => navigate(menu.nav)}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<menu.icon className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6" />
						</div>
						<div className="mx-6">
							<p className=" font-medium text-gray-300 truncate">{menu.name}</p>
						</div>
					</div>
					<div>
						<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
					</div>
				</div>
			</button>
		</li>
	);
};

const LogoutButton = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutHandler = () => {
		localStorage.removeItem("token");
		dispatch(setUserLogin({ hasLogged: false }));
		navigate("/login");
	};

	return (
		<li key={logout.name}>
			<button className="block hover:bg-gray-100 w-full" onClick={logoutHandler}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<logout.icon className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6" />
						</div>
						<div className="mx-6">
							<p className=" font-medium text-gray-300 truncate">{logout.name}</p>
						</div>
					</div>
					<div>
						<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
					</div>
				</div>
			</button>
		</li>
	);
};

export default function AccountMenu() {
	return (
		<div className="bg-white shadow overflow-hidden sm:rounded-md my-6">
			<ul className="divide-y divide-gray-100">
				{menus.map((menu) => (
					<MenuButton menu={menu} />
				))}
				<LogoutButton />
			</ul>
		</div>
	);
}
