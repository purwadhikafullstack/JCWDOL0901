const { startFindCarts, startAddCarts, startUpdateCarts, startDeleteCarts } = require("../services/cartService.js");

const getUserCarts = async (request, response) => {
	await startFindCarts(request.userData)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};
const addUserCarts = async (request, response) => {
	console.log("request.body cartController: ", request.body);
	await startAddCarts(request.userData, request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const updateUserCarts = async (request, response) => {
	console.log("request.body cartController: ", request.body);
	await startUpdateCarts(request.userData, request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};
const deleteUserCarts = async (request, response) => {
	console.log("request id cartController: ", request.userData);
	console.log("request params cartController: ", request.params);
	await startDeleteCarts(request.userData, request.params)
	.then((result) => {
		response.status(200).send(result);
	})
	.catch((error) => {
			console.log("error cartController: ", error);
			response.status(error.code).send(error.message);
		});
};

module.exports = { getUserCarts, addUserCarts, updateUserCarts, deleteUserCarts };
