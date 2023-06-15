import React from "react";
import TableBodyContent from "./TableBodyContent.jsx";
import { getInventoryPromotions, generateUrlQuery } from "../handlers/productPromoHandler";

const PromoTableBody = ({ name, filter, sort, order, page, setMaxPage }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filter, sort, order);
		getInventoryPromotions(query)
			.then(result => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 5));
			})
			.catch(error => alert("Server Unavailable"));
	}, [filter, sort, order, page, name]);

	return datas && <TableBodyContent datas={datas} />;
};

export default PromoTableBody;
