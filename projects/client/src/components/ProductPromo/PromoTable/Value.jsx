import React from "react";
import { toCurrency } from "../../../helper/currency";

const Value = ({ promotion_id, value }) => {
	if (promotion_id === 2) {
		return <span>{toCurrency(value)}</span>;
	} else if (promotion_id === 3) {
		return <span>{value}%</span>;
	} else if (promotion_id === 4) {
		return <span>1</span>;
	}
};

export default Value;
