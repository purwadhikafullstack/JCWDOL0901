import React, { useEffect, useState } from "react";
import ErrorWarning from "../ErrorWarning";
import UserAccountSettingFormWithValidator from "./UserAccountSettingFormWithValidator";
import axios from "axios";

function UserAccountSettingForm() {
	const [error, setError] = React.useState("");

	const [user, setUser] = useState();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_BASE_URL}/profile`, {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			})
			.then((result) => {
				setUser(result.data);
			})
			.catch();
	}, []);

	return (
		<div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 pb-4 sm:pb-8 sm:pt-1 sm:justify-center sm:rounded-r-xl sm:mx-7">
			<ErrorWarning error={error} />
			<hr className="h-5" />
			{user && <UserAccountSettingFormWithValidator setError={setError} user={user} />}
		</div>
	);
}

export default UserAccountSettingForm;
