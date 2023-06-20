const request = require("request");

const headers = {
	key: `${process.env.RAJAONGKIR_API_KEY}`,
	"content-type": "application/x-www-form-urlencoded",
};

module.exports = {
	getRajaOngkirLogisticFee: async (branch_city_id, city_id, weight, courier) => {
		return new Promise(async (resolve, reject) => {
			const options = {
				method: "POST",
				url: `${process.env.RAJAONGKIR_API_URL}/cost`,
				headers,
				form: { origin: branch_city_id, destination: city_id, weight, courier },
			};

			await request(options, (error, response, body) => {
				if (error) return reject(error);

				return resolve(body);
			});
		});
	},
};
