const { startRegistrationErrorHandler } = require("../errors/serviceError");
const {
	createInventoryPromotionQuery,
	updateInventoryPromotionQuery,
} = require("../queries/Inventory_promotions");

module.exports = {
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
