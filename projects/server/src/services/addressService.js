const {
	startGetUserAddressesErrorHandler,
	startDeleteteHandler,
	startUpdateErrorHandler,
	startCreateHandler,
} = require("../errors/serviceError");
const { sequelize } = require("../models");
const {
	getUserAddressesQuery,
	getDefaultAddressQuery,
	createAddressQuery,
	updateAddressQuery,
	resetDefaultAddressQuery,
	setDefaultAddressQuery,
	deleteAddressQuery,
} = require("../queries/Addresses");
const { readCityQuery } = require("../queries/Data");
const { getCoordinates } = require("../utils/opencage");

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
		return new Promise(async (resolve, reject) => {
			try {
				const { label, city_id, address } = body;
				const city = await readCityQuery(city_id);
				const { latitude, longitude } = await getCoordinates(city.type, city.name, city.Province.name);
				const is_default = false;
				const result = await createAddressQuery(
					user_id,
					label,
					city_id,
					address,
					latitude,
					longitude,
					is_default,
				);

				return resolve(result);
			} catch (error) {
				console.log(error);
				return reject(await startCreateHandler(error));
			}
		});
	},
	startUpdateAddress: async (user_id, body, id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const { label, city_id, address, latitude, longitude } = body;
				const result = await updateAddressQuery(id, user_id, label, city_id, address, latitude, longitude);

				return resolve(result);
			} catch (error) {
				return reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startSetDefaultAddress: async (user_id, id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const resetResult = await resetDefaultAddressQuery(user_id, (is_default = false), transaction);
				const result = await setDefaultAddressQuery(id, user_id, (is_default = true), transaction);

				await transaction.commit();
				return resolve(result);
			} catch (error) {
				await transaction.rollback();
				return reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startDeleteAddress: async (user_id, id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await deleteAddressQuery(id, user_id);
				if (!result) throw "No rows deleted";
				return resolve({
					status: 200,
					message: "Category deleted successfully",
				});
			} catch (error) {
				return reject(await startDeleteteHandler(error));
			}
		});
	},
};
