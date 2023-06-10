const { startRegistrationErrorHandler } = require("../errors/serviceError");
const {
	createInventoryPromotionQuery,
	updateInventoryPromotionQuery,
} = require("../queries/Inventory_promotions");

module.exports = {
	startFindInventoryPromotion: async branch_id => {
		return new Promise(async (resolve, reject) => {
			try {
				return resolve(1);
			} catch (error) {
				return reject(await 1);
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
				return reject(await startUpdateErrorHandler(error));
			}
		});
	},
};
