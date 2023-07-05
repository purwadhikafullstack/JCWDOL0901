<<<<<<< HEAD
const { startFindDefaultAddress, startFindUserAddresses } = require("../services/addressService.js");

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

const getAddresses = async (request, response) => {
	const filter = { user_id: request.userData.id };

	await startFindUserAddresses(filter)
=======
const {
	startGetUserAddresses,
	startGetDefaultAddress,
	startCreateAddress,
	startUpdateAddress,
	startSetDefaultAddress,
	startDeleteAddress,
} = require("../services/addressService");

const getAddresses = async (request, response) => {
	await startGetUserAddresses(request.userData.id)
>>>>>>> development
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

<<<<<<< HEAD
module.exports = { getDefaultAddress, getAddresses };
=======
const getDefaultAddress = async (request, response) => {
	await startGetDefaultAddress(request.userData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const createAddress = async (request, response) => {
	await startCreateAddress(request.userData.id, request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const updateAddress = async (request, response) => {
	await startUpdateAddress(request.userData.id, request.body, request.params.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const setDefaultAddress = async (request, response) => {
	await startSetDefaultAddress(request.userData.id, request.params.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const deleteAddress = async (request, response) => {
	await startDeleteAddress(request.userData.id, request.params.id)
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
	createAddress,
	updateAddress,
	setDefaultAddress,
	deleteAddress,
};
>>>>>>> development
