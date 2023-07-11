import React from "react";
import { Link } from "react-router-dom";

const RegisterRedirectButton = () => {
	return (
		<div className="flex flex-row mt-6">
			<span className="mr-2 font-normal text-normal">Already have an account?</span>
			<Link to="/login">
				<span className="text-green-300 font-semibold hover:underline">Login</span>
			</Link>
		</div>
	);
};

export default RegisterRedirectButton;
