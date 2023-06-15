const { startRegistrationErrorHandler, startFindErrorHandler } = require("../errors/serviceError");

const {
	createInventoryPromotionQuery,
	readInventoryPromotionQuery,
	updateInventoryPromotionQuery,
	deleteInventoryPromotionQuery,
} = require("../queries/Inventory_promotions");

module.exports = {
	startFindInventoryPromotion: async (branch_id, name, filter, order, page) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Inventory_promotion = await readInventoryPromotionQuery(
					branch_id,
					name,
					filter,
					order,
					page
				);

				return resolve(Inventory_promotion);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startInventoryPromotionRegistration: async data => {
		return new Promise(async (resolve, reject) => {
			try {
				await createInventoryPromotionQuery(data);
				return resolve("Inventory Promotion Created!");
			} catch (error) {
				return reject(await startRegistrationErrorHandler(error));
			}
		});
	},
	startInventoryPromotionUpdate: async (data, id) => {
		return new Promise(async (resolve, reject) => {
			try {
				await updateInventoryPromotionQuery(data, id);

				return resolve("Inventory Promotion Updated!");
			} catch (error) {
				return reject({ code: 500, send: "Internal Server Error" });
			}
		});
	},
	startInventoryPromotionDelete: async id => {
		return new Promise(async (resolve, reject) => {
			try {
				// TODO: Implement to frontend
				await deleteInventoryPromotionQuery(id);

				return resolve("Inventory Promotion Deleted!");
			} catch (error) {
				return reject({ code: 500, message: "Internal Server Error" });
			}
		});
	},
};
