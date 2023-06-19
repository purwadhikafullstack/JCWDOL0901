const { startGetUserProfileErrorHandler, startUpdateAvatarErrorHandler } = require("../errors/serviceError");
const { updateUserProfileQuery, getUserProfileQuery, updateAvatarQuery } = require("../queries/Profiles");

module.exports = {
	startUserProfileUpdate: async (body, id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await updateUserProfileQuery(body, id);

				return resolve(result);
			} catch (error) {
				return reject(await startGetUserProfileErrorHandler(error));
			}
		});
	},

	startGetUserProfile: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await getUserProfileQuery(id);

				return resolve("result: ", result);
			} catch (error) {
				return reject(await startGetUserProfileErrorHandler(error));
			}
		});
	},

	startUpdateAvatar: async (file, id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await updateAvatarQuery(file, id);
				// console.log(result);
				return resolve(result);
			} catch (error) {
				return reject(await startUpdateAvatarErrorHandler(error));
			}
		});
	},
};
