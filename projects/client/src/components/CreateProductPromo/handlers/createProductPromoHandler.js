import axios from "axios";

export const getBranchInventories = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const Inventories = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/admin/inventory/list`,
				{
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}
			);

			resolve({ data: Inventories.data.rows });
		} catch (error) {
			reject(error);
		}
	});
};

export const createInventoryPromotion = input => {
	return axios.post(`${process.env.REACT_APP_API_BASE_URL}/admin/promo/create`, input, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};
