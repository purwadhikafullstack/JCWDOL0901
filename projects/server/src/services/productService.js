const { startFindErrorHandler } = require("../errors/serviceError");
const { readProductQuery, readProductsQuery } = require("../queries/Products");

const generateRandomIndex = (top, indexHit) => {
	let randomIndex = Math.ceil(Math.random() * top);

	return randomIndex;
};

const randomizeProducts = async (Products) => {
	const result = [];
	const indexHit = [];
	const top = Products.length - 1;

	for (let i = 0; i < 5; i++) {
		const index = await generateRandomIndex(top, indexHit);
		await indexHit.push(index);
		await result.push(Products[index]);
	}

	return result;
};

const generateRandomProducts = async (filter) => {
	const Products = await readProductsQuery(filter);
	return await randomizeProducts(Products.rows);
};

module.exports = {
	startFindProductsRecommendation: async (filter) => {
		return new Promise(async (resolve, reject) => {
			try {
				const randomProducts = await generateRandomProducts(filter);

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
	startFindRelatedProducts: async (filter) => {
		return new Promise(async (resolve, reject) => {
			try {
				const relatedProducts = await readProductsQuery(filter);

				return resolve(relatedProducts.rows);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindProductDetail: async (inventory_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Product = await readProductQuery(inventory_id);

				return resolve(Product);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
