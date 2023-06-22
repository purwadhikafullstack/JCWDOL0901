const { startFindErrorHandler } = require("../errors/serviceError.js");
const { readUserVouchersQuery } = require("../queries/User_vouchers.js");

module.exports = {
	startFindUserVouchers: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const UserVouchers = await readUserVouchersQuery(id);

				return await resolve(UserVouchers);
			} catch (error) {
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
};
