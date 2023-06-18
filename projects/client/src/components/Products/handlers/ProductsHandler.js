import axios from "axios";

export const getProducts = (page, itemPerPage, branch_id) => {
	return axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/product/list?page=${page}&itemPerPage=${itemPerPage}&branch_id=${branch_id}`,
	);
};
