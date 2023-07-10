const { startFindErrorHandler, startCreateErrorHandler } = require("../errors/serviceError");
const { readCartQuery, addCartQuery } = require("../queries/Carts.js");

module.exports = {
	startFindCarts: async (userData) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Carts = await readCartQuery({ user_id: userData.id });

				return await resolve(Carts);
			} catch (error) {
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
	startAddCarts: async (userProduct) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Carts = await addCartQuery(userProduct);

				return await resolve(Carts);
			} catch (error) {
				return await reject(await startCreateErrorHandler(error));
			}
		});
	},
};
