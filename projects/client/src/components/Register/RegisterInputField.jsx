import React from "react";
import InputGroup from "../InputGroup";
import RowSpace from "../RowSpace";

const RegisterInputField = ({ formik }) => {
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup name="Email" type="email" inputKey="email" formik={formik} />
			<div className="flex flex-row">
				<InputGroup name="Username" type="text" inputKey="username" formik={formik} />
				<RowSpace />
				<InputGroup name="Phone" type="tel" inputKey="phone" formik={formik} />
			</div>
			<InputGroup name="Name" type="text" inputKey="name" formik={formik} />
			<InputGroup name="Password" type="password" inputKey="password" formik={formik} />
			<InputGroup
				name="Confirm Password"
				type="password"
				inputKey="confirm_password"
				formik={formik}
			/>
			<InputGroup name="Referral code" type="text" inputKey="reference" formik={formik} />
		</div>
	);
};

export default RegisterInputField;
