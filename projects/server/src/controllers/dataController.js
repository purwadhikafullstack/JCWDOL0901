const {
	startFindCities,
	startFindProvinces,
	startFindCitiesInProvince,
} = require("../services/dataService");

const getCities = async (request, response) => {
	await startFindCities()
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

const getProvinces = async (request, response) => {
	await startFindProvinces()
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

const getCitiesInProvince = async (request, response) => {
	const { province_id } = request.params;

	await startFindCitiesInProvince(province_id)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getCities, getProvinces, getCitiesInProvince };
