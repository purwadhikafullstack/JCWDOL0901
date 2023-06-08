const { startFindErrorHandler } = require("../errors/serviceError");
const { determineNearestBranch } = require("../helpers/geolocationHelper.js");
const { readBranchQuery } = require("../queries/Branches.js");

module.exports = {
	startFindNearestBranch: async userGeolocation => {
		return new Promise(async (resolve, reject) => {
			try {
				const Branch = await readBranchQuery();
				const nearestBranch = determineNearestBranch(Branch, userGeolocation);

				return resolve(nearestBranch);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
