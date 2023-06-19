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
    <div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
      <ErrorWarning error={error} />
      <h3 className="border-b px-5 pb-1 mx-auto text-lg font-medium leading-6 text-gray-900">
        Personal Information
      </h3>
      <hr className="h-5" />
      {user && <UserAccountSettingFormWithValidator setError={setError} user={user} />}
    </div>
  );
}

export default UserAccountSettingForm;
