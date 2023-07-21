import React from "react";
import InputGroup from "../InputGroup";
import SelectGroup from "../SelectGroup";
import { getPromotionsType } from "../ProductPromo/handlers/productPromoHandler";
import { getBranchInventories } from "./handlers/createProductPromoHandler";

const CreateProductPromoInputField = ({ formik }) => {
	return (
		<div className="flex flex-col items-center max-w-[360px]">
			<SelectGroup name="Inventory" getter={getBranchInventories} inputKey="inventory_id" formik={formik} />
			<SelectGroup name="Promotion" getter={getPromotionsType} inputKey="promotion_id" formik={formik} />
			<InputGroup name="Value" type="number" inputKey="value" formik={formik} />
			<InputGroup name="Start Date" type="date" inputKey="start_at" formik={formik} />
			<InputGroup name="End Date" type="date" inputKey="expired_at" formik={formik} />
		</div>
	);
};

export default CreateProductPromoInputField;
