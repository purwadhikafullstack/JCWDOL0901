import React, { useState } from "react";
import FormikError from "../InputGroup/FormikError";
import { generateUrlQuery, getCategories } from "../Category/handlers/categoryHandler";
import { getProductsOnly } from "./handlers/manageProductsHandler";

const Options = ({datas}) => {

	return datas.map((item, index) => {
		return (
			<option value={item.id} key={index}>
				{item.name}
			</option>
		);
	});
};

function SelectBoxCategory({ name, inputKey, formik }) {
	const [datas, setDatas] = React.useState([]);
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [order, setOrder] = useState("");
	const itemPerPage = window.innerWidth > 640 ? 6 : 6;

	React.useEffect(() => {
		const query = generateUrlQuery(page, itemPerPage, filter, sort, order);
	  getCategories(localStorage.getItem("token"), query)
		.then((result) => {
		  setDatas(result.data.rows);
		})
		.catch((error) => alert("Server Unavailable"));
	}, []); 

	return (
		<div className="relative z-10">
			<select
				name={inputKey}
				id={name}
				onChange={formik?.handleChange}
				onBlur={formik?.handleBlur}
				value={formik?.values[inputKey]}
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
			>
				<Options datas={datas} />
			</select>
			<FormikError formik={formik} inputKey={inputKey} />
		</div>
	);
}

export default SelectBoxCategory;
