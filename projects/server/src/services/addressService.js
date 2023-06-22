const { startFindErrorHandler } = require("../errors/serviceError.js");
const { readDefaultAddressQuery, readAddressQuery } = require("../queries/Addresses.js");

module.exports = {
	startFindDefaultAddress: async (filter) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Address = await readDefaultAddressQuery(filter);

				return await resolve(Address);
			} catch (error) {
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindUserAddresses: async (filter) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Addresses = await readAddressQuery(filter);

				return await resolve(Addresses);
			} catch (error) {
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
};
