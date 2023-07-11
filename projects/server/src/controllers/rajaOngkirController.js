const { startFindLogisticFee } = require("../services/rajaOngkirService");

const postRajaOngkirCost = async (request, response) => {
	const { branch_city_id, city_id, weight } = request.payload;

	await startFindLogisticFee(branch_city_id, city_id, weight)
		.then((result) => {
			return response.status(200).send(result);
		})
		.catch((error) => {
			return response.status(400).send("bad request");
		});
};

module.exports = { postRajaOngkirCost };
