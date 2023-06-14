const { startFindErrorHandler, startCreateHandler } = require("../errors/serviceError");
const {
	readCategoryQuery,
	createCategoryQuery,
	updateCategoryQuery,
} = require("../queries/Categories");

module.exports = {
	startFindCategories: async (filter, order, page, itemPerPage) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Category = await readCategoryQuery(filter, order, page, itemPerPage);
				return resolve(Category);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startCreateCategory: async (body, file) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Category = await createCategoryQuery(body, file);
				return resolve(Category);
			} catch (error) {
				return reject(await startCreateHandler(error));
			}
		});
	},
	startUpdateCategory: async (body, file, params) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Category = await updateCategoryQuery(body, file, params);
				return resolve(Category);
			} catch (error) {
				return reject(await startCreateHandler(error));
			}
		});
	},
};
