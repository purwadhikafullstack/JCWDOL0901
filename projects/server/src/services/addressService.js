const { startGetUserAddressesErrorHandler } = require("../errors/serviceError");
const { getUserAddressesQuery, getDefaultAddressQuery, createAddressQuery } = require("../queries/Addresses");

module.exports = {
	startGetUserAddresses: async (user_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await getUserAddressesQuery(user_id);

				return resolve(result);
			} catch (error) {
				return reject(await startGetUserAddressesErrorHandler(error));
			}
		});
	},
	startGetDefaultAddress: async (user_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await getDefaultAddressQuery(user_id);

				return resolve(result);
			} catch (error) {
				return reject(await startGetUserAddressesErrorHandler(error));
			}
		});
	},
	startCreateAddress: async (user_id, body) => {
		const { label, city_id, address, latitude, longitude } = body;
		return new Promise(async (resolve, reject) => {
			try {
				const result = await createAddressQuery(user_id, label, city_id, address, latitude, longitude);

				return resolve(result);
			} catch (error) {
				return reject(await startGetUserAddressesErrorHandler(error));
			}
		});
	},
};
