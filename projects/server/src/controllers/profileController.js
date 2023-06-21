const {
	startUserProfileUpdate,
	startGetUserProfile,
	startUpdateAvatar,
	startGetAvatar,
} = require("../services/profileService");

const updateProfile = async (request, response) => {
	await startUserProfileUpdate(request.body, request.userData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getProfile = async (request, response) => {
	await startGetUserProfile(request.userData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const updateAvatar = async (request, response) => {
	console.log("req.file controller: ", request.file);
	console.log("req.id controller: ", request.userData.id);
	await startUpdateAvatar(request.file, request.userData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			console.log("error controller: ", error);
			response.status(error.code).send(error.message);
		});
};

const getAvatar = async (request, response) => {
	await startGetAvatar(request.userData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = {
	updateProfile,
	getProfile,
	updateAvatar,
	getAvatar,
};
