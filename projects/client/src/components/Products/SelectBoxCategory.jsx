import React, { useState } from "react";
import FormikError from "../InputGroup/FormikError";
import { getProductsOnly } from "./handlers/manageProductsHandler";
import axios from "axios";

const Options = ({ datas }) => {
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

	const getCategories = () => {
		return new Promise(async (resolve, reject) => {
			try {
				const Categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/category/list`);
				resolve(Categories.data.rows);
			} catch (error) {
				reject(error);
			}
		});
	};

	React.useEffect(() => {
		getCategories()
			.then((result) => {
				setDatas(result);
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
