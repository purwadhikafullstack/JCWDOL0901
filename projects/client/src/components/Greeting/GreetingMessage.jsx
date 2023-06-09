import React from "react";
import Button from "../Button";
import SuccessBox from "../SuccessBox";

const GreetingMessage = ({ navigate, email }) => {
	return (
		<div className="my-auto mx-auto flex flex-col items-center w-full pb-20">
			<div className="text-xl font-semibold mt-6">Registration Success!</div>
			<img className="w-[200px] my-12" src="/assets/images/email_check.png" />
			<SuccessBox>
				<p>Thank you for registering!</p>
				<p>Check your email to verify account.</p>
				<p className="font-bold text-sm mt-2">{email}</p>
				<Button
					name={"Login"}
					onClickHandler={() => navigate("/login", { state: { email } })}
				/>
			</SuccessBox>
		</div>
	);
};

export default GreetingMessage;
