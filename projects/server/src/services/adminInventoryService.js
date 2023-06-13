const { startFindErrorHandler } = require("../errors/serviceError");
const { readInventoriesQuery } = require("../queries/Inventories");

module.exports = {
	startFindInventories: async branch_id => {
		return new Promise(async (resolve, reject) => {
			try {
				const Inventories = await readInventoriesQuery(branch_id);

				resolve(Inventories);
			} catch (error) {
				reject(await startFindErrorHandler(error));
			}
		});
	},
};
