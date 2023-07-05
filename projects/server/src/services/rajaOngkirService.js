const request = require("request");
const axios = require("axios");
const { rajaOngkirErrorHandler } = require("../errors/serviceError.js");

const getFeeByCourier = async (branch_city_id, city_id, weight, courier) => {
	return new Promise(async (resolve, reject) => {
		await axios
			.post(`${process.env.RAJAONGKIR_API_URL}/cost`, {
				key: `${process.env.RAJAONGKIR_API_KEY}`,
				origin: branch_city_id,
				destination: city_id,
				weight,
				courier,
			})
			.then((result) => {
				resolve(...result.data.rajaongkir.results);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

module.exports = {
	startFindLogisticFee: async (branch_city_id, city_id, weight) => {
		return new Promise(async (resolve, reject) => {
			try {
				const jne = await getFeeByCourier(branch_city_id, city_id, weight, "jne");
				const pos = await getFeeByCourier(branch_city_id, city_id, weight, "pos");
				const tiki = await getFeeByCourier(branch_city_id, city_id, weight, "tiki");

				return resolve([jne, pos, tiki]);
			} catch (error) {
				return reject();
			}
		});
	},
};
