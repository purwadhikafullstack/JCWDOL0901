import React from "react";
import DropDown from "./DropDown";

export const getEmptyPromise = () => {
	return new Promise((resolve, reject) => {
		resolve();
	});
};

const DisabledDropDown = () => {
	return <DropDown data="" setter={null} getter={getEmptyPromise} disabled={true} />;
};

export default DisabledDropDown;
