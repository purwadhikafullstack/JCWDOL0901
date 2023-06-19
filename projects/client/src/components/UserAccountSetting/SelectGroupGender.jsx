import React from "react";
import SelectBoxGender from "./SelectBoxGender";
import InputLabel from "../InputGroup/InputLabel";

const SelectGroupGender = ({ name, formik, inputKey }) => {
  return (
    <div className="flex flex-col my-2 w-full">
      <InputLabel name={name} />
      <SelectBoxGender inputKey={inputKey} name={name} formik={formik} />
    </div>
  );
};

export default SelectGroupGender;
