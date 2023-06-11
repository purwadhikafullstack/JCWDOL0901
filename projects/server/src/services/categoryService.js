const { startFindErrorHandler, startCreateHandler } = require("../errors/serviceError");
const { readCategoryQuery, createCategoryQuery } = require("../queries/Categories");

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
	startCreateCategory: async body => {
		return new Promise(async (resolve, reject) => {
			try {
				const Category = await createCategoryQuery(body);
				return resolve(Category);
			} catch (error) {
				return reject(await startCreateHandler(error));
			}
		});
	},
};
