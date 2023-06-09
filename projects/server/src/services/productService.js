const {
	startFindErrorHandler,
	startCreateErrorHandler,
	startUpdateErrorHandler,
	startDeleteteHandler,
} = require("../errors/serviceError");
const {
	readProductQuery,
	readProductsQuery,
	createProductQuery,
	updateProductQuery,
	deleteProductQuery,
	readProductsOnlyQuery,
} = require("../queries/Products");

const generateRandomIndex = async (top, indexHit) => {
	let randomIndex;

	do {
		randomIndex = await Math.ceil(Math.random() * top);
	} while (indexHit.includes(randomIndex));

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
	startFindProductsOnly: async (filter, order, page, itemPerPage) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Products = {};
				["name", "category_id", "active"].forEach((key) => {
					if (filter[key]) Products[key] = filter[key];
				});
				const ProductList = await readProductsOnlyQuery({
					Products,
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
				return resolve(relatedProducts);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindProductsOnly: async (filter, order, page, itemPerPage) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Products = {};
				["name", "category_id", "active"].forEach((key) => {
					if (filter[key]) Products[key] = filter[key];
				});
				const ProductList = await readProductsOnlyQuery({
					Products,
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
				return resolve(relatedProducts);
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
	startCreateProduct: async (body, file) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Product = await createProductQuery(body, file);
				return resolve(Product);
			} catch (error) {
				return reject(await startCreateErrorHandler(error));
			}
		});
	},
	startUpdateProduct: async (body, file, params) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Product = await updateProductQuery(body, file, params);
				return resolve(Product);
			} catch (error) {
				return reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startDeleteProduct: async (params) => {
		return new Promise(async (resolve, reject) => {
			try {
				await deleteProductQuery(params);
				return resolve({
					status: 200,
					message: "Product deleted successfully",
				});
			} catch (error) {
				return reject(await startDeleteteHandler(error));
			}
		});
	},
};
