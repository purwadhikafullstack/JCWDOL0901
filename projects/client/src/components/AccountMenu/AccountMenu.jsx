/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
	IdentificationIcon,
	KeyIcon,
	LocationMarkerIcon,
	LoginIcon,
	LogoutIcon,
	PencilAltIcon,
	UserCircleIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../redux/reducers/user/userAction";

const menus = [
	{ name: "Edit Profile", icon: IdentificationIcon, nav: "/account/profile-update" },
	{ name: "Update Profile Picture", icon: UserCircleIcon, nav: "/account/avatar-update" },
	{ name: "Manage Address", icon: LocationMarkerIcon, nav: "/account/manage-address" },
	{ name: "Change Password", icon: KeyIcon, nav: "/account/change-password" },
];

const logout = { name: "Logout", icon: LogoutIcon };
const login = { name: "Login", icon: LoginIcon };
const register = { name: "Register", icon: PencilAltIcon };

const MenuButton = ({ menu }) => {
	const navigate = useNavigate();
	return (
		<li key={menu.name}>
			<button className="block hover:bg-gray-100 w-full" onClick={() => navigate(menu.nav)}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<menu.icon className="text-gray-300 mx-3 flex-shrink-0 h-6 w-6" />
						</div>
						<p className="mx-6 font-medium text-gray-300 truncate">{menu.name}</p>
					</div>
					<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
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
		dispatch(setUserLogin({ hasLogged: false, avatar: "", username: "" }));
		navigate("/");
	};

	return (
		<li key={logout.name}>
			<button className="block hover:bg-gray-100 w-full" onClick={logoutHandler}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<logout.icon className="text-gray-300 mx-3 flex-shrink-0 h-6 w-6" />
						</div>
						<p className="mx-6 font-medium text-gray-300 truncate">{logout.name}</p>
					</div>
					<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
				</div>
			</button>
		</li>
	);
};

const LoginButton = () => {
	const navigate = useNavigate();
	return (
		<li key={login.name}>
			<button className="block hover:bg-gray-100 w-full" onClick={() => navigate("/login")}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<login.icon className="text-gray-300 mx-3 flex-shrink-0 h-6 w-6" />
						</div>
						<p className="mx-6 font-medium text-gray-300 truncate">{login.name}</p>
					</div>
					<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
				</div>
			</button>
		</li>
	);
};

const RegisterButton = () => {
	const navigate = useNavigate();
	return (
		<li key={register.name}>
			<button className="block hover:bg-gray-100 w-full" onClick={() => navigate("/register")}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<register.icon className="text-gray-300 mx-3 flex-shrink-0 h-6 w-6" />
						</div>
						<p className="mx-6 font-medium text-gray-300 truncate">{register.name}</p>
					</div>
					<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
				</div>
			</button>
		</li>
	);
};

export default function AccountMenu() {
	const user = useSelector((state) => state.user);
	return (
		<div className="my-6 sm:mx-2">
			<h1 className="text-left font-bold mb-4 ml-6 text-lg text-gray-400">Account Settings</h1>
			<div className="bg-white shadow overflow-hidden sm:rounded-md mb-6">
				<ul className="divide-y divide-gray-100">
					{user.hasLogged ? menus.map((menu) => <MenuButton menu={menu} />) : null}
					{user.hasLogged ? (
						<LogoutButton />
					) : (
						<>
							<LoginButton />
							<RegisterButton />
						</>
					)}
				</ul>
			</div>
		</div>
	);
}
