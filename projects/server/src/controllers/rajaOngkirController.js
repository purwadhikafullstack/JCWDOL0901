const { startFindLogisticFee } = require("../services/rajaOngkirService");

const postRajaOngkirCost = async (request, response) => {
	const { branch_city_id, city_id, weight, courier } = request.payload;

	await startFindLogisticFee(branch_city_id, city_id, weight, courier)
		.then((data) => {
			response.status(200).send(data.rajaongkir.results);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { postRajaOngkirCost };
