import React from "react";
import InputGroup from "../InputGroup";
import RowSpace from "../RowSpace";

const RegisterInput = ({ setInput }) => {
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup formName="Email" formType="email" setInput={setInput} required={true} />
			<div className="flex flex-row">
				<InputGroup formName="Username" formType="text" setInput={setInput} required={true} />
				<RowSpace />
				<InputGroup formName="Phone" formType="tel" setInput={setInput} required={true} />
			</div>
			<InputGroup formName="Name" formType="text" setInput={setInput} required={true} />
			<InputGroup formName="Password" formType="password" setInput={setInput} required={true} />
			<InputGroup	formName="Confirm Password"	formType="password" setInput={setInput}	required={true}	/>
			<InputGroup formName="Referral code" formType="text" setInput={setInput} required={false} />
		</div>
	);
};

export default RegisterInput;
