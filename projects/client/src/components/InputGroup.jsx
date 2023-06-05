import React from "react";
import InputLabel from "./InputGroup/InputLabel";
import InputBox from "./InputGroup/InputBox";

const InputGroup = ({ name, type, required, setInput, inputKey }) => {
	return (
		<div className="flex flex-col my-2 w-full">
			<InputLabel name={name} required={required} />
			<InputBox name={name} type={type} required={required} inputKey={inputKey}  setInput={setInput} />
		</div>
	);
};

export default InputGroup;
