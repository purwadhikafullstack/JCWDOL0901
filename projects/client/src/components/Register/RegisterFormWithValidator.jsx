import React from "react";
import RegisterInput from "./RegisterInput";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { registerButtonHandler } from "./handlers/registerHandler";

const RegisterFormWithValidator = ({ setError }) => {
	const [input, setInput] = React.useState({});
	const [busy, setBusy] = React.useState(false);
	const navigate = useNavigate();

	return (
		<form>
			<RegisterInput setInput={setInput} />
			<Button
				type="button"
				name="Register"
				disabled={busy}
				onClickHandler={() =>
					registerButtonHandler(input, setError, setBusy, navigate)
				}
			/>
		</form>
	);
};

export default RegisterFormWithValidator;
