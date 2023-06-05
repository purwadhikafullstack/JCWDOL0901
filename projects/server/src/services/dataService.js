const { Cities } = require("../models/index.js");
const { startFindErrorHandler } = require("../errors/serviceError.js");

const readCitiesQuery = async () => {
	return await Cities.findAll();
};

module.exports = {
	startFindCities: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const cities = await readCitiesQuery();

				return resolve(cities);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
