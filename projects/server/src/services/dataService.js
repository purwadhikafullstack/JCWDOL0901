const { startFindErrorHandler } = require("../errors/serviceError.js");
const {
	readCitiesQuery,
	readCityQuery,
	readProvincesQuery,
	readCitiesInProvinceQuery,
	readBranchQuery,
	readStatusesQuery,
} = require("../queries/Data.js");
const { readPromotionQuery } = require("../queries/Promotions.js");

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
	startFindCity: async (city_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const city = await readCityQuery(city_id);
				return resolve(city);
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
	startFindCitiesInProvince: async (province_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const cities = await readCitiesInProvinceQuery(province_id);

				return resolve(cities);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindBranch: async (branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				if (branch_id === 0)
					return resolve({
						name: "Groseria Pusat",
						City: {
							name: "Jakarta Pusat",
							type: "Kota",
							Province: {
								name: "DKI Jakarta",
							},
						},
					});
				const branch = await readBranchQuery(branch_id);
				return resolve(branch);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindPromotions: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const Promotions = await readPromotionQuery();

				return resolve(Promotions);
			} catch (error) {
				return reject(startFindErrorHandler(error));
			}
		});
	},
	startFindStatuses: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const Statuses = await readStatusesQuery();

				return resolve(Statuses);
			} catch (error) {
				return reject(startFindErrorHandler(error));
			}
		});
	},
};
