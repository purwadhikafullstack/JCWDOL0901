const {
	startFindErrorHandler,
	startCreateErrorHandler,
	startUpdateErrorHandler,
	startDeleteteHandler,
} = require("../errors/serviceError");
const { readCartQuery, addCartQuery, updateCartQuery, deleteCartItemQuery } = require("../queries/Carts.js");

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
				const { inventory_id, quantity } = body;
				const Carts = await addCartQuery(userData.id, inventory_id, quantity);

				return await resolve(Carts);
			} catch (error) {
				return await reject(await startCreateErrorHandler(error));
			}
		});
	},
	startUpdateCarts: async (userData, body) => {
		return new Promise(async (resolve, reject) => {
			try {
				const { inventory_id, quantity } = body;
				const Carts = await updateCartQuery(userData.id, inventory_id, quantity);

				return await resolve(Carts);
			} catch (error) {
				return await reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startDeleteCarts: async (userData, params) => {
		return new Promise(async (resolve, reject) => {
			try {
				// const {inventory_id, quantity} = body;
				const Carts = await deleteCartItemQuery(userData.id, params.inventory_id);

				return await resolve({ status: 200, message: "item deleted successfully" });
			} catch (error) {
				return await reject(await startDeleteteHandler(error));
			}
		});
	},
};
