import React, { useEffect } from "react";
import BackButton from "../../components/BackButton.jsx";
import RegisterIllustration from "../../components/Register/RegisterIllustration.jsx";
import RegisterForm from "../../components/Register/RegisterForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Illustration = () => {
	return (
		<>
			<div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
				<div className="mt-10 mr-auto ml-6 text-3xl font-semibold">Register</div>
				<RegisterIllustration className="w-[250px] mr-auto ml-auto pr-4" />
			</div>
			<div className="hidden h-full mx-12 shrink-0 sm:flex sm:flex-col sm:justify-center">
				<div className="mb-4 text-green-100 text-3xl font-light">Create an account.</div>
				<RegisterIllustration className="min-w-[400px] w-[400px]" />
			</div>
		</>
	);
};

const RegisterPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	useEffect(() => {
		if (location.pathname === "/register" && user.hasLogged) {
			navigate("/");
		}
	}, []);
	return (
		<div className="flex flex-col mx-auto flex-1 w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-10 sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
			<CircularBackgroundDecoration />
			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 sm:h-inherit sm:rounded-xl sm:p-6">
				<BackButton url="/" color="text-green-100" />
				<Illustration />
			</div>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
