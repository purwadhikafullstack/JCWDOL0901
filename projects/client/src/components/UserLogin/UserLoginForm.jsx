import React from "react";
import ErrorWarning from "../ErrorWarning";
import UserLoginFormWithValidator from "./UserLoginFormWithValidator";
import CompanyLogo from "../CompanyLogo";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full">
			<button
				className="my-10 py-2 w-48 border border-2 border-green-200 rounded-lg text-green-300"
				onClick={() => {
					navigate("/password/forgot");
				}}
			>
				Forgot Password?
			</button>
		</div>
	);
};

const SignUpLink = () => {
	const navigate = useNavigate();
	return (
		<div className="mb-10">
			Don't have an account?{" "}
			<span
				className="text-green-400 hover:underline cursor-pointer font-semibold"
				onClick={() => navigate("/register")}
			>
				Sign up
			</span>
		</div>
	);
};

function UserLoginForm() {
	const [error, setError] = React.useState("");

	return (
		<div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
			<CompanyLogo color={true} className="w-[100px] hidden sm:block sm:mb-4" />
			<ErrorWarning error={error} />
			<UserLoginFormWithValidator setError={setError} />
			<ForgotPassword />
			<SignUpLink />
		</div>
	);
}

export default UserLoginForm;
