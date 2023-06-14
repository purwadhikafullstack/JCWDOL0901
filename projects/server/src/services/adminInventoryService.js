const { startFindErrorHandler } = require("../errors/serviceError");
const { readInventoriesQuery } = require("../queries/Inventories");

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
};
