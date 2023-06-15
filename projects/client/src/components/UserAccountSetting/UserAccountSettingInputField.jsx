import React from "react";
import InputGroup from "../InputGroup";
import SelectGroupGender from "./SelectGroupGender";

const getter = [
  { id: "M", name: "Male" },
  { id: "F", name: "Female" },
];

function UserAccountSettingInputField({ formik }) {
  return (
    <div className="flex flex-col items-center min-w-full">
      <InputGroup name="Name" type="text" inputKey="name" formik={formik} />
      <SelectGroupGender name="Gender" inputKey="gender" formik={formik} getter={getter} />
      <InputGroup name="Email" type="email" inputKey="email" formik={formik} />
      <InputGroup name="Birthdate" type="date" inputKey="birth" formik={formik} />
    </div>
  );
}

export default UserAccountSettingInputField;
