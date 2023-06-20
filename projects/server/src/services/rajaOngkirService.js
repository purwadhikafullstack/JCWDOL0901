const request = require("request");

const { rajaOngkirErrorHandler } = require("../errors/serviceError.js");

const headers = {
	key: `${process.env.RAJAONGKIR_API_KEY}`,
	"content-type": "application/x-www-form-urlencoded",
};

module.exports = {
	startFindLogisticFee: async (branch_city_id, city_id, weight, courier) => {
		return new Promise(async (resolve, reject) => {
			const options = {
				method: "POST",
				url: `${process.env.RAJAONGKIR_API_URL}/cost`,
				headers,
				form: { origin: branch_city_id, destination: city_id, weight, courier },
			};

			await request(options, async (error, response, body) => {
				const parsedBody = await JSON.parse(body);
				const statusCode = parsedBody.rajaongkir.status.code;

				if (statusCode !== 200) return reject(await rajaOngkirErrorHandler(parsedBody));

				return resolve(parsedBody);
			});
		});
	},
};
