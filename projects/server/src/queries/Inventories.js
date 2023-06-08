const { readProductsQuery } = require("./Products.js");

const createInventoryQueryForNewBranch = async (Branch, transaction) => {
	const Product = await readProductsQuery();

	return Branch.addProducts(Product, { transaction });
};

module.exports = { createInventoryQueryForNewBranch };
