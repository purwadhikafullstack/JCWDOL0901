import React from "react";
import Button from "../Button";

const GreetingMessage = ({ navigate, email }) => {
	return (
		<div className="my-auto mx-auto flex flex-col items-center w-full pb-20">
			<div className="text-xl font-semibold mt-6">Registration Success!</div>
			<img className="w-[200px] my-4" src="/assets/images/email_check.png" />
			<div className="bg-green-100 text-green-500 px-4 py-4 rounded-lg min-w-[65%]">
				<p>Thank you for registering!</p>
				<p>Check your email to verify account.</p>
				<p className="font-bold text-sm mt-2">{email}</p>
				<Button
					name={"Login"}
					onClickHandler={() => navigate("/login", { state: { email } })}
				/>
			</div>
		</div>
	);
};

export default GreetingMessage;
