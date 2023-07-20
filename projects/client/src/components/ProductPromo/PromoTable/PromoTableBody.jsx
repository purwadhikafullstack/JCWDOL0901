import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getInventoryPromotions, generateUrlQuery } from "../handlers/productPromoHandler";
import { clearUser } from "../../../redux/reducers/user/userAction.js";
import { useDispatch } from "react-redux";

const PromoTableBody = ({ name, filter, sort, order, page, setMaxPage }) => {
	const [datas, setDatas] = React.useState([]);
	const dispatch = useDispatch();
	
	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filter, sort, order);

		getInventoryPromotions(query)
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

export default PromoTableBody;
