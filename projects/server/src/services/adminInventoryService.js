const { startUpdateErrorHandler, startFindErrorHandler } = require("../errors/serviceError.js");
const { sequelize } = require("../models/index.js");
const { readInventoriesQuery, updateInventoriesQuery } = require("../queries/Inventories.js");
const { createStockChangeQuery, readStockChangeQuery } = require("../queries/Stock_changes.js");

module.exports = {
	startFindInventories: async (branch_id, name, filter, order, page) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Inventories = await readInventoriesQuery(branch_id, name, filter, order, page);

				resolve(Inventories);
			} catch (error) {
				reject(await startFindErrorHandler(error));
			}
		});
	},

	startEditInventories: async (inventory_id, stock, description) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const { Inventory, previousStock } = await updateInventoriesQuery(inventory_id, stock, transaction);
				const Stock_change = await createStockChangeQuery(Inventory, previousStock, description, transaction);

				await transaction.commit();
				resolve("Stock change success!");
			} catch (error) {
				await transaction.rollback();
				reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startFindStockChanges: async (query, branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Stock_changes = await readStockChangeQuery(query, branch_id);
				return await resolve(Stock_changes);
			} catch (error) {
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
};
