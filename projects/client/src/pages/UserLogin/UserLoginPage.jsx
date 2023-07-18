import React, { useEffect } from "react";
import UserLoginIllustration from "../../components/UserLogin/UserLoginIllustration";
import BackButton from "../../components/BackButton";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";
import Notification from "../../components/Notification";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Illustration = () => {
	return (
		<>
			<div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
				<div className="mt-10 mr-auto ml-6 text-3xl font-semibold">User Login</div>
				<UserLoginIllustration className="h-[190px] mr-20 mb-8 mt-2" />
			</div>
			<div className="hidden h-full mx-12 shrink-0 sm:flex sm:flex-col sm:justify-center">
				<div className="mb-4 text-green-100 text-3xl font-light">User Login</div>
				<UserLoginIllustration className="h-[350px] min-h-[350px] mx-auto lg:mx-20 mb-28 mt-5 object-cover" />
			</div>
		</>
	);
};

function UserLoginPage() {
	const authGuard = useLocation()?.state?.authGuard;
	const location = useLocation();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	useEffect(() => {
		if (location.pathname === "/login" && user.hasLogged) {
			navigate("/");
		}
	}, []);
	return (
		<div className="flex flex-col mx-auto flex-1 w-full bg-white sm:py-10 sm:bg-gray-100 sm:flex-row sm:justify-center sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-500 sm:h-inherit sm:rounded-xl sm:p-6 sm:rounded-tr-none sm:rounded-br-none">
				<BackButton url="/" color="text-green-100" />
				<Illustration />
			</div>
			<UserLoginForm />
			{authGuard ? <Notification /> : null}
		</div>
	);
}

export default UserLoginPage;
