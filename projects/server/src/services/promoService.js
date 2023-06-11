const { startRegistrationErrorHandler, startFindErrorHandler } = require("../errors/serviceError");
const { paginateData } = require("../helpers/queryHelper");
const {
	createInventoryPromotionQuery,
	readInventoryPromotionQuery,
	updateInventoryPromotionQuery,
	deleteInventoryPromotionQuery,
} = require("../queries/Inventory_promotions");

module.exports = {
	startFindInventoryPromotion: async (branch_id, filter, order, page) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Inventory_promotion = await readInventoryPromotionQuery(branch_id, filter, order);
				const paginatedData = await paginateData(Inventory_promotion, page);

				return resolve(paginatedData);
			} catch (error) {
				console.log(error);
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
				// TODO:
				await deleteInventoryPromotionQuery(id);

				return resolve("Inventory Promotion Deleted!");
			} catch (error) {
				return reject({ code: 500, message: "Internal Server Error" });
			}
		});
	},
};
