import axios from "axios";

export const getNearestBranch = (latitude, longitude) => {
	return axios.post(`${process.env.REACT_APP_API_BASE_URL}/branch/nearest`, {
		latitude,
		longitude,
	});
};
