const { startUserRegistration } = require("../services/authService");

const registerUser = async (request, response) => {
	await startUserRegistration(request.body)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { registerUser };
