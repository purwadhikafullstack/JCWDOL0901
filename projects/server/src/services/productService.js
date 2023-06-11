const { startFindErrorHandler } = require("../errors/serviceError");
const { readProductsQuery } = require("../queries/Products");

const generateRandomIndex = async top => {
	return await Math.ceil(Math.random() * top);
};

const randomizeProducts = async Products => {
	const result = [];

	for (let i = 0; i < 5; i++) {
		await result.push(Products[await generateRandomIndex(Products.length - 1)]);
	}

	return result;
};

const generateRandomProducts = async branch_id => {
	const Products = await readProductsQuery({ Inventories: { branch_id } });

	return randomizeProducts(Products);
};

module.exports = {
	startFindProductsRecommendation: async branch_id => {
		return new Promise(async (resolve, reject) => {
			try {
				const randomProducts = await generateRandomProducts(branch_id);

				return resolve(randomProducts);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};