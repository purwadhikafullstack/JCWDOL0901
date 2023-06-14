const { Inventories, Products } = require("../models/index.js");
const { Sequelize, Op } = require("sequelize");
const { readProductsQuery } = require("./Products.js");

const readInventoriesQuery = async (branch_id, name, filter, order, page) => {
	// TODO: Implement Item Per Page and Put in Offset and Limit
	return Inventories.findAndCountAll({
		where: { branch_id },
		include: {
			model: Products,
			where: { ...filter?.Products, name: { [Op.like]: `%${name}%` } },
		},
		attributes: {
			include: [[Sequelize.col("Product.name"), "name"]],
		},
		offset: page ? (page - 1) * 3 : null,
		limit: page ? 3 : null,
		order: [...order?.Products, ...order?.Inventories],
	});
};

const createInventoryQueryForNewBranch = async (Branch, transaction) => {
	const Product = await readProductsQuery();

	return Branch.addProducts(Product, { transaction });
};

module.exports = { readInventoriesQuery, createInventoryQueryForNewBranch };
