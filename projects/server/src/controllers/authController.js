const { startUserRegistration, startVerification } = require("../services/authService");

const registerUser = async (request, response) => {
	await startUserRegistration(request.body)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

const verifyUser = async (request, response) => {
	await startVerification(request.params.token)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { registerUser, verifyUser };
