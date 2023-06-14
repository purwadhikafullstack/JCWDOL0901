import React from "react";
import InputGroup from "../InputGroup";

function UserAccountSettingInputField() {
  return (
    <div className="flex flex-col items-center min-w-full">
      <InputGroup name="Name" type="text" inputKey="name" formik={formik} />
      <InputGroup name="Gender" type="select" inputKey="gender" formik={formik} />
      <InputGroup name="Email" type="email" inputKey="email" formik={formik} />
      <InputGroup name="Birthdate" type="date" inputKey="birthdate" formik={formik} />
    </div>
  );
}

export default UserAccountSettingInputField;
