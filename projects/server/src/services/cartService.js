const { startFindErrorHandler } = require("../errors/serviceError");
const { readCartQuery } = require("../queries/Carts.js");

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
};
