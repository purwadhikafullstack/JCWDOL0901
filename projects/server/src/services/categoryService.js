const { startFindErrorHandler, startCreateErrorHandler, startDeleteteHandler } = require("../errors/serviceError");
const {
	readCategoryQuery,
	createCategoryQuery,
	updateCategoryQuery,
	deleteCategoryQuery,
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
				return reject(await startCreateErrorHandler(error));
			}
		});
	},
	startUpdateCategory: async (body, file, params) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Category = await updateCategoryQuery(body, file, params);
				return resolve(Category);
			} catch (error) {
				return reject(await startCreateErrorHandler(error));
			}
		});
	},
	startDeleteCategory: async (params) => {
		return new Promise(async (resolve, reject) => {
			try {
				await deleteCategoryQuery(params);
				return resolve({
					status: 200,
					message: "Category deleted successfully",
				});
			} catch (error) {
				return reject(await startDeleteteHandler(error));
			}
		});
	},
};
