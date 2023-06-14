import React from "react";
import InputGroup from "../InputGroup";
import SelectGroup from "../SelectGroup";
import { handleOptionsGetter } from "../UserLogin/handlers/userLoginHandler";

function UserAccountSettingInputField({formik}) {
  return (
    <div className="flex flex-col items-center min-w-full">
      <InputGroup name="Name" type="text" inputKey="name" formik={formik} />
      <SelectGroup name="Gender" inputKey="gender" formik={formik} getter={handleOptionsGetter} />
      <InputGroup name="Email" type="email" inputKey="email" formik={formik} />
      <InputGroup name="Birthdate" type="date" inputKey="birthdate" formik={formik} />
    </div>
  );
}

export default UserAccountSettingInputField;
