const { Cities, Provinces } = require("../models/index.js");
const { startFindErrorHandler } = require("../errors/serviceError.js");

const readCitiesQuery = async () => {
	return await Cities.findAll();
};

const readProvincesQuery = async () => {
	return await Provinces.findAll();
};

const readCitiesInProvinceQuery = async province_id => {
	return await Cities.findAll({
		where: { province_id },
	});
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
	startFindProvinces: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const provinces = await readProvincesQuery();

				return resolve(provinces);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindCitiesInProvince: async province_id => {
		return new Promise(async (resolve, reject) => {
			try {
				const cities = await readCitiesInProvinceQuery(province_id);

				return resolve(cities);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
