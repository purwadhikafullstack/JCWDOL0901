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
	startAddCarts: async (userData, body) => {
		return new Promise(async (resolve, reject) => {
			try {
				const {inventory_id, quantity} = body;
				const Carts = await addCartQuery(userData.id, inventory_id, quantity);

				return await resolve(Carts);
			} catch (error) {
				console.log("error cartService: ", error);
				return await reject(await startCreateErrorHandler(error));
			}
		});
	},
};
