const { startFindCarts, startAddCarts } = require("../services/cartService.js");

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
	await startAddCarts(request)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getUserCarts, addUserCarts };
