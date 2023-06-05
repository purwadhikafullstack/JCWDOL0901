import React from "react";
import RegisterInput from "./RegisterInput";
import Button from "../Button.jsx";
import RegisterRedirectButton from "./RegisterRedirectButton";


const RegisterForm = () => {
	const[input, setInput] = React.useState({});

	return (
		<div className="mt-auto items-center w-full flex flex-col pb-10 pt-4 px-6">
			<RegisterInput setInput={setInput} />
			<Button name="Register" />
			<RegisterRedirectButton />
		</div>
	);
};

export default RegisterForm;
