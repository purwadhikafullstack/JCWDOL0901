const { startFindUserVouchers } = require("../services/voucherService.js");

const getUserVouchers = async (request, response) => {
	const { id } = request.userData;

	await startFindUserVouchers(id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getUserVouchers };
