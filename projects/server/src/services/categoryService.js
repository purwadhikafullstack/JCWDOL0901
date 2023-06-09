const { startFindErrorHandler } = require("../errors/serviceError");
const { readCategoryQuery } = require("../queries/Categories");

module.exports = {
	startFindCategories: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const Category = await readCategoryQuery();
				return resolve(Category);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
