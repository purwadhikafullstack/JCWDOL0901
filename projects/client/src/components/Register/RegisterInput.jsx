import React from "react";
import InputGroup from "../InputGroup";

const RegisterInput = () => {
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup formName="Email" formType="email" required={true} />
			<div className="flex flex-row">
				<InputGroup formName="Username" formType="text" required={true} />
				<InputGroup formName="Phone" formType="tel" required={true} />
			</div>
			<InputGroup	formName="Name"	formType="text"	required={true}	/>
			<InputGroup formName="Password" formType="password" required={true} />
			<InputGroup	formName="Confirm Password"	formType="password"	required={true}	/>
			<InputGroup formName="Referral code" formType="text" required={false} />
		</div>
	);
};

export default RegisterInput;
