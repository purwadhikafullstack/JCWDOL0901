const {
	startFindCarts,
	startAddCarts,
	startUpdateCarts,
	startDeleteCarts,
	startClearCart,
} = require("../services/cartService.js");

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
	await startAddCarts(request.userData, request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const updateUserCarts = async (request, response) => {
	await startUpdateCarts(request.userData, request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const deleteUserCarts = async (request, response) => {
	await startDeleteCarts(request.userData, request.params)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const clearCart = async (request, response) => {
	await startClearCart(request.userData)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getUserCarts, addUserCarts, updateUserCarts, deleteUserCarts, clearCart };
