const {
	startUserRegistration,
	startFindAdmins,
} = require("../services/authService");

const registerUser = async (request, response) => {
	await startUserRegistration(request.body)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

const getAdmins = async (request, response) => {
	const { filter, order, page } = request.query;

	await startFindAdmins(filter, order, page)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { registerUser, getAdmins };
