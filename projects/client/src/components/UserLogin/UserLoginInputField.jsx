import React from "react";
import InputGroup from "../InputGroup";

function UserLoginInputField({formik}) {
  return (
    <div className="flex flex-col items-center min-w-full">
      <InputGroup name="Email / Username" type="email" inputKey="user" formik={formik} />

      <InputGroup name="Password" type="password" inputKey="password" formik={formik} />
    </div>
  );
}

export default UserLoginInputField;
