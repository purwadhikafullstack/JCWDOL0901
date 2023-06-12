import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getInventoryPromotions, generateUrlQuery } from "./handlers/productPromoHandler";

const PromoTableBody = ({ filter, sort, order, page, setMaxPage }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(page, filter, sort, order);
		getInventoryPromotions(localStorage.getItem("token"), query)
			.then(result => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 3));
			})
			.catch(error => {
				alert("Server Unavailable");
			});
	}, [filter, sort, order, page]);

	return datas && <TableBodyContent datas={datas} />;
};

export default PromoTableBody;
