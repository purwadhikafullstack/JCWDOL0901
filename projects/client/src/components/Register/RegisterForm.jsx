import React from "react";
import RegisterInput from "./RegisterInput";
import Button from "../Button.jsx";
import RegisterRedirectButton from "./RegisterRedirectButton";

const RegisterForm = () => {
	return (
		<div className="mt-auto items-center w-full flex flex-col bg-white rounded-t-3xl pb-24 pt-2 px-6">
			<RegisterInput />
			<Button name="Register" />
			<RegisterRedirectButton />
		</div>
	);
};

export default RegisterForm;
