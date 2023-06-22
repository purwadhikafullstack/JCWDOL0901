const { startFindCarts } = require("../services/cartService.js");

const getUserCarts = async (request, response) => {
	await startFindCarts(request.userData)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getUserCarts };
