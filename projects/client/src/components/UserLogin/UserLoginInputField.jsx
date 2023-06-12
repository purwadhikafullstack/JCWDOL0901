import React from "react";
import InputGroup from "../InputGroup";

function UserLoginInputField() {
  return (
    <div className="flex flex-col items-center min-w-full">
      <InputGroup name="Email" type="email" inputKey="email" formik={formik} />

      <InputGroup name="Password" type="password" inputKey="password" formik={formik} />
    </div>
  );
}

export default UserLoginInputField;
