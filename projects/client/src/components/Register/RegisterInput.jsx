import React from "react";
import InputGroup from "../InputGroup";
import RowSpace from "../RowSpace";

const RegisterInput = ({ setInput }) => {
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup name="Email" type="email" inputKey="email" setInput={setInput} required={true} />
			<div className="flex flex-row">
				<InputGroup name="Username" type="text" inputKey="username" setInput={setInput} required={true} />
				<RowSpace />
				<InputGroup name="Phone" type="tel" inputKey="phone" setInput={setInput} required={true} />
			</div>
			<InputGroup name="Name" type="text" inputKey="name" setInput={setInput} required={true} />
			<InputGroup name="Password" type="password" inputKey="password" setInput={setInput} required={true} />
			<InputGroup	name="Confirm Password"	type="password" inputKey="confirm_password" setInput={setInput}	required={true}	/>
			<InputGroup name="Referral code" type="text" inputKey="reference" setInput={setInput} required={false} />
		</div>
	);
};

export default RegisterInput;
