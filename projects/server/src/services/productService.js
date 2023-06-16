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

const generateRandomProducts = async (branch_id) => {
	const Products = await readProductsQuery({ Inventories: { branch_id } });

	return await randomizeProducts(Products);
};

module.exports = {
	startFindProductsRecommendation: async (branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const randomProducts = await generateRandomProducts(branch_id);

				return resolve(randomProducts);
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
