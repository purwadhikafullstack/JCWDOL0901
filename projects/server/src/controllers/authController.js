const { getUserProfileQuery } = require("../queries/Profiles");
const {
	startUserRegistration,
	startFindAdmins,
	startAdminRegistration,
	startVerification,
	startAdminLoginAuthentication,
	startUserLoginAuthentication,
	startUpdatePassword,
	startForgotPasswordVerification,
	startResetPassword,
} = require("../services/authService");
const { verifyJWToken } = require("../utils/jsonwebtoken");

const registerUser = async (request, response) => {
	await startUserRegistration(request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getAdmins = async (request, response) => {
	const { filter, order, page } = request.query;

	await startFindAdmins(filter, order, page)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const registerAdmin = async (request, response) => {
	await startAdminRegistration(request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const loginAdmin = async (request, response) => {
	await startAdminLoginAuthentication(request.body, "Admins")
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const loginUser = async (request, response) => {
	await startUserLoginAuthentication(request.body, "Users")
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const verifyUser = async (request, response) => {
	await startVerification(request.params.token)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const isSuper = async (request, response) => {
	try {
		if (!request.headers.authorization) throw "Missing token!";
		const token = await verifyJWToken(request.headers.authorization, process.env.JWT_ADMIN_SECRET_KEY);
		response.status(200).send(token);
	} catch (error) {
		response.status(403).send({ message: error });
	}
};

const updatePassword = async (request, response) => {
	await startUpdatePassword(request.userData.id, request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const forgotPassword = async (request, response) => {
	await startForgotPasswordVerification(request.body)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const resetPassword = async (request, response) => {
	await startResetPassword(request.body, request.params.token)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const isUserLogged = async (request, response) => {
	try {
		if (!request.headers.authorization) throw "Missing token!";
		const token = await verifyJWToken(request.headers.authorization, process.env.JWT_USER_SECRET_KEY);
		const userData = await getUserProfileQuery(token.id);
		response.status(200).send({ token, ...userData });
	} catch (error) {
		response.status(403).send({ message: error });
	}
};

module.exports = {
	registerUser,
	getAdmins,
	registerAdmin,
	verifyUser,
	loginAdmin,
	loginUser,
	isSuper,
	updatePassword,
	forgotPassword,
	resetPassword,
	isUserLogged,
};
