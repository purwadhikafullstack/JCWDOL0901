import axios from "axios";

export const getAllBranches = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/branch/list`);
};
