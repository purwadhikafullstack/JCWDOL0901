const { startUserProfileUpdate, startGetUserProfile, startUpdateAvatar } = require("../services/profileService");

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
	console.log("request updateAvatar ctrller : ", request);
	// console.log("req file updateAvatar ctrller: ", request.file);
	// console.log("req userData.id updateAvatar ctrller: ", request.userData.id);
	// console.log("req filePath updateAvatar ctrller: ", request.file.path);
	await startUpdateAvatar(request.file, request.userData.id)
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
};
