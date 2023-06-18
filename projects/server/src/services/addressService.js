const { startFindErrorHandler } = require("../errors/serviceError.js");
const { readDefaultAddressQuery } = require("../queries/Addresses.js");

module.exports = {
	startFindDefaultAddress: async (filter) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Address = await readDefaultAddressQuery(filter);

				return await resolve(Address);
			} catch (error) {
				console.log(error);
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
};
