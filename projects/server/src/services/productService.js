const { startFindErrorHandler } = require("../errors/serviceError");
const { readProductsQuery } = require("../queries/Products");

const generateRandomIndex = async (top) => {
	return await Math.ceil(Math.random() * top);
};

const randomizeProducts = async (Products) => {
	const result = [];

	for (let i = 0; i < 5; i++) {
		await result.push(Products[await generateRandomIndex(Products.length - 1)]);
	}

	return result;
};

const generateRandomProducts = async (branch_id) => {
	const ProductList = await readProductsQuery({ Inventories: { branch_id } });
	return randomizeProducts(ProductList.rows);
};

module.exports = {
	startFindProductsRecommendation: async (branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const randomProducts = await generateRandomProducts(branch_id);

				return resolve(randomProducts);
			} catch (error) {
				console.log(error);
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindProducts: async (filter, order, branch_id, page, itemPerPage) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Products = {};
				["name", "category_id"].forEach((key) => {
					if (filter[key]) Products[key] = filter[key];
				});
				const ProductList = await readProductsQuery({
					Products,
					Inventories: { branch_id },
					order,
					page,
					itemPerPage,
				});

				return resolve(ProductList);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
