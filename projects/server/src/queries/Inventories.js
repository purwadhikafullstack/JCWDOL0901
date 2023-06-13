const { Inventories, Products } = require("../models/index.js");
const { Sequelize } = require("sequelize");
const { readProductsQuery } = require("./Products.js");

const readInventoriesQuery = async branch_id => {
	return Inventories.findAll({
		where: { branch_id },
		include: { model: Products },
		attributes: {
			include: [[Sequelize.col("Product.name"), "name"]],
		},
	});
};

const createInventoryQueryForNewBranch = async (Branch, transaction) => {
	const Product = await readProductsQuery();

	return Branch.addProducts(Product, { transaction });
};

module.exports = { readInventoriesQuery, createInventoryQueryForNewBranch };
