const { startGetUserAddresses, startGetDefaultAddress } = require("../services/addressService");

const getAddresses = async (request, response) => {
	await startGetUserAddresses(request.userData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getDefaultAddress = async (request, response) => {
	await startGetDefaultAddress(request.userData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = {
	getAddresses,
	getDefaultAddress,
};
