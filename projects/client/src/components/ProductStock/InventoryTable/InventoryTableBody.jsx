import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { generateUrlQuery, getBranchInventories } from "../handlers/ProductStockHandler.js";
import { clearUser } from "../../../redux/reducers/user/userAction.js";
import { useDispatch } from "react-redux";

const InventoryTableBody = ({ name, filterBy, filter, sort, order, page, setMaxPage }) => {
	const [datas, setDatas] = React.useState([]);
	const dispatch = useDispatch();

	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filterBy, filter, sort, order);

		getBranchInventories(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 3));
			})
			.catch((error) => {
				if (error.response.status === 401 || error.response.status === 403) {
					localStorage.removeItem("token");
					dispatch(clearUser());
				}

				alert(error.message);
			});
	}, [filter, order, page, name]);

	return datas && <TableBodyContent datas={datas} />;
};

export default InventoryTableBody;
