const { startFindCities } = require("../services/dataService");

const getCities = async (request, response) => {
	const { filter, order, page } = request.query;

	await startFindCities()
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getCities };
