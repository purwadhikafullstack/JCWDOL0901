const { startFindDefaultAddress } = require("../services/addressService.js");

const getDefaultAddress = async (request, response) => {
	const filter = { user_id: request.userData.id, default: true };

	await startFindDefaultAddress(filter)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getDefaultAddress };
